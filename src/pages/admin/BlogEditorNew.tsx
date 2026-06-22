import { useEffect, useState, useRef } from 'react';
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
import { ArrowLeft, Loader2, Upload, X, Image as ImageIcon } from 'lucide-react';
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
  featured_image: z.string().optional(),
  additional_images: z.string().optional(),
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

  const fileInputRef = useRef<HTMLInputElement>(null);
  const additionalFilesInputRef = useRef<HTMLInputElement>(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState<Array<{url: string; file: File}>>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingAdditional, setIsUploadingAdditional] = useState(false);

  // Image upload handlers
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

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      setFeaturedImagePreview(imageUrl);
      form.setValue('featured_image', imageUrl);
      setIsUploading(false);
    };
    reader.onerror = () => {
      setIsUploading(false);
      toast({ title: "Error", description: "Failed to read image", variant: "destructive" });
    };
    reader.readAsDataURL(file);
  };

  const handleAdditionalImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        toast({ title: "Invalid file", description: "Please select image files only", variant: "destructive" });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "File too large", description: "Each image must be under 5MB", variant: "destructive" });
        return;
      }
    }

    setIsUploadingAdditional(true);
    const promises = files.map(file => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result as string);
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
    });

    try {
      const urls = await Promise.all(promises);
      const newPreviews = files.map((file, index) => ({
        url: urls[index],
        file
      }));
      setAdditionalImagePreviews(newPreviews);
      form.setValue('additional_images', urls.join(','));
    } catch (error) {
      toast({ title: "Error", description: "Failed to process images", variant: "destructive" });
    } finally {
      setIsUploadingAdditional(false);
    }
  };

  const removeFeaturedImage = () => {
    setFeaturedImagePreview(null);
    form.setValue('featured_image', '');
  };

  const removeAdditionalImage = (index: number) => {
    setAdditionalImagePreviews(prev => prev.filter((_, i) => i !== index));
    const urls = additionalImagePreviews
      .filter((_, i) => i !== index)
      .map(p => p.url);
    form.setValue('additional_images', urls.join(','));
  };

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
        additional_images: post.additional_images || '',
        author: post.author || '',
        tags: post.tags ? post.tags.split(',').join(', ') : '',
        status: post.status || 'draft',
      });
      setFeaturedImagePreview(post.featured_image || null);
      const additionalImages = post.additional_images ? post.additional_images.split(',') : [];
      setAdditionalImagePreviews(additionalImages.map(url => ({ url, file: null as any })));
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
              <div className="space-y-2">
                <Label>Featured Image</Label>
                <div className="border border-dashed border-border rounded-lg p-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                      className="flex-1"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Image
                        </>
                      )}
                    </Button>
                  </div>
                  {featuredImagePreview && (
                    <div className="relative mt-3 rounded-lg overflow-hidden border border-border">
                      <img src={featuredImagePreview} alt="Preview" className="w-full h-40 object-cover" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1"
                        onClick={removeFeaturedImage}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
                {form.formState.errors.featured_image && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.featured_image.message}</p>
                )}
              </div>

              {/* Additional Images */}
              <div className="space-y-2">
                <Label>Additional Images (Optional)</Label>
                <div className="border border-dashed border-border rounded-lg p-4">
                  <input
                    type="file"
                    ref={additionalFilesInputRef}
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleAdditionalImagesUpload}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => additionalFilesInputRef.current?.click()}
                    disabled={isUploadingAdditional}
                    className="w-full"
                  >
                    {isUploadingAdditional ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Add More Images
                      </>
                    )}
                  </Button>
                  {additionalImagePreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {additionalImagePreviews.map((preview, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden border border-border">
                          <img src={preview.url} alt={`Preview ${index}`} className="w-full h-20 object-cover" />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 p-1"
                            onClick={() => removeAdditionalImage(index)}
                          >
                            <X className="h-2 w-2" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
