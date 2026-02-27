import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Trash2, Plus, Edit2, Save, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image_url: string | null;
  website_url: string | null;
  technologies: string[];
  published: boolean;
  display_order: number;
}

const ProjectsManager = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image_url: "",
    website_url: "",
    technologies: "",
    published: false,
    display_order: 0,
  });

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("recent_projects")
      .select("*")
      .order("display_order", { ascending: true });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const resetForm = () => {
    setForm({ title: "", category: "", description: "", image_url: "", website_url: "", technologies: "", published: false, display_order: 0 });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (project: Project) => {
    setForm({
      title: project.title,
      category: project.category,
      description: project.description,
      image_url: project.image_url || "",
      website_url: project.website_url || "",
      technologies: project.technologies.join(", "),
      published: project.published,
      display_order: project.display_order,
    });
    setEditingId(project.id);
    setShowForm(true);
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
      image_url: form.image_url || null,
      website_url: form.website_url || null,
      technologies: form.technologies.split(",").map(t => t.trim()).filter(Boolean),
      published: form.published,
      display_order: form.display_order,
    };

    if (editingId) {
      const { error } = await supabase.from("recent_projects").update(payload).eq("id", editingId);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Updated!", description: "Project updated successfully" });
    } else {
      const { error } = await supabase.from("recent_projects").insert(payload);
      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
        return;
      }
      toast({ title: "Added!", description: "Project added successfully" });
    }
    resetForm();
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    const { error } = await supabase.from("recent_projects").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Deleted", description: "Project removed" });
      fetchProjects();
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
                <Label>Image URL</Label>
                <Input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <Label>Website URL</Label>
                <Input value={form.website_url} onChange={e => setForm({ ...form, website_url: e.target.value })} placeholder="https://..." />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Technologies (comma-separated)</Label>
                <Input value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })} placeholder="WordPress, React, SEO" />
              </div>
              <div className="space-y-2">
                <Label>Display Order</Label>
                <Input type="number" value={form.display_order} onChange={e => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} />
              </div>
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
