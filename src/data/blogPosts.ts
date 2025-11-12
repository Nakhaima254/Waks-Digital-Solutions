// Centralized blog post metadata for related posts and filtering
export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  // AI News Category
  {
    slug: "machine-learning-analytics",
    title: "Machine Learning in Business Analytics: A Kenyan Perspective",
    category: "AI News",
    excerpt: "Unlock data-driven insights and predictive intelligence to make smarter business decisions.",
    date: "March 18, 2025",
    readTime: "13 min read",
    image: "/src/assets/blog-machine-learning-analytics.jpg",
    url: "/blog/machine-learning-analytics"
  },
  {
    slug: "predictive-analytics-ecommerce",
    title: "Predictive Analytics for E-commerce Success in Kenya",
    category: "AI News",
    excerpt: "Use AI-powered predictive analytics to forecast demand, prevent churn, and make data-driven decisions.",
    date: "March 6, 2025",
    readTime: "14 min read",
    image: "/src/assets/blog-predictive-analytics-ecommerce.jpg",
    url: "/blog/predictive-analytics-ecommerce"
  },
  {
    slug: "nlp-local-languages",
    title: "Natural Language Processing for Swahili and Kenyan Languages",
    category: "AI News",
    excerpt: "Learn how NLP is breaking language barriers and enabling businesses to serve customers in their preferred languages.",
    date: "March 12, 2025",
    readTime: "14 min read",
    image: "/src/assets/blog-nlp-local-languages.jpg",
    url: "/blog/nlp-local-languages"
  },
  {
    slug: "ai-content-tools",
    title: "AI Content Creation Tools: Revolutionizing Kenyan Marketing",
    category: "AI News",
    excerpt: "Discover how AI writing assistants are transforming content creation for businesses across Kenya.",
    date: "March 16, 2025",
    readTime: "15 min read",
    image: "/src/assets/blog-ai-content-tools.jpg",
    url: "/blog/ai-content-tools"
  },
  {
    slug: "ai-customer-service",
    title: "AI-Powered Customer Service Solutions for Kenya",
    category: "AI News",
    excerpt: "Transform customer experience with intelligent automation that scales support while reducing costs.",
    date: "March 20, 2025",
    readTime: "14 min read",
    image: "/src/assets/blog-ai-customer-service.jpg",
    url: "/blog/ai-customer-service"
  },
  {
    slug: "computer-vision-kenya",
    title: "Computer Vision Applications Transforming Kenyan Industries",
    category: "AI News",
    excerpt: "Explore how computer vision is revolutionizing retail, agriculture, security, and healthcare in Kenya.",
    date: "March 8, 2025",
    readTime: "15 min read",
    image: "/src/assets/blog-computer-vision-kenya.jpg",
    url: "/blog/computer-vision-kenya"
  },
  {
    slug: "ai-healthcare-kenya",
    title: "AI in Healthcare: Kenya's Digital Health Revolution",
    category: "AI News",
    excerpt: "Discover how artificial intelligence is transforming healthcare delivery in Kenya, from diagnosis to treatment and patient care.",
    date: "March 28, 2025",
    readTime: "17 min read",
    image: "/src/assets/blog-ai-healthcare-kenya.jpg",
    url: "/blog/ai-healthcare-kenya"
  },
  {
    slug: "ai-ethics-privacy",
    title: "AI Ethics and Data Privacy: A Guide for Kenyan Businesses",
    category: "AI News",
    excerpt: "Navigate the complex landscape of AI ethics and data privacy. Learn how Kenyan businesses can implement AI responsibly.",
    date: "March 26, 2025",
    readTime: "18 min read",
    image: "/src/assets/blog-ai-ethics-privacy.jpg",
    url: "/blog/ai-ethics-privacy"
  },
  {
    slug: "chatgpt-kenyan-businesses",
    title: "How Kenyan Businesses Can Leverage ChatGPT and AI Assistants",
    category: "AI News",
    excerpt: "Practical guide to using ChatGPT and AI assistants to boost productivity and improve customer service.",
    date: "March 22, 2025",
    readTime: "12 min read",
    image: "/src/assets/blog-chatgpt-kenyan-businesses.jpg",
    url: "/blog/chatgpt-kenyan-businesses"
  },
  {
    slug: "ai-marketing-automation",
    title: "AI-Powered Marketing Automation for Kenyan SMEs",
    category: "AI News",
    excerpt: "Discover how AI is revolutionizing marketing automation for small and medium enterprises in Kenya.",
    date: "March 24, 2025",
    readTime: "16 min read",
    image: "/src/assets/blog-ai-marketing-automation.jpg",
    url: "/blog/ai-marketing-automation"
  },

  // Industry News Category
  {
    slug: "ai-web-development-2025",
    title: "How AI is Revolutionizing Web Development in 2025",
    category: "Industry News",
    excerpt: "Explore how artificial intelligence is transforming web development with code generation, testing, and design automation.",
    date: "March 30, 2025",
    readTime: "14 min read",
    image: "/src/assets/blog-ai-web-dev-hero.jpg",
    url: "/blog/ai-web-development-2025"
  },
  {
    slug: "ecommerce-future-kenya",
    title: "The Future of E-commerce in Kenya: Trends and Predictions",
    category: "Industry News",
    excerpt: "Discover the emerging trends shaping Kenya's e-commerce landscape and how businesses can prepare for the future.",
    date: "March 25, 2025",
    readTime: "15 min read",
    image: "/src/assets/blog-ecommerce-future-hero.jpg",
    url: "/blog/ecommerce-future-kenya"
  },
  {
    slug: "web3-blockchain-trends",
    title: "Web3 and Blockchain: What Kenyan Businesses Need to Know",
    category: "Industry News",
    excerpt: "Understand Web3, blockchain technology, and how these innovations could impact your business in Kenya.",
    date: "March 15, 2025",
    readTime: "16 min read",
    image: "/src/assets/blog-web3-blockchain-hero.jpg",
    url: "/blog/web3-blockchain-trends"
  },
  {
    slug: "cybersecurity-trends-2025",
    title: "Cybersecurity Trends 2025: Protecting Your Kenyan Business",
    category: "Industry News",
    excerpt: "Stay ahead of cyber threats with the latest security trends and best practices for Kenyan businesses.",
    date: "March 10, 2025",
    readTime: "15 min read",
    image: "/src/assets/blog-cybersecurity-trends-hero.jpg",
    url: "/blog/cybersecurity-trends-2025"
  },
  {
    slug: "remote-work-digital-tools",
    title: "Remote Work Revolution: Essential Digital Tools for Kenyan Teams",
    category: "Industry News",
    excerpt: "Discover the best digital tools and strategies for managing remote teams effectively in Kenya.",
    date: "March 5, 2025",
    readTime: "13 min read",
    image: "/src/assets/blog-remote-work-hero.jpg",
    url: "/blog/remote-work-digital-tools"
  },
  {
    slug: "green-web-development",
    title: "Green Web Development: Building Sustainable Websites",
    category: "Industry News",
    excerpt: "Learn how to reduce your website's carbon footprint and embrace sustainable web development practices.",
    date: "February 28, 2025",
    readTime: "14 min read",
    image: "/src/assets/blog-green-web-hero.jpg",
    url: "/blog/green-web-development"
  },

  // Marketing Category (sample entries)
  {
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy for Kenyan Businesses",
    category: "Marketing",
    excerpt: "Build a powerful content marketing strategy that drives traffic, engagement, and conversions.",
    date: "March 14, 2025",
    readTime: "16 min read",
    image: "/src/assets/blog-content-marketing-hero.jpg",
    url: "/blog/content-marketing-strategy"
  },
  {
    slug: "email-marketing-mastery",
    title: "Email Marketing Mastery: Complete Guide for Kenya",
    category: "Marketing",
    excerpt: "Master email marketing with strategies for building lists, crafting campaigns, and driving conversions.",
    date: "March 4, 2025",
    readTime: "18 min read",
    image: "/src/assets/blog-email-marketing-hero.jpg",
    url: "/blog/email-marketing-mastery"
  },
  {
    slug: "social-media-marketing-guide",
    title: "Social Media Marketing: Complete Guide for Kenyan Brands",
    category: "Marketing",
    excerpt: "Master social media marketing with platform-specific strategies and best practices for Kenyan businesses.",
    date: "February 20, 2025",
    readTime: "17 min read",
    image: "/src/assets/blog-social-media-marketing.jpg",
    url: "/blog/social-media-marketing-guide"
  },
  {
    slug: "video-marketing-guide",
    title: "Video Marketing Guide: Creating Engaging Content in Kenya",
    category: "Marketing",
    excerpt: "Master video marketing with strategies for creating, distributing, and measuring video content success.",
    date: "February 15, 2025",
    readTime: "16 min read",
    image: "/src/assets/blog-video-marketing-hero.jpg",
    url: "/blog/video-marketing-guide"
  },
  {
    slug: "influencer-marketing-kenya",
    title: "Influencer Marketing in Kenya: A Complete Strategy Guide",
    category: "Marketing",
    excerpt: "Learn how to leverage influencer partnerships to reach new audiences and drive authentic engagement.",
    date: "February 10, 2025",
    readTime: "15 min read",
    image: "/src/assets/blog-influencer-marketing-hero.jpg",
    url: "/blog/influencer-marketing-kenya"
  },
];

// Helper function to get related posts by category
export const getRelatedPosts = (currentSlug: string, category: string, limit: number = 4): BlogPost[] => {
  return blogPosts
    .filter(post => post.category === category && post.slug !== currentSlug)
    .slice(0, limit);
};
