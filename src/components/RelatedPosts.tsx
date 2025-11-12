import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { getRelatedPosts } from "@/data/blogPosts";

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
  limit?: number;
}

const RelatedPosts = ({ currentSlug, category, limit = 4 }: RelatedPostsProps) => {
  const relatedPosts = getRelatedPosts(currentSlug, category, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-3xl font-bold text-primary mb-8">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            to={post.url}
            className="group block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
              
              <span className="inline-block mt-3 text-sm text-primary font-medium group-hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
