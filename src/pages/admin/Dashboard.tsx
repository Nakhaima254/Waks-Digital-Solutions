import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, FileText, Folder, Settings, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const API_BASE_URL = (() => {
  const envUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  const productionFallback = 'https://api.waksdigital.co.ke';
  if (import.meta.env.PROD) {
    return envUrl && !/localhost|127\.0\.0\.1/i.test(envUrl)
      ? envUrl
      : productionFallback;
  }
  return envUrl || 'http://localhost:3000';
})();

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  status: string;
  created_at: string;
}

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  created_at: string;
}

export default function AdminDashboard() {
  const { isAdmin, loading, user, signOut } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('waks-auth-token')}`,
    },
  });

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/auth');
    }
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchPosts();
      fetchProjects();
    }
  }, [isAdmin]);

  const fetchPosts = async () => {
    try {
      const response = await apiClient.get('/api/blog_posts');
      setPosts(response.data || []);
    } catch (error: any) {
      toast({
        title: 'Error fetching posts',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoadingPosts(false);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await apiClient.get('/api/recent_projects');
      setProjects(response.data || []);
    } catch (error: any) {
      toast({
        title: 'Error fetching projects',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoadingProjects(false);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await apiClient.delete(`/api/blog_posts/${id}`);
      toast({
        title: 'Success',
        description: 'Post deleted',
      });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await apiClient.delete(`/api/recent_projects/${id}`);
      toast({
        title: 'Success',
        description: 'Project deleted',
      });
      fetchProjects();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome, {user?.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Folder className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
          </TabsList>

          {/* Blog Posts Tab */}
          <TabsContent value="blog" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Blog Posts</CardTitle>
                <Button asChild>
                  <Link to="/admin/blog/new">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                {loadingPosts ? (
                  <p>Loading posts...</p>
                ) : posts.length === 0 ? (
                  <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
                ) : (
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                        <div className="flex-1">
                          <h3 className="font-semibold">{post.title}</h3>
                          <p className="text-sm text-muted-foreground">{post.slug}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{post.status}</span>
                            {post.category && <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">{post.category}</span>}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/blog/edit/${post.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deletePost(post.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Portfolio Projects</CardTitle>
                <Button asChild>
                  <Link to="/admin/projects/new">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                {loadingProjects ? (
                  <p>Loading projects...</p>
                ) : projects.length === 0 ? (
                  <p className="text-muted-foreground">No projects yet. Add your first project!</p>
                ) : (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                        <div className="flex-1">
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          {project.category && <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded mt-2 inline-block">{project.category}</span>}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/projects/edit/${project.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteProject(project.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Website Settings</h3>
                    <p className="text-sm text-muted-foreground mb-4">Manage your website settings and configuration</p>
                    <Button variant="outline" disabled>
                      Coming Soon
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Backup & Restore</h3>
                    <p className="text-sm text-muted-foreground mb-4">Create backups and restore data</p>
                    <Button variant="outline" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Manage admin users and roles</p>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
