import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import cybersecurityHero from "@/assets/blog-cybersecurity-trends-hero.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const CybersecurityTrends2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Waks Digital Team</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 8, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>13 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Cybersecurity Trends 2025: Protecting Your Digital Assets</h1>
            <p className="text-xl text-primary-foreground/80">Essential security practices and emerging threats every Kenyan business should know.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={cybersecurityHero} alt="Cybersecurity Trends 2025" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                As Kenya's digital economy expands, cybersecurity has become more critical than ever. Understanding the latest threats and protection strategies is essential for safeguarding your business and customer data in 2025.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The State of Cybersecurity in Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenya has experienced a significant increase in cyber attacks, with financial institutions, government agencies, and businesses facing sophisticated threats. The Communications Authority of Kenya reported a 300% increase in cyber incidents over the past two years.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Top Cybersecurity Threats in 2025</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. AI-Powered Attacks</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Cybercriminals are using artificial intelligence to create more convincing phishing emails, deepfake videos, and automated attack systems that adapt to security measures in real-time.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Ransomware Evolution</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Ransomware attacks have become more targeted and sophisticated, with criminals conducting extensive reconnaissance before strikes.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Mobile Banking Threats</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                With M-Pesa and mobile banking's popularity in Kenya, mobile-specific malware and SIM swap attacks are on the rise.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Supply Chain Attacks</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Attackers target vulnerabilities in third-party software and service providers to gain access to multiple organizations.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">5. IoT Vulnerabilities</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The proliferation of Internet of Things devices creates new entry points for cybercriminals.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Essential Security Measures</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Zero Trust Architecture:</strong> Never trust, always verify approach to network security</li>
                <li><strong>Multi-Factor Authentication:</strong> Add extra layers beyond passwords</li>
                <li><strong>Regular Security Audits:</strong> Identify and patch vulnerabilities proactively</li>
                <li><strong>Employee Training:</strong> Human error remains the weakest link</li>
                <li><strong>Data Encryption:</strong> Protect data at rest and in transit</li>
                <li><strong>Backup Strategy:</strong> Regular, tested backups are ransomware insurance</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Emerging Security Technologies</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>AI-Driven Threat Detection:</strong> Identify anomalies and threats in real-time</li>
                <li><strong>Blockchain for Security:</strong> Immutable audit trails and secure transactions</li>
                <li><strong>Quantum-Resistant Cryptography:</strong> Preparing for the quantum computing era</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Regulatory Compliance in Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The Data Protection Act, 2019 mandates specific security measures and data handling practices. Non-compliance can result in substantial fines and legal consequences.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Building a Security Culture</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Cybersecurity isn't just IT's responsibility—it requires organization-wide awareness and commitment. Regular training, clear policies, and leadership support are essential.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Need a Security Audit?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions offers comprehensive security assessments and implementation services.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Secure Your Business
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Industry News" />
        </div>
      </div>
    </div>
  );
};

export default CybersecurityTrends2025;