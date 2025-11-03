import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import blog images
import webDesignTrendsImage from "@/assets/blog-web-design-trends.jpg";
import seoKenyaImage from "@/assets/blog-seo-kenya.jpg";
import ecommerceKenyaImage from "@/assets/blog-ecommerce-kenya.jpg";
import wordpressVsCustomImage from "@/assets/blog-wordpress-vs-custom.jpg";
import mobileOptimizationImage from "@/assets/blog-mobile-optimization.jpg";
import digitalMarketingSMEsImage from "@/assets/blog-digital-marketing-smes.jpg";
import colorPsychologyImage from "@/assets/blog-color-psychology.jpg";
import navigationDesignImage from "@/assets/blog-navigation-design.jpg";
import typographyTrendsImage from "@/assets/blog-typography-trends.jpg";
import minimalistMaximalistImage from "@/assets/blog-minimalist-maximalist.jpg";
import accessibilityDesignImage from "@/assets/blog-accessibility-design.jpg";
import visualHierarchyImage from "@/assets/blog-visual-hierarchy.jpg";
import keywordResearchImage from "@/assets/blog-keyword-research.jpg";
import metaTagsImage from "@/assets/blog-meta-tags-seo.jpg";
import ecommerceSeoImage from "@/assets/blog-ecommerce-seo.jpg";
import seoAuditImage from "@/assets/blog-seo-audit.jpg";
import mobileSeoImage from "@/assets/blog-mobile-seo.jpg";
import internationalSeoImage from "@/assets/blog-international-seo.jpg";
import abandonedCartImage from "@/assets/blog-abandoned-cart-hero.jpg";
import ecommerceAnalyticsImage from "@/assets/blog-ecommerce-analytics-hero.jpg";
import crossSellingImage from "@/assets/blog-cross-selling-hero.jpg";
import siteArchitectureImage from "@/assets/blog-site-architecture-hero.jpg";
import productReviewsImage from "@/assets/blog-product-reviews-hero.jpg";
import mobileAppImage from "@/assets/blog-mobile-app-hero.jpg";
import responsiveDesignImage from "@/assets/blog-responsive-design.jpg";
import pwaImage from "@/assets/blog-pwa-hero.jpg";
import apiDesignImage from "@/assets/blog-api-design.jpg";
import performanceImage from "@/assets/blog-performance-hero.jpg";
import versionControlImage from "@/assets/blog-version-control.jpg";
import testingImage from "@/assets/blog-testing-hero.jpg";
import mobileUXImage from "@/assets/blog-mobile-ux-hero.jpg";
import mobilePaymentImage from "@/assets/blog-mobile-payment-hero.jpg";
import mobileSpeedImage from "@/assets/blog-mobile-speed-hero.jpg";
import mobileContentImage from "@/assets/blog-mobile-content-hero.jpg";
import mobileAccessibilityImage from "@/assets/blog-mobile-accessibility-hero.jpg";
import mobileTestingImage from "@/assets/blog-mobile-testing-hero.jpg";
import socialMediaImage from "@/assets/blog-social-media-marketing.jpg";
import emailMarketingImage from "@/assets/blog-email-marketing-hero.jpg";
import contentMarketingImage from "@/assets/blog-content-marketing-hero.jpg";
import googleMyBusinessImage from "@/assets/blog-google-my-business.jpg";
import influencerMarketingImage from "@/assets/blog-influencer-marketing-hero.jpg";
import videoMarketingImage from "@/assets/blog-video-marketing-hero.jpg";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const blogPosts = [
    {
      id: "web-design-trends-2025",
      title: "Top 10 Web Design Trends Dominating 2025",
      excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2025, from AI-powered interfaces to sustainable design practices.",
      author: "Isaac N.",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Design",
      image: webDesignTrendsImage
    },
    {
      id: "seo-guide-kenyan-businesses",
      title: "Complete SEO Guide for Kenyan Businesses in 2025",
      excerpt: "Learn how to optimize your website for local search and dominate Google results in Kenya with our comprehensive SEO strategies.",
      author: "Isaac N.",
      date: "January 5, 2025",
      readTime: "12 min read",
      category: "SEO",
      image: seoKenyaImage
    },
    {
      id: "ecommerce-success-kenya",
      title: "Building a Successful E-commerce Business in Kenya",
      excerpt: "From M-Pesa integration to local logistics - everything you need to know about starting an e-commerce business in Kenya.",
      author: "Isaac N.",
      date: "January 2, 2025",
      readTime: "15 min read",
      category: "E-commerce",
      image: ecommerceKenyaImage
    },
    {
      id: "wordpress-vs-custom-development",
      title: "WordPress vs Custom Development: Which is Right for Your Business?",
      excerpt: "Compare the pros and cons of WordPress and custom development to make the best choice for your business needs and budget.",
      author: "Isaac N.",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Development",
      image: wordpressVsCustomImage
    },
    {
      id: "mobile-optimization-importance",
      title: "Why Mobile Optimization is Critical for Kenyan Businesses",
      excerpt: "With over 90% of Kenyans accessing the internet via mobile, learn why mobile optimization can make or break your online success.",
      author: "Isaac N.",
      date: "December 25, 2024",
      readTime: "7 min read",
      category: "Mobile",
      image: mobileOptimizationImage
    },
    {
      id: "digital-marketing-strategies-smes",
      title: "Digital Marketing Strategies That Work for Kenyan SMEs",
      excerpt: "Practical, budget-friendly digital marketing strategies that small and medium enterprises in Kenya can implement immediately.",
      author: "Isaac N.",
      date: "December 20, 2024",
      readTime: "11 min read",
      category: "Marketing",
      image: digitalMarketingSMEsImage
    },
    {
      id: "color-psychology-web-design",
      title: "The Psychology of Color in Web Design: A Guide for Kenyan Brands",
      excerpt: "Discover how color choices influence emotions and drive conversions for Kenyan businesses online.",
      author: "Isaac N.",
      date: "January 12, 2025",
      readTime: "10 min read",
      category: "Design",
      image: colorPsychologyImage
    },
    {
      id: "navigation-design-best-practices",
      title: "Creating User-Friendly Navigation: Best Practices for 2025",
      excerpt: "Master the art of intuitive website navigation that keeps Kenyan visitors engaged and converts them into customers.",
      author: "Isaac N.",
      date: "January 15, 2025",
      readTime: "12 min read",
      category: "Design",
      image: navigationDesignImage
    },
    {
      id: "typography-trends-kenya",
      title: "Typography Trends That Make Kenyan Websites Stand Out",
      excerpt: "Explore the latest typography trends and font pairings that elevate your brand and enhance readability.",
      author: "Isaac N.",
      date: "January 18, 2025",
      readTime: "9 min read",
      category: "Design",
      image: typographyTrendsImage
    },
    {
      id: "minimalist-vs-maximalist",
      title: "Minimalist vs Maximalist Design: Which Suits Your Business?",
      excerpt: "Understand the pros and cons of both design approaches to choose the perfect style for your Kenyan brand.",
      author: "Isaac N.",
      date: "January 20, 2025",
      readTime: "11 min read",
      category: "Design",
      image: minimalistMaximalistImage
    },
    {
      id: "accessibility-design-guide",
      title: "Web Accessibility: Designing for Everyone in Kenya",
      excerpt: "Learn how to create inclusive websites that reach wider audiences and comply with accessibility standards.",
      author: "Isaac N.",
      date: "January 22, 2025",
      readTime: "13 min read",
      category: "Design",
      image: accessibilityDesignImage
    },
    {
      id: "visual-hierarchy-principles",
      title: "Mastering Visual Hierarchy in Web Design",
      excerpt: "Guide users naturally through your content with effective visual hierarchy principles and techniques.",
      author: "Isaac N.",
      date: "January 25, 2025",
      readTime: "10 min read",
      category: "Design",
      image: visualHierarchyImage
    },
    {
      id: "keyword-research-guide",
      title: "The Ultimate Guide to Keyword Research for Kenyan Websites",
      excerpt: "Master keyword research to dominate search results and attract your target audience in Kenya.",
      author: "Isaac N.",
      date: "January 28, 2025",
      readTime: "14 min read",
      category: "SEO",
      image: keywordResearchImage
    },
    {
      id: "meta-tags-schema-markup",
      title: "Meta Tags & Schema Markup: Complete Guide for Kenyan Websites",
      excerpt: "Learn how to optimize meta tags and implement schema markup to boost your search visibility in Kenya.",
      author: "Isaac N.",
      date: "January 30, 2025",
      readTime: "12 min read",
      category: "SEO",
      image: metaTagsImage
    },
    {
      id: "ecommerce-seo-strategies",
      title: "E-commerce SEO Strategies for Kenyan Online Stores",
      excerpt: "Master e-commerce SEO to increase organic traffic and sales for your Kenyan online store.",
      author: "Isaac N.",
      date: "February 2, 2025",
      readTime: "15 min read",
      category: "SEO",
      image: ecommerceSeoImage
    },
    {
      id: "seo-audit-checklist",
      title: "Complete SEO Audit Checklist for Kenyan Websites",
      excerpt: "Identify and fix SEO issues holding your Kenyan website back with this comprehensive audit checklist.",
      author: "Isaac N.",
      date: "February 4, 2025",
      readTime: "13 min read",
      category: "SEO",
      image: seoAuditImage
    },
    {
      id: "mobile-first-indexing",
      title: "Mobile-First Indexing: What Kenyan Websites Need to Know",
      excerpt: "Optimize your website for mobile-first indexing to maintain rankings in Kenya's mobile-dominated market.",
      author: "Isaac N.",
      date: "February 6, 2025",
      readTime: "11 min read",
      category: "SEO",
      image: mobileSeoImage
    },
    {
      id: "international-seo",
      title: "International SEO Guide for Kenyan Businesses Going Global",
      excerpt: "Learn how to optimize your website for multiple countries and languages while maintaining your Kenyan presence.",
      author: "Isaac N.",
      date: "February 8, 2025",
      readTime: "10 min read",
      category: "SEO",
      image: internationalSeoImage
    },
    {
      id: "abandoned-cart-recovery",
      title: "Abandoned Cart Recovery Strategies for Kenyan E-commerce Stores",
      excerpt: "Recover lost sales and boost revenue with proven cart abandonment recovery strategies tailored for the Kenyan market.",
      author: "Isaac N.",
      date: "February 10, 2025",
      readTime: "14 min read",
      category: "E-commerce",
      image: abandonedCartImage
    },
    {
      id: "ecommerce-analytics",
      title: "E-commerce Analytics Guide for Kenyan Online Stores",
      excerpt: "Master e-commerce analytics to make data-driven decisions and grow your Kenyan online business profitably.",
      author: "Isaac N.",
      date: "February 12, 2025",
      readTime: "16 min read",
      category: "E-commerce",
      image: ecommerceAnalyticsImage
    },
    {
      id: "cross-selling-upselling",
      title: "Cross-Selling and Upselling Strategies for Kenyan E-commerce",
      excerpt: "Increase average order value and revenue with proven cross-selling and upselling techniques for the Kenyan market.",
      author: "Isaac N.",
      date: "February 14, 2025",
      readTime: "13 min read",
      category: "E-commerce",
      image: crossSellingImage
    },
    {
      id: "site-architecture-seo",
      title: "E-commerce Site Architecture and SEO for Kenyan Stores",
      excerpt: "Build a scalable site structure that improves SEO and user experience for your Kenyan online store.",
      author: "Isaac N.",
      date: "February 16, 2025",
      readTime: "12 min read",
      category: "E-commerce",
      image: siteArchitectureImage
    },
    {
      id: "product-reviews-strategy",
      title: "Product Reviews Strategy for Kenyan E-commerce Success",
      excerpt: "Build trust and increase conversions with authentic product reviews and customer testimonials.",
      author: "Isaac N.",
      date: "February 18, 2025",
      readTime: "11 min read",
      category: "E-commerce",
      image: productReviewsImage
    },
    {
      id: "mobile-app-ecommerce",
      title: "Mobile Apps for E-commerce: Worth It for Kenyan Businesses?",
      excerpt: "Evaluate whether a mobile app makes sense for your Kenyan e-commerce store and learn best practices for implementation.",
      author: "Isaac N.",
      date: "February 20, 2025",
      readTime: "15 min read",
      category: "E-commerce",
      image: mobileAppImage
    },
    {
      id: "responsive-web-design",
      title: "Responsive Web Design Best Practices for 2025",
      excerpt: "Learn how to create websites that look perfect on every device. Master the art of responsive design with modern techniques and best practices.",
      author: "Isaac N.",
      date: "January 15, 2025",
      readTime: "10 min read",
      category: "Development",
      image: responsiveDesignImage
    },
    {
      id: "progressive-web-apps",
      title: "Building Progressive Web Apps: The Future of Web Development",
      excerpt: "Discover how Progressive Web Apps combine the best of web and mobile apps to deliver exceptional user experiences with offline capabilities.",
      author: "Isaac N.",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Development",
      image: pwaImage
    },
    {
      id: "api-design-best-practices",
      title: "API Design Best Practices: Building Robust Backend Systems",
      excerpt: "Master the art of API design with best practices for creating scalable, secure, and developer-friendly backend systems.",
      author: "Isaac N.",
      date: "January 10, 2025",
      readTime: "14 min read",
      category: "Development",
      image: apiDesignImage
    },
    {
      id: "web-performance-optimization",
      title: "Web Performance Optimization: Speed Matters",
      excerpt: "Learn how to optimize your website's performance for faster loading times, better user experiences, and improved search rankings.",
      author: "Isaac N.",
      date: "January 8, 2025",
      readTime: "11 min read",
      category: "Development",
      image: performanceImage
    },
    {
      id: "version-control-git",
      title: "Mastering Git: Version Control for Modern Development",
      excerpt: "Learn essential Git workflows and best practices for effective version control, team collaboration, and maintaining clean project history.",
      author: "Isaac N.",
      date: "January 5, 2025",
      readTime: "13 min read",
      category: "Development",
      image: versionControlImage
    },
    {
      id: "automated-testing",
      title: "Automated Testing: Building Reliable Web Applications",
      excerpt: "Discover how automated testing ensures code quality, prevents regressions, and enables confident deployments in modern web development.",
      author: "Isaac N.",
      date: "January 3, 2025",
      readTime: "12 min read",
      category: "Development",
      image: testingImage
    },
    {
      id: "mobile-ux-best-practices",
      title: "Mobile UX Best Practices: Designing for Touch",
      excerpt: "Master mobile user experience design with best practices for creating intuitive, touch-friendly interfaces that delight Kenyan users.",
      author: "Isaac N.",
      date: "March 15, 2024",
      readTime: "12 min read",
      category: "Mobile",
      image: mobileUXImage
    },
    {
      id: "mobile-payment-integration",
      title: "Mobile Payment Integration for Kenyan Websites",
      excerpt: "Learn how to seamlessly integrate M-Pesa and other mobile payment solutions into your website for maximum conversion.",
      author: "Isaac N.",
      date: "March 12, 2024",
      readTime: "14 min read",
      category: "Mobile",
      image: mobilePaymentImage
    },
    {
      id: "mobile-site-speed-optimization",
      title: "Mobile Site Speed Optimization: Complete Guide",
      excerpt: "Speed up your mobile website with proven optimization techniques for Kenya's mobile-first market.",
      author: "Isaac N.",
      date: "March 8, 2024",
      readTime: "13 min read",
      category: "Mobile",
      image: mobileSpeedImage
    },
    {
      id: "mobile-content-strategy",
      title: "Mobile-Friendly Content Strategy for Maximum Engagement",
      excerpt: "Master the art of creating scannable, engaging mobile content that keeps Kenyan users reading and converting.",
      author: "Isaac N.",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Mobile",
      image: mobileContentImage
    },
    {
      id: "mobile-accessibility-guide",
      title: "Mobile Accessibility: Building Inclusive Websites",
      excerpt: "Create mobile websites accessible to all users, including those with disabilities, following WCAG guidelines.",
      author: "Isaac N.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Mobile",
      image: mobileAccessibilityImage
    },
    {
      id: "mobile-testing-guide",
      title: "Comprehensive Mobile Website Testing Guide",
      excerpt: "Learn effective mobile testing strategies to ensure flawless performance across devices and network conditions.",
      author: "Isaac N.",
      date: "March 10, 2024",
      readTime: "11 min read",
      category: "Mobile",
      image: mobileTestingImage
    },
    {
      id: "social-media-marketing-guide",
      title: "Social Media Marketing Strategies for Kenyan Businesses",
      excerpt: "Master social media marketing with proven strategies that drive engagement and growth for Kenyan brands.",
      author: "Isaac N.",
      date: "March 20, 2024",
      readTime: "15 min read",
      category: "Marketing",
      image: socialMediaImage
    },
    {
      id: "email-marketing-mastery",
      title: "Email Marketing Mastery: Building Profitable Campaigns in Kenya",
      excerpt: "Learn how to create email campaigns that convert, retain customers, and drive sustainable revenue for your Kenyan business.",
      author: "Isaac N.",
      date: "March 18, 2024",
      readTime: "14 min read",
      category: "Marketing",
      image: emailMarketingImage
    },
    {
      id: "content-marketing-strategy",
      title: "Content Marketing Strategy That Drives Business Growth in Kenya",
      excerpt: "Build a content marketing engine that attracts, engages, and converts your target audience into loyal customers.",
      author: "Isaac N.",
      date: "March 15, 2024",
      readTime: "16 min read",
      category: "Marketing",
      image: contentMarketingImage
    },
    {
      id: "local-seo-google-my-business",
      title: "Local SEO & Google My Business: Dominate Local Search in Kenya",
      excerpt: "Master local SEO and Google My Business optimization to attract nearby customers actively searching for your services.",
      author: "Isaac N.",
      date: "March 12, 2024",
      readTime: "13 min read",
      category: "Marketing",
      image: googleMyBusinessImage
    },
    {
      id: "influencer-marketing-kenya",
      title: "Influencer Marketing in Kenya: Finding the Right Partners",
      excerpt: "Learn how to identify, partner with, and measure ROI from influencer collaborations in the Kenyan market.",
      author: "Isaac N.",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "Marketing",
      image: influencerMarketingImage
    },
    {
      id: "video-marketing-guide",
      title: "Video Marketing Guide: Creating Content That Converts in Kenya",
      excerpt: "Master video marketing to captivate audiences, boost engagement, and drive conversions for your Kenyan business.",
      author: "Isaac N.",
      date: "March 5, 2024",
      readTime: "14 min read",
      category: "Marketing",
      image: videoMarketingImage
    }
  ];

  const categories = ["All", "Design", "SEO", "E-commerce", "Development", "Mobile", "Marketing"];

  // Filter blogs by category
  const filteredBlogs = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

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
              variant={activeCategory === category ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((post) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="min-w-10"
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
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