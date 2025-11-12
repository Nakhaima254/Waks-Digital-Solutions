import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogSidebarProps {
  currentCategory?: string;
}

const BlogSidebar = ({ currentCategory }: BlogSidebarProps) => {
  const relatedPosts = [
    {
      id: "web-design-trends-2025",
      title: "Top 10 Web Design Trends Dominating 2025",
      category: "Design",
      readTime: "8 min"
    },
    {
      id: "seo-guide-kenyan-businesses",
      title: "Complete SEO Guide for Kenyan Businesses",
      category: "SEO",
      readTime: "12 min"
    },
    {
      id: "ecommerce-success-kenya",
      title: "Building Successful E-commerce in Kenya",
      category: "E-commerce",
      readTime: "15 min"
    },
    {
      id: "mobile-ux-best-practices",
      title: "Mobile UX Best Practices: Designing for Touch",
      category: "Mobile",
      readTime: "12 min"
    },
    {
      id: "social-media-marketing-guide",
      title: "Social Media Marketing Strategies",
      category: "Marketing",
      readTime: "15 min"
    },
    {
      id: "responsive-web-design",
      title: "Responsive Web Design Best Practices",
      category: "Development",
      readTime: "10 min"
    }
  ];

  // Filter out posts from current category to show diverse content
  const suggestedPosts = currentCategory
    ? relatedPosts.filter(post => post.category !== currentCategory).slice(0, 4)
    : relatedPosts.slice(0, 4);

  return (
    <aside className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Read More Blogs</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group block p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
          
          <Link
            to="/blog?category=All"
            className="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium mt-4"
          >
            View All Blogs
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Latest", "Design", "SEO", "E-commerce", "Development", "Mobile", "Marketing", "Industry News", "AI News"].map((category) => (
              <Link key={category} to={`/blog?category=${encodeURIComponent(category)}`}>
                <Badge
                  variant={currentCategory === category ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-2">Need Expert Help?</h3>
          <p className="text-sm text-primary-foreground/90 mb-4">
            Let's discuss how we can transform your digital presence.
          </p>
          <Link
            to="/contact"
            className="block w-full text-center py-2 px-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;
