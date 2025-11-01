import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/blog-api-design.jpg";
import restImage from "@/assets/blog-api-rest.jpg";
import securityImage from "@/assets/blog-api-security.jpg";

const APIDesignBestPractices = () => {
  return (
    <div className="min-h-screen flex flex-col font-blog">
      <Navigation />
      
      <article className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="API architecture diagram"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-accent hover:text-accent-hover mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                API Design Best Practices: Building Robust Backend Systems
              </h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Isaac N.</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Master the art of API design with best practices for creating scalable, secure, and developer-friendly backend systems that power modern applications.
              </p>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
              <h2>The Foundation of Modern Applications</h2>
              <p>
                APIs (Application Programming Interfaces) are the backbone of modern web applications. Well-designed APIs enable seamless communication between frontend and backend, third-party integrations, and scalable architectures.
              </p>

              <h2>RESTful API Principles</h2>
              <img 
                src={restImage} 
                alt="RESTful API documentation" 
                className="w-full rounded-lg my-6"
              />
              <p>
                REST (Representational State Transfer) remains the most popular API architecture. Understanding REST principles is crucial for building intuitive, maintainable APIs.
              </p>
              <ul>
                <li>Use proper HTTP methods (GET, POST, PUT, DELETE)</li>
                <li>Implement consistent resource naming</li>
                <li>Return appropriate status codes</li>
                <li>Version your APIs for backward compatibility</li>
              </ul>

              <h2>API Security Essentials</h2>
              <img 
                src={securityImage} 
                alt="API security measures" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Security should be built into your API from day one. Implement authentication, authorization, rate limiting, and data validation to protect your systems and users.
              </p>
              <ul>
                <li>Use OAuth 2.0 or JWT for authentication</li>
                <li>Implement rate limiting to prevent abuse</li>
                <li>Validate and sanitize all input data</li>
                <li>Use HTTPS for all API communications</li>
              </ul>

              <h2>Documentation and Developer Experience</h2>
              <p>
                Great APIs come with great documentation. Use tools like Swagger/OpenAPI to create interactive documentation that makes it easy for developers to understand and integrate with your API.
              </p>

              <h2>Error Handling and Responses</h2>
              <p>
                Provide clear, consistent error messages that help developers quickly identify and resolve issues. Include error codes, descriptions, and suggestions for resolution.
              </p>

              <h2>Performance Optimization</h2>
              <p>
                Optimize API performance through caching, pagination, and efficient database queries. Consider implementing GraphQL for complex data requirements where clients can request exactly what they need.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li>✓ Follow REST principles for consistency</li>
                  <li>✓ Prioritize security from the start</li>
                  <li>✓ Provide comprehensive documentation</li>
                  <li>✓ Implement proper error handling</li>
                  <li>✓ Optimize for performance and scalability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default APIDesignBestPractices;
