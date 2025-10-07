import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import paymentGatewaysImage from "@/assets/blog-payment-gateways.jpg";

const PaymentGatewaysKenya = () => {
  const relatedPosts = [
    { id: "ecommerce-success-kenya", title: "E-commerce Success Stories in Kenya" },
    { id: "ecommerce-security-trust", title: "Building Trust in E-commerce" },
    { id: "conversion-rate-optimization", title: "Conversion Rate Optimization Guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 12, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>9 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Complete Guide to Payment Gateways for Kenyan E-commerce</h1>
            <p className="text-xl text-primary-foreground/80">Choose the right payment solution for your online store with our comprehensive comparison of M-Pesa, card processors, and international gateways.</p>
          </div>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={paymentGatewaysImage} alt="Payment gateway options for Kenyan e-commerce" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">Payment processing is the backbone of e-commerce. In Kenya, businesses have multiple options including M-Pesa integration, Pesapal, Flutterwave, and international gateways like Stripe and PayPal.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">M-Pesa Integration: The Essential Payment Method</h2>
            <p className="text-muted-foreground leading-relaxed">With over 30 million active users in Kenya, M-Pesa integration is non-negotiable for e-commerce success. Options include direct Safaricom API integration or third-party aggregators like Pesapal and Flutterwave.</p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">M-Pesa Integration Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Direct Safaricom Integration:</strong> Best for high-volume businesses, requires technical expertise</li>
                <li><strong>Pesapal:</strong> Popular Kenyan aggregator with M-Pesa, cards, and bank payments</li>
                <li><strong>Flutterwave:</strong> Pan-African solution with competitive rates and easy integration</li>
                <li><strong>DPO PayGate:</strong> Established provider with multiple payment options</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Card Payment Processing</h2>
            <p className="text-muted-foreground leading-relaxed">While M-Pesa dominates, card payments are essential for international customers and higher-value transactions. Key considerations include 3D Secure compliance and PCI DSS certification.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Comparing Transaction Fees</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Provider</th>
                    <th className="border border-border p-3 text-left">M-Pesa Fee</th>
                    <th className="border border-border p-3 text-left">Card Fee</th>
                    <th className="border border-border p-3 text-left">Setup Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Pesapal</td>
                    <td className="border border-border p-3">1.5% + KES 10</td>
                    <td className="border border-border p-3">3.5% + KES 20</td>
                    <td className="border border-border p-3">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Flutterwave</td>
                    <td className="border border-border p-3">1.4%</td>
                    <td className="border border-border p-3">3.8%</td>
                    <td className="border border-border p-3">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">DPO PayGate</td>
                    <td className="border border-border p-3">Custom</td>
                    <td className="border border-border p-3">Custom</td>
                    <td className="border border-border p-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">International Payment Options</h2>
            <p className="text-muted-foreground leading-relaxed">For businesses targeting diaspora and international customers, Stripe and PayPal offer global payment processing with multi-currency support.</p>
            <div className="bg-accent/10 border-l-4 border-accent p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Pro Tip</h3>
              <p className="text-muted-foreground">Implement multiple payment options to maximize conversion rates. Studies show that offering 3+ payment methods can increase checkout completion by up to 30%.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Security and Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">Ensure your payment gateway meets PCI DSS standards, implements 3D Secure for card transactions, and provides fraud detection tools. Customer trust depends on secure payment processing.</p>
          </section>

          <section className="border-t pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Articles</h3>
            <div className="grid gap-4">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group">
                  <span className="text-foreground group-hover:text-primary transition-colors">{post.title}</span>
                  <ArrowLeft className="h-5 w-5 text-muted-foreground rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PaymentGatewaysKenya;