import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mobilePaymentHero from "@/assets/blog-mobile-payment-hero.jpg";
import mobilePaymentGateway from "@/assets/blog-mobile-payment-gateway.jpg";
import mobilePaymentSecurity from "@/assets/blog-mobile-payment-security.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const MobilePaymentIntegration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Isaac N.</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>February 20, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Mobile Payment Integration Guide for Kenyan Businesses
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Complete guide to integrating M-Pesa, credit cards, and digital wallets into your mobile website for seamless customer transactions.
            </p>
            
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img 
          src={mobilePaymentHero} 
          alt="Mobile payment interface showing M-Pesa and digital wallet options" 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Mobile payment integration is crucial for success in Kenya's digital economy. With M-Pesa processing over 50 million transactions daily, your mobile website must offer seamless, secure payment experiences to convert visitors into customers.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Understanding Kenya's Mobile Payment Landscape
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Kenya leads Africa in mobile money adoption, with multiple payment options available to consumers. Your mobile payment strategy should accommodate diverse customer preferences while maintaining security and ease of use.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The primary payment methods include M-Pesa (dominant player), Airtel Money, bank cards, and emerging digital wallets. A comprehensive approach requires supporting multiple options while optimizing the checkout experience.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            M-Pesa Integration Essentials
          </h2>
          
          <img 
            src={mobilePaymentGateway} 
            alt="Payment gateway integration dashboard with M-Pesa API" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Daraja API Implementation
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Safaricom's Daraja API powers M-Pesa integrations. Key implementation steps:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Register for Daraja API credentials on the Safaricom Developer Portal</li>
            <li>Choose between STK Push (customer-initiated) or C2B (business-initiated)</li>
            <li>Implement callback URLs for transaction confirmations</li>
            <li>Handle transaction timeouts and failures gracefully</li>
            <li>Test thoroughly in sandbox environment before going live</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Optimizing M-Pesa Checkout Flow
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Create frictionless M-Pesa payments:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Auto-detect and pre-fill M-Pesa number from session data</li>
            <li>Display clear instructions for STK push acceptance</li>
            <li>Show real-time payment status updates</li>
            <li>Provide instant confirmation messages</li>
            <li>Enable automatic retry for failed transactions</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Card Payment Integration
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Despite M-Pesa's dominance, card payments remain important for certain customer segments:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Partner with PCI-compliant payment processors</li>
            <li>Implement 3D Secure for fraud protection</li>
            <li>Support local and international cards</li>
            <li>Offer card tokenization for repeat purchases</li>
            <li>Provide clear security badges and trust signals</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Payment Gateway Selection
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Popular payment gateway options in Kenya:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li><strong>iPay:</strong> Comprehensive solution with M-Pesa, cards, and Airtel Money</li>
            <li><strong>Pesapal:</strong> Easy integration with multiple payment options</li>
            <li><strong>DPO PayGate:</strong> Pan-African reach and strong fraud protection</li>
            <li><strong>Flutterwave:</strong> Modern API with excellent documentation</li>
            <li><strong>Jenga API:</strong> Direct bank integration from Equity Bank</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Security Best Practices
          </h2>
          
          <img 
            src={mobilePaymentSecurity} 
            alt="Secure mobile checkout with encryption and trust badges" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Transaction Security
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Protect customer payment data with robust security measures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Use HTTPS for all payment pages</li>
            <li>Never store card details on your servers</li>
            <li>Implement rate limiting to prevent fraud attempts</li>
            <li>Use strong encryption for sensitive data transmission</li>
            <li>Maintain PCI DSS compliance for card processing</li>
            <li>Monitor transactions for suspicious patterns</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Building Customer Trust
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Display trust signals throughout the checkout process:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Show security badges (SSL, PCI compliance)</li>
            <li>Display accepted payment methods prominently</li>
            <li>Provide clear refund and privacy policies</li>
            <li>Include customer support contact information</li>
            <li>Show customer reviews and testimonials</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Mobile UX for Payments
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Optimize the mobile payment experience:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Minimize form fields (ask only essential information)</li>
            <li>Enable auto-fill and saved payment methods</li>
            <li>Provide real-time validation and error messages</li>
            <li>Show progress indicators for multi-step checkouts</li>
            <li>Allow guest checkout without account creation</li>
            <li>Display total cost clearly before payment confirmation</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Testing and Monitoring
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Ensure payment reliability through comprehensive testing:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Test all payment methods in sandbox environments</li>
            <li>Verify transaction confirmation flows</li>
            <li>Test timeout and failure scenarios</li>
            <li>Monitor transaction success rates</li>
            <li>Track payment abandonment points</li>
            <li>Set up alerts for payment system failures</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Conclusion
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Successful mobile payment integration requires balancing multiple payment options with seamless user experience and robust security. By implementing M-Pesa, cards, and other popular methods while maintaining PCI compliance and optimizing checkout flows, you'll maximize conversions and build customer trust.
          </p>

          <div className="mt-12 p-8 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Integrate Mobile Payments?</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our team has extensive experience integrating M-Pesa, card payments, and payment gateways. Let's discuss your mobile payment needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Contact Us Today
            </Link>
          </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Mobile" />
        </div>
      </div>
    </div>
  );
};

export default MobilePaymentIntegration;
