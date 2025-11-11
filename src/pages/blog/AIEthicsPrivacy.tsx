import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import ethicsHero from "@/assets/blog-ai-ethics-privacy.jpg";

const AIEthicsPrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <header className="mb-8">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      March 26, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      18 min read
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Isaac N.
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    AI Ethics and Data Privacy: A Guide for Kenyan Businesses
                  </h1>

                  <img
                    src={ethicsHero}
                    alt="Scales representing AI ethics and privacy"
                    className="w-full h-[400px] object-cover rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground mb-6">
                    Navigate the complex landscape of AI ethics and data privacy. Learn how 
                    Kenyan businesses can implement AI responsibly while complying with 
                    regulations and building customer trust.
                  </p>

                  <h2>Why AI Ethics Matters</h2>
                  <p>
                    AI systems make decisions affecting people's lives: who gets hired, who 
                    receives credit, what content people see. Unethical AI can perpetuate 
                    discrimination, violate privacy, and erode trust. For Kenyan businesses, 
                    ethical AI isn't just right - it's good business.
                  </p>

                  <h2>Key Ethical Principles</h2>
                  
                  <h3>1. Fairness and Non-Discrimination</h3>
                  <p>
                    AI should not discriminate based on ethnicity, gender, age, religion, or 
                    other protected characteristics. This requires:
                  </p>
                  <ul>
                    <li>Diverse, representative training data</li>
                    <li>Regular bias testing across demographic groups</li>
                    <li>Mechanisms to detect and correct discriminatory outcomes</li>
                    <li>Documentation of potential biases and limitations</li>
                  </ul>

                  <h3>2. Transparency and Explainability</h3>
                  <p>
                    Stakeholders should understand how AI systems make decisions:
                  </p>
                  <ul>
                    <li>Inform people when they're interacting with AI</li>
                    <li>Explain how AI reaches its decisions (where possible)</li>
                    <li>Provide channels for questioning AI decisions</li>
                    <li>Document system capabilities and limitations</li>
                  </ul>

                  <h3>3. Privacy and Data Protection</h3>
                  <p>
                    Respect individual privacy and protect personal data:
                  </p>
                  <ul>
                    <li>Collect only necessary data</li>
                    <li>Secure data against unauthorized access</li>
                    <li>Allow individuals to access and delete their data</li>
                    <li>Be transparent about data use</li>
                  </ul>

                  <h3>4. Accountability</h3>
                  <p>
                    Clear responsibility for AI system outcomes:
                  </p>
                  <ul>
                    <li>Designate humans accountable for AI decisions</li>
                    <li>Establish processes for handling AI errors</li>
                    <li>Enable redress when AI causes harm</li>
                    <li>Maintain audit trails of AI decisions</li>
                  </ul>

                  <h3>5. Human Oversight and Control</h3>
                  <p>
                    Maintain meaningful human control over AI:
                  </p>
                  <ul>
                    <li>Human review of high-stakes decisions</li>
                    <li>Ability to override AI recommendations</li>
                    <li>Regular monitoring of AI performance</li>
                    <li>Clear escalation paths for problematic cases</li>
                  </ul>

                  <h2>Kenya's Data Protection Framework</h2>
                  
                  <h3>The Data Protection Act, 2019</h3>
                  <p>
                    Kenya's comprehensive data protection law requires businesses to:
                  </p>
                  <ul>
                    <li><strong>Lawful Basis:</strong> Have legal justification for processing data</li>
                    <li><strong>Consent:</strong> Obtain clear consent for data collection</li>
                    <li><strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                    <li><strong>Data Minimization:</strong> Collect only what's necessary</li>
                    <li><strong>Security:</strong> Implement appropriate security measures</li>
                    <li><strong>Accountability:</strong> Demonstrate compliance</li>
                  </ul>

                  <h3>Rights of Data Subjects</h3>
                  <p>
                    Kenyan law grants individuals rights to:
                  </p>
                  <ul>
                    <li>Access their personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete their data (right to erasure)</li>
                    <li>Object to certain data processing</li>
                    <li>Data portability</li>
                    <li>Not be subject to automated decision-making</li>
                  </ul>

                  <h3>Penalties for Non-Compliance</h3>
                  <p>
                    Violations can result in fines up to KSh 5 million or 1% of annual turnover. 
                    Beyond financial penalties, non-compliance damages reputation and customer 
                    trust.
                  </p>

                  <h2>Implementing Ethical AI</h2>
                  
                  <h3>Establish AI Ethics Governance</h3>
                  <p>
                    Create structures for ethical AI development:
                  </p>
                  <ol>
                    <li><strong>Ethics Committee:</strong> Cross-functional team reviewing AI projects</li>
                    <li><strong>Ethics Guidelines:</strong> Written principles guiding AI development</li>
                    <li><strong>Review Process:</strong> Mandatory ethics review for new AI systems</li>
                    <li><strong>Training:</strong> AI ethics education for all staff</li>
                  </ol>

                  <h3>Conduct Impact Assessments</h3>
                  <p>
                    Before deploying AI, assess:
                  </p>
                  <ul>
                    <li>Who will be affected?</li>
                    <li>What decisions will AI make?</li>
                    <li>What could go wrong?</li>
                    <li>How will you detect and address problems?</li>
                    <li>Is there adequate human oversight?</li>
                  </ul>

                  <h3>Test for Bias</h3>
                  <p>
                    Regularly evaluate AI performance across different groups:
                  </p>
                  <ul>
                    <li>Test with data from diverse demographic groups</li>
                    <li>Measure accuracy differences between groups</li>
                    <li>Investigate and address disparities</li>
                    <li>Document bias testing results</li>
                  </ul>

                  <h3>Implement Data Protection</h3>
                  <p>
                    Technical measures for data privacy:
                  </p>
                  <ul>
                    <li><strong>Encryption:</strong> Protect data at rest and in transit</li>
                    <li><strong>Access Controls:</strong> Limit who can access data</li>
                    <li><strong>Anonymization:</strong> Remove identifying information where possible</li>
                    <li><strong>Secure Development:</strong> Build security into AI systems</li>
                  </ul>

                  <h2>Common Ethical Pitfalls</h2>
                  
                  <h3>Training Data Bias</h3>
                  <p>
                    <strong>Problem:</strong> AI trained on biased data perpetuates discrimination.<br/>
                    <strong>Solution:</strong> Ensure training data represents all groups fairly. 
                    Test for bias. Use techniques like data augmentation to balance datasets.
                  </p>

                  <h3>Lack of Transparency</h3>
                  <p>
                    <strong>Problem:</strong> Users don't know they're interacting with AI or 
                    how decisions are made.<br/>
                    <strong>Solution:</strong> Clearly disclose AI use. Provide explanations for 
                    AI decisions, especially high-stakes ones.
                  </p>

                  <h3>Inadequate Human Oversight</h3>
                  <p>
                    <strong>Problem:</strong> AI makes important decisions without human review.<br/>
                    <strong>Solution:</strong> Require human approval for consequential decisions. 
                    Maintain ability to override AI.
                  </p>

                  <h3>Privacy Violations</h3>
                  <p>
                    <strong>Problem:</strong> Collecting unnecessary data or failing to secure it.<br/>
                    <strong>Solution:</strong> Implement privacy by design. Collect minimal data. 
                    Use strong security measures.
                  </p>

                  <h2>Building Customer Trust</h2>
                  
                  <h3>Be Transparent</h3>
                  <p>
                    Publish an AI transparency report explaining:
                  </p>
                  <ul>
                    <li>Where and how you use AI</li>
                    <li>What decisions AI helps make</li>
                    <li>How you ensure fairness and accuracy</li>
                    <li>How customers can give feedback or appeal decisions</li>
                  </ul>

                  <h3>Give Users Control</h3>
                  <p>
                    Allow customers to:
                  </p>
                  <ul>
                    <li>Opt out of AI-driven features</li>
                    <li>Request human review of AI decisions</li>
                    <li>Access and delete their data</li>
                    <li>Customize AI interactions</li>
                  </ul>

                  <h3>Demonstrate Responsibility</h3>
                  <p>
                    Show commitment through:
                  </p>
                  <ul>
                    <li>Third-party audits of AI systems</li>
                    <li>Certification to recognized standards</li>
                    <li>Clear remediation when AI causes harm</li>
                    <li>Ongoing monitoring and improvement</li>
                  </ul>

                  <h2>The Business Case for Ethical AI</h2>
                  <p>
                    Ethical AI isn't just about compliance:
                  </p>
                  <ul>
                    <li><strong>Trust:</strong> Customers prefer businesses they trust with their data</li>
                    <li><strong>Brand:</strong> Ethical AI enhances reputation</li>
                    <li><strong>Risk Mitigation:</strong> Avoid fines, lawsuits, and PR disasters</li>
                    <li><strong>Talent:</strong> Attract employees who want to work ethically</li>
                    <li><strong>Innovation:</strong> Ethical constraints drive creative solutions</li>
                  </ul>

                  <h2>Resources and Next Steps</h2>
                  
                  <h3>Regulatory Compliance</h3>
                  <p>
                    <strong>Office of the Data Protection Commissioner:</strong> Register as 
                    data controller, stay updated on guidance<br/>
                    <strong>Legal Counsel:</strong> Ensure contracts with AI vendors include 
                    data protection terms
                  </p>

                  <h3>Industry Standards</h3>
                  <p>
                    Consider adopting frameworks like:
                  </p>
                  <ul>
                    <li>ISO/IEC 42001 - AI Management Systems</li>
                    <li>IEEE Ethics in AI Standards</li>
                    <li>OECD AI Principles</li>
                  </ul>

                  <h2>Action Plan</h2>
                  <p>
                    Implement ethical AI in your organization:
                  </p>
                  <ol>
                    <li>Assess current AI systems for ethical and privacy risks</li>
                    <li>Establish AI ethics governance structure</li>
                    <li>Develop written AI ethics guidelines</li>
                    <li>Train staff on ethical AI and data protection</li>
                    <li>Implement technical controls for privacy and security</li>
                    <li>Test AI systems for bias and fairness</li>
                    <li>Create transparency reporting for stakeholders</li>
                    <li>Establish mechanisms for ongoing monitoring and improvement</li>
                  </ol>
                </div>
              </div>

              <BlogSidebar currentCategory="AI News" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AIEthicsPrivacy;
