import { useState, useEffect, ReactNode } from "react";
import { BlogPostSkeleton } from "@/components/skeletons/BlogSkeleton";

interface BlogPostWrapperProps {
  children: ReactNode;
}

const BlogPostWrapper = ({ children }: BlogPostWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BlogPostSkeleton />;
  }

  return <>{children}</>;
};

export default BlogPostWrapper;
