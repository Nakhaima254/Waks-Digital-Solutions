import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-xl text-primary-foreground/80 mt-4">
            How we collect, use, and protect your information
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Waks Digital Solutions, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out contact forms or request quotes</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Create an account for our services</li>
                <li>Communicate with us via email or phone</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze trends and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who assist in our operations</li>
                <li>Legal compliance when required by law</li>
                <li>Protection of our rights and property</li>
                <li>Business transfers (mergers, acquisitions)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p><strong>Email:</strong> privacy@waksdigital.co.ke</p>
              <p><strong>Phone:</strong> +254 700 123 456</p>
              <p><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;