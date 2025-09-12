import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-xl text-primary-foreground/80 mt-4">
            Terms and conditions for using our services
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Waks Digital Solutions services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Services Description</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Waks Digital Solutions provides digital services including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom web development and design</li>
                <li>WordPress website creation and maintenance</li>
                <li>E-commerce solutions</li>
                <li>SEO and digital marketing services</li>
                <li>Website hosting and maintenance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>Payment terms are specified in individual project contracts</li>
                <li>A 50% deposit is typically required before project commencement</li>
                <li>Final payment is due upon project completion and delivery</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are handled on a case-by-case basis as per our refund policy</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Project Timeline</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Project timelines are estimates and may vary based on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project complexity and scope</li>
                <li>Client response time for feedback and approvals</li>
                <li>Availability of required resources and content</li>
                <li>Third-party integrations and dependencies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Upon full payment, clients receive ownership of the custom work created specifically for their project. 
                However, Waks Digital Solutions retains the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use general techniques and know-how in future projects</li>
                <li>Display completed work in our portfolio</li>
                <li>Retain ownership of pre-existing tools and frameworks</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Waks Digital Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Either party may terminate services with written notice. Upon termination:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment for completed work is due immediately</li>
                <li>Client receives deliverables for work completed and paid for</li>
                <li>Ongoing service commitments will be fulfilled or refunded proportionally</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>Email:</strong> legal@waksdigital.co.ke</p>
              <p><strong>Phone:</strong> +254 700 123 456</p>
              <p><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;