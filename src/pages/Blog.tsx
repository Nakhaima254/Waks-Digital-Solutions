import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

// Import blog images
import webDesignTrendsImage from "@/assets/blog-web-design-trends.jpg";
import seoKenyaImage from "@/assets/blog-seo-kenya.jpg";
import ecommerceKenyaImage from "@/assets/blog-ecommerce-kenya.jpg";
import wordpressVsCustomImage from "@/assets/blog-wordpress-vs-custom.jpg";
import mobileOptimizationImage from "@/assets/blog-mobile-optimization.jpg";
import digitalMarketingSMEsImage from "@/assets/blog-digital-marketing-smes.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: "web-design-trends-2025",
      title: "Top 10 Web Design Trends Dominating 2025",
      excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2025, from AI-powered interfaces to sustainable design practices.",
      author: "David Waks",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Design",
      image: webDesignTrendsImage
    },
    {
      id: "seo-guide-kenyan-businesses",
      title: "Complete SEO Guide for Kenyan Businesses in 2025",
      excerpt: "Learn how to optimize your website for local search and dominate Google results in Kenya with our comprehensive SEO strategies.",
      author: "Sarah Mwangi",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "SEO",
      image: seoKenyaImage
    },
    {
      id: "ecommerce-success-kenya",
      title: "Building a Successful E-commerce Business in Kenya",
      excerpt: "From M-Pesa integration to local logistics - everything you need to know about starting an e-commerce business in Kenya.",
      author: "James Kiprotich",
      date: "January 2, 2025",
      readTime: "15 min read",
      category: "E-commerce",
      image: ecommerceKenyaImage
    },
    {
      id: "wordpress-vs-custom-development",
      title: "WordPress vs Custom Development: Which is Right for Your Business?",
      excerpt: "Compare the pros and cons of WordPress and custom development to make the best choice for your business needs and budget.",
      author: "David Waks",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Development",
      image: wordpressVsCustomImage
    },
    {
      id: "mobile-optimization-importance",
      title: "Why Mobile Optimization is Critical for Kenyan Businesses",
      excerpt: "With over 90% of Kenyans accessing the internet via mobile, learn why mobile optimization can make or break your online success.",
      author: "Grace Wanjiku",
      date: "December 25, 2024",
      readTime: "7 min read",
      category: "Mobile",
      image: mobileOptimizationImage
    },
    {
      id: "digital-marketing-strategies-smes",
      title: "Digital Marketing Strategies That Work for Kenyan SMEs",
      excerpt: "Practical, budget-friendly digital marketing strategies that small and medium enterprises in Kenya can implement immediately.",
      author: "Peter Otieno",
      date: "December 20, 2024",
      readTime: "11 min read",
      category: "Marketing",
      image: digitalMarketingSMEsImage
    }
  ];

  const categories = ["All", "Design", "SEO", "E-commerce", "Development", "Mobile", "Marketing"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Digital Insights & Trends</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Stay ahead of the digital curve with expert insights, practical tips, and the latest trends 
            in web development, design, and digital marketing for Kenyan businesses.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest digital insights and trends delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;