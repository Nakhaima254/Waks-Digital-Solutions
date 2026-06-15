import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/integrations/api/client";
import { Trash2, Plus, Edit2, Save, X, Upload, Image } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | null;
  link: string | null;
  technologies: string[];
  published: boolean;
  featured: boolean;
  created_at: string;
}

const ProjectsManager = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image_url: "",
    link_url: "",
    technologies: "",
    published: false,
  });

  const fetchProjects = async () => {
    try {
      const response = await api.getProjects();
      setProjects(response.data || []);
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to fetch projects", variant: "destructive" });
    }
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const resetForm = () => {
    setForm({ title: "", category: "", description: "", image_url: "", link_url: "", technologies: "", published: false });
    setEditingId(null);
    setShowForm(false);
    setImagePreview(null);
  };

  const handleEdit = (project: Project) => {
    setForm({
      title: project.title,
      category: project.category,
      description: project.description,
      image_url: project.image || "",
      link_url: project.link || "",
      technologies: project.technologies.join(", "),
      published: project.published,
    });
    setEditingId(project.id);
    setImagePreview(project.image || null);
    setShowForm(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({ title: "Invalid file", description: "Please select an image file", variant: "destructive" });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "File too large", description: "Image must be under 5MB", variant: "destructive" });
      return;
    }

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      setForm({ ...form, image_url: imageUrl });
      setImagePreview(imageUrl);
      setUploading(false);
      toast({ title: "Uploaded!", description: "Image ready (base64)" });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.category || !form.description) {
      toast({ title: "Error", description: "Title, category, and description are required", variant: "destructive" });
      return;
    }

    const payload = {
      title: form.title,
      category: form.category,
      description: form.description,
      image: form.image_url || null,
      link: form.link_url || null,
      technologies: form.technologies.split(",").map(t => t.trim()).filter(Boolean),
      published: form.published,
      featured: form.published,
    };

    try {
      if (editingId) {
        await api.updateProject(editingId, payload);
        toast({ title: "Updated!", description: "Project updated successfully" });
      } else {
        await api.createProject(payload);
        toast({ title: "Added!", description: "Project added successfully" });
      }
      resetForm();
      fetchProjects();
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to save project", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    try {
      await api.deleteProject(id);
      toast({ title: "Deleted", description: "Project removed" });
      fetchProjects();
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Failed to delete project", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">Manage Recent Projects</h1>
          <Button onClick={() => { resetForm(); setShowForm(true); }}>
            <Plus className="h-4 w-4 mr-2" /> Add Project
          </Button>
        </div>

        {showForm && (
          <Card className="p-6 mb-8 space-y-4">
            <h2 className="text-xl font-semibold text-primary">
              {editingId ? "Edit Project" : "New Project"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Project name" />
              </div>
              <div className="space-y-2">
                <Label>Category *</Label>
                <Input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="e.g. Travel & Tourism" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Brief project description" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Project Image</Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex-1"
                  >
                    {uploading ? (
                      "Uploading..."
                    ) : (
                      <><Upload className="h-4 w-4 mr-2" /> Choose Image</>
                    )}
                  </Button>
                </div>
                {imagePreview && (
                  <div className="relative mt-2 rounded-lg overflow-hidden border border-border">
                    <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover" />
                    <Button
                      size="sm"
                      variant="destructive"
                      className="absolute top-1 right-1"
                      onClick={() => { setImagePreview(null); setForm({ ...form, image_url: "" }); }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                {!imagePreview && (
                  <div className="mt-2 border border-dashed border-border rounded-lg p-4 flex items-center justify-center text-muted-foreground text-sm">
                    <Image className="h-4 w-4 mr-2" /> No image selected
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label>Website URL</Label>
                <Input value={form.link_url} onChange={e => setForm({ ...form, link_url: e.target.value })} placeholder="https://..." />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Technologies (comma-separated)</Label>
              <Input value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })} placeholder="WordPress, React, SEO" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={form.published} onCheckedChange={checked => setForm({ ...form, published: checked })} />
              <Label>Published (visible on homepage)</Label>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSubmit}>
                <Save className="h-4 w-4 mr-2" /> {editingId ? "Update" : "Add"} Project
              </Button>
              <Button variant="outline" onClick={resetForm}>
                <X className="h-4 w-4 mr-2" /> Cancel
              </Button>
            </div>
          </Card>
        )}

        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-muted-foreground">No projects yet. Add your first one!</p>
        ) : (
          <div className="space-y-4">
            {projects.map(project => (
              <Card key={project.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
                  )}
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-primary">{project.title}</h3>
                      <Badge variant={project.published ? "default" : "secondary"}>
                        {project.published ? "Published" : "Draft"}
                      </Badge>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex gap-1 flex-wrap">
                        {project.technologies.map((t, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{t}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(project.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsManager;