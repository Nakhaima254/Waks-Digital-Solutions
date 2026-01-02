import { Skeleton } from "@/components/ui/skeleton";

export const BlogPageSkeleton = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Skeleton className="h-6 w-32 mx-auto bg-primary-foreground/20" />
        <Skeleton className="h-12 w-3/4 mx-auto bg-primary-foreground/20" />
        <Skeleton className="h-6 w-2/3 mx-auto bg-primary-foreground/20" />
      </div>
    </section>

    {/* Categories */}
    <div className="py-8 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
      </div>
    </div>

    {/* Blog Grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card overflow-hidden">
            <Skeleton className="aspect-video w-full" />
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-10 rounded-md" />
        ))}
      </div>
    </div>
  </div>
);

export const BlogPostSkeleton = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="relative py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <Skeleton className="h-6 w-24 bg-primary-foreground/20 rounded-full" />
        <Skeleton className="h-10 w-full bg-primary-foreground/20" />
        <Skeleton className="h-10 w-3/4 bg-primary-foreground/20" />
        <div className="flex items-center gap-6 pt-4">
          <Skeleton className="h-4 w-24 bg-primary-foreground/20" />
          <Skeleton className="h-4 w-32 bg-primary-foreground/20" />
          <Skeleton className="h-4 w-20 bg-primary-foreground/20" />
        </div>
      </div>
    </section>

    {/* Content */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Skeleton className="aspect-video w-full rounded-lg mb-8" />
      <div className="space-y-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" style={{ width: `${Math.random() * 30 + 70}%` }} />
        ))}
      </div>
    </div>
  </div>
);
