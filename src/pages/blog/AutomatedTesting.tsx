import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/blog-testing-hero.jpg";
import unitImage from "@/assets/blog-testing-unit.jpg";
import integrationImage from "@/assets/blog-testing-integration.jpg";

const AutomatedTesting = () => {
  return (
    <div className="min-h-screen flex flex-col font-blog">
      <Navigation />
      
      <article className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Automated testing dashboard"
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
                Automated Testing: Building Reliable Web Applications
              </h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 3, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Isaac N.</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how automated testing ensures code quality, prevents regressions, and enables confident deployments in modern web development.
              </p>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
              <h2>The Importance of Testing</h2>
              <p>
                Automated testing is essential for maintaining code quality and catching bugs before they reach production. It provides confidence in your codebase and enables rapid development without fear of breaking existing functionality.
              </p>

              <h2>Types of Automated Tests</h2>
              <img 
                src={unitImage} 
                alt="Unit testing code examples" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Different types of tests serve different purposes. Understanding when to use each type is crucial for an effective testing strategy.
              </p>
              <ul>
                <li>Unit tests verify individual functions and components</li>
                <li>Integration tests check how parts work together</li>
                <li>End-to-end tests simulate real user interactions</li>
                <li>Performance tests ensure acceptable speed</li>
              </ul>

              <h2>Test-Driven Development (TDD)</h2>
              <img 
                src={integrationImage} 
                alt="TDD and integration testing workflow" 
                className="w-full rounded-lg my-6"
              />
              <p>
                TDD is a development approach where you write tests before implementing features. This practice leads to better-designed, more maintainable code with high test coverage.
              </p>
              <ul>
                <li>Write failing tests first</li>
                <li>Implement minimal code to pass tests</li>
                <li>Refactor while keeping tests green</li>
                <li>Repeat the cycle for each feature</li>
              </ul>

              <h2>Testing Best Practices</h2>
              <p>
                Follow the testing pyramid: many unit tests, fewer integration tests, and even fewer end-to-end tests. Keep tests fast, isolated, and deterministic.
              </p>

              <h2>Continuous Integration</h2>
              <p>
                Integrate automated testing into your CI/CD pipeline. Run tests automatically on every commit and pull request to catch issues early and maintain code quality.
              </p>

              <h2>Testing Tools and Frameworks</h2>
              <p>
                Popular testing frameworks include Jest for JavaScript, Cypress for end-to-end testing, and Testing Library for component testing. Choose tools that fit your tech stack and team preferences.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li>✓ Automated testing prevents regressions</li>
                  <li>✓ Use different test types strategically</li>
                  <li>✓ Consider Test-Driven Development</li>
                  <li>✓ Integrate testing into CI/CD pipelines</li>
                  <li>✓ Maintain fast, reliable test suites</li>
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

export default AutomatedTesting;
