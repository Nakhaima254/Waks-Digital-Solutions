import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Loader2 } from 'lucide-react';
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

const blogSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens'),
  category: z.string().optional(),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  featured_image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  author: z.string().min(2, 'Author is required'),
  tags: z.string().optional(),
  status: z.enum(['draft', 'published']).default('draft'),
});

type BlogFormData = z.infer<typeof blogSchema>;

const CATEGORIES = [
  'Web Development',
  'Web Design',
  'SEO',
  'E-commerce',
  'Digital Marketing',
  'Mobile Development',
  'Technology',
  'Business',
  'Other'
];

export default function BlogEditor() {
  const { id } = useParams();
  const { isAdmin, loading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetching, setIsFetching] = useState(!!id);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      slug: '',
      category: '',
      excerpt: '',
      content: '',
      featured_image: '',
      author: '',
      tags: '',
      status: 'draft',
    },
  });

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
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await apiClient.get(`/api/blog_posts/${id}`);
      const post = response.data;
      form.reset({
        title: post.title,
        slug: post.slug,
        category: post.category || '',
        excerpt: post.excerpt || '',
        content: post.content,
        featured_image: post.featured_image || '',
        author: post.author || '',
        tags: post.tags ? post.tags.split(',').join(', ') : '',
        status: post.status || 'draft',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Failed to fetch post',
        variant: 'destructive',
      });
      navigate('/admin/dashboard');
    } finally {
      setIsFetching(false);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);
    try {
      const postData = {
        ...data,
        tags: data.tags ? data.tags.split(',').map(t => t.trim()).join(',') : null,
        published_at: data.status === 'published' ? new Date().toISOString() : null,
      };

      if (id) {
        await apiClient.put(`/api/blog_posts/${id}`, postData);
        toast({
          title: 'Success',
          description: 'Blog post updated',
        });
      } else {
        await apiClient.post('/api/blog_posts', postData);
        toast({
          title: 'Success',
          description: 'Blog post created',
        });
      }
      navigate('/admin/dashboard');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.response?.data?.error || 'Failed to save post',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || isFetching) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/admin/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{id ? 'Edit Blog Post' : 'New Blog Post'}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  {...form.register('title')}
                  className="mt-1"
                />
                {form.formState.errors.title && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.title.message}</p>
                )}
              </div>

              {/* Slug */}
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  {...form.register('slug')}
                  className="mt-1"
                  placeholder="my-post-title"
                />
                {form.formState.errors.slug && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.slug.message}</p>
                )}
              </div>

              {/* Author & Category */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    {...form.register('author')}
                    className="mt-1"
                  />
                  {form.formState.errors.author && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.author.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={form.watch('category')} onValueChange={(value) => form.setValue('category', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  {...form.register('excerpt')}
                  className="mt-1 min-h-24"
                  placeholder="Brief summary of the post"
                />
                {form.formState.errors.excerpt && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.excerpt.message}</p>
                )}
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  {...form.register('content')}
                  className="mt-1 min-h-96 font-mono text-sm"
                  placeholder="Write your post content here..."
                />
                {form.formState.errors.content && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.content.message}</p>
                )}
              </div>

              {/* Featured Image */}
              <div>
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  {...form.register('featured_image')}
                  className="mt-1"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                />
                {form.formState.errors.featured_image && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.featured_image.message}</p>
                )}
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  {...form.register('tags')}
                  className="mt-1"
                  placeholder="web development, design, tutorial"
                />
              </div>

              {/* Status */}
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={form.watch('status')} onValueChange={(value: any) => form.setValue('status', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  {isSubmitting ? 'Saving...' : id ? 'Update Post' : 'Create Post'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  asChild
                >
                  <Link to="/admin/dashboard">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
