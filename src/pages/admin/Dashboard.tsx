import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, EyeOff, FolderOpen, TicketCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  published: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const { isAdmin, loading, user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/auth');
    }
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchPosts();
    }
  }, [isAdmin]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, slug, title, category, excerpt, published, created_at')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
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

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: 'Success',
        description: `Post ${!currentStatus ? 'published' : 'unpublished'}`,
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

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
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

  if (loading || !isAdmin) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl pt-24">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/admin/projects')}>
          <CardHeader className="flex flex-row items-center gap-3">
            <FolderOpen className="h-6 w-6 text-accent" />
            <CardTitle className="text-lg">Manage Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Add, edit, or publish recent projects shown on the homepage.</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/admin/blog/new')}>
          <CardHeader className="flex flex-row items-center gap-3">
            <Plus className="h-6 w-6 text-accent" />
            <CardTitle className="text-lg">New Blog Post</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Create and publish a new blog article.</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/admin/tickets')}>
          <CardHeader className="flex flex-row items-center gap-3">
            <TicketCheck className="h-6 w-6 text-accent" />
            <CardTitle className="text-lg">Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">View and manage customer support tickets.</p>
          </CardContent>
        </Card>
      </div>

      {/* Blog Posts Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Blog Posts</h2>
        <Button onClick={() => navigate('/admin/blog/new')}>
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {loadingPosts ? (
        <div>Loading posts...</div>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{post.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{post.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => togglePublished(post.id, post.published)}
                    >
                      {post.published ? (
                        <><Eye className="w-4 h-4 mr-2" />Published</>
                      ) : (
                        <><EyeOff className="w-4 h-4 mr-2" />Draft</>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deletePost(post.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
