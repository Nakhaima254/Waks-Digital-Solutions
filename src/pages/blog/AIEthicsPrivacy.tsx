import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import ethicsHero from "@/assets/blog-ai-ethics-privacy.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const AIEthicsPrivacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 26, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>18 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI Ethics and Data Privacy: A Guide for Kenyan Businesses</h1>
            <p className="text-xl text-primary-foreground/80">Navigate the complex landscape of AI ethics and data privacy. Learn how Kenyan businesses can implement AI responsibly while complying with regulations and building customer trust.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={ethicsHero} alt="Scales representing AI ethics and privacy" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Why AI Ethics Matters</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI systems make decisions affecting people's lives: who gets hired, who receives credit, what content people see. Unethical AI can perpetuate discrimination, violate privacy, and erode trust. For Kenyan businesses, ethical AI isn't just right - it's good business.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Key Ethical Principles</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Fairness and Non-Discrimination</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI should not discriminate based on ethnicity, gender, age, religion, or other protected characteristics. This requires:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Diverse, representative training data</li>
                <li>Regular bias testing across demographic groups</li>
                <li>Mechanisms to detect and correct discriminatory outcomes</li>
                <li>Documentation of potential biases and limitations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Transparency and Explainability</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Stakeholders should understand how AI systems make decisions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Inform people when they're interacting with AI</li>
                <li>Explain how AI reaches its decisions (where possible)</li>
                <li>Provide channels for questioning AI decisions</li>
                <li>Document system capabilities and limitations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Privacy and Data Protection</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Respect individual privacy and protect personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Collect only necessary data</li>
                <li>Secure data against unauthorized access</li>
                <li>Allow individuals to access and delete their data</li>
                <li>Be transparent about data use</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Accountability</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Clear responsibility for AI system outcomes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Designate humans accountable for AI decisions</li>
                <li>Establish processes for handling AI errors</li>
                <li>Enable redress when AI causes harm</li>
                <li>Maintain audit trails of AI decisions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Human Oversight and Control</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Maintain meaningful human control over AI:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Human review of high-stakes decisions</li>
                <li>Ability to override AI recommendations</li>
                <li>Regular monitoring of AI performance</li>
                <li>Clear escalation paths for problematic cases</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Kenya's Data Protection Framework</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Data Protection Act, 2019</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenya's comprehensive data protection law requires businesses to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Lawful Basis:</strong> Have legal justification for processing data</li>
                <li><strong>Consent:</strong> Obtain clear consent for data collection</li>
                <li><strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                <li><strong>Data Minimization:</strong> Collect only what's necessary</li>
                <li><strong>Security:</strong> Implement appropriate security measures</li>
                <li><strong>Accountability:</strong> Demonstrate compliance</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Rights of Data Subjects</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenyan law grants individuals rights to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Access their personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete their data (right to erasure)</li>
                <li>Object to certain data processing</li>
                <li>Data portability</li>
                <li>Not be subject to automated decision-making</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Penalties for Non-Compliance</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Violations can result in fines up to KSh 5 million or 1% of annual turnover. Beyond financial penalties, non-compliance damages reputation and customer trust.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Implementing Ethical AI</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Establish AI Ethics Governance</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Create structures for ethical AI development:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Ethics Committee:</strong> Cross-functional team reviewing AI projects</li>
                <li><strong>Ethics Guidelines:</strong> Written principles guiding AI development</li>
                <li><strong>Review Process:</strong> Mandatory ethics review for new AI systems</li>
                <li><strong>Training:</strong> AI ethics education for all staff</li>
              </ol>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Conduct Impact Assessments</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Before deploying AI, assess:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Who will be affected?</li>
                <li>What decisions will AI make?</li>
                <li>What could go wrong?</li>
                <li>How will you detect and address problems?</li>
                <li>Is there adequate human oversight?</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Test for Bias</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Regularly evaluate AI performance across different groups:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Test with data from diverse demographic groups</li>
                <li>Measure accuracy differences between groups</li>
                <li>Investigate and address disparities</li>
                <li>Document bias testing results</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Implement Data Protection</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Technical measures for data privacy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Encryption:</strong> Protect data at rest and in transit</li>
                <li><strong>Access Controls:</strong> Limit who can access data</li>
                <li><strong>Anonymization:</strong> Remove identifying information where possible</li>
                <li><strong>Secure Development:</strong> Build security into AI systems</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Common Ethical Pitfalls</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Training Data Bias</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                <strong>Problem:</strong> AI trained on biased data perpetuates discrimination.<br/>
                <strong>Solution:</strong> Ensure training data represents all groups fairly. Test for bias. Use techniques like data augmentation to balance datasets.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Lack of Transparency</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                <strong>Problem:</strong> Users don't know they're interacting with AI or how decisions are made.<br/>
                <strong>Solution:</strong> Clearly disclose AI use. Provide explanations for AI decisions, especially high-stakes ones.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Inadequate Human Oversight</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                <strong>Problem:</strong> AI makes important decisions without human review.<br/>
                <strong>Solution:</strong> Require human approval for consequential decisions. Maintain ability to override AI.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Privacy Violations</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                <strong>Problem:</strong> Collecting unnecessary data or failing to secure it.<br/>
                <strong>Solution:</strong> Implement privacy by design. Collect minimal data. Use strong security measures.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Building Customer Trust</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Be Transparent</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Publish an AI transparency report explaining:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Where and how you use AI</li>
                <li>What decisions AI helps make</li>
                <li>How you ensure fairness and accuracy</li>
                <li>How customers can give feedback or appeal decisions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Give Users Control</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Allow customers to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Opt out of AI-driven features</li>
                <li>Request human review of AI decisions</li>
                <li>Access and delete their data</li>
                <li>Customize AI interactions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Demonstrate Responsibility</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Show commitment through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Third-party audits of AI systems</li>
                <li>Certification to recognized standards</li>
                <li>Clear remediation when AI causes harm</li>
                <li>Ongoing monitoring and improvement</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The Business Case for Ethical AI</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Ethical AI isn't just about compliance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Trust:</strong> Customers prefer businesses they trust with their data</li>
                <li><strong>Brand:</strong> Ethical AI enhances reputation</li>
                <li><strong>Risk Mitigation:</strong> Avoid fines, lawsuits, and PR disasters</li>
                <li><strong>Talent:</strong> Attract employees who want to work ethically</li>
                <li><strong>Innovation:</strong> Ethical constraints drive creative solutions</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Resources and Next Steps</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Regulatory Compliance</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                <strong>Office of the Data Protection Commissioner:</strong> Register as data controller, stay updated on guidance<br/>
                <strong>Legal Counsel:</strong> Ensure contracts with AI vendors include data protection terms
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Industry Standards</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Consider adopting frameworks like:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>ISO/IEC 42001 - AI Management Systems</li>
                <li>IEEE Ethics in AI Standards</li>
                <li>OECD AI Principles</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Action Plan</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Implement ethical AI in your organization:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Assess current AI systems for ethical and privacy risks</li>
                <li>Establish AI ethics governance structure</li>
                <li>Develop written AI ethics guidelines</li>
                <li>Train staff on ethical AI and data protection</li>
                <li>Implement technical controls for privacy and security</li>
                <li>Test AI systems for bias and fairness</li>
                <li>Create transparency reporting for stakeholders</li>
                <li>Establish mechanisms for ongoing monitoring and improvement</li>
              </ol>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Need Help with AI Ethics Implementation?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can guide you through ethical AI implementation and data protection compliance.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Get Started Today
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="AI News" />
        </div>
      </div>
    </div>
  );
};

export default AIEthicsPrivacy;
