import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();

  const faqs = [
    {
      question: "What services does Waks Digital Solutions offer?",
      answer: "We offer a comprehensive range of digital services including web development, e-commerce solutions, SEO optimization, WordPress design, mobile app development, and digital marketing strategies tailored for Kenyan businesses."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline varies depending on the project's complexity. A basic website typically takes 2-4 weeks, while more complex e-commerce platforms or custom web applications may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer comprehensive maintenance packages that include regular updates, security monitoring, backup services, and technical support. Our team is available to ensure your website runs smoothly and stays up-to-date."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific requirements. We offer transparent pricing with no hidden fees. Visit our Pricing page or contact us for a detailed quote tailored to your needs."
    },
    {
      question: "Do you work with businesses outside Kenya?",
      answer: "While we specialize in serving Kenyan businesses and understand the local market dynamics, we also work with international clients. Our expertise in local SEO and payment integrations like M-Pesa makes us particularly valuable for businesses targeting the Kenyan market."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide comprehensive SEO services including keyword research, on-page optimization, technical SEO, local SEO, and content marketing strategies. We also offer digital marketing services including social media marketing and email campaigns."
    },
    {
      question: "What makes Waks Digital Solutions different?",
      answer: "We combine technical expertise with deep understanding of the Kenyan market. Our team stays current with the latest web technologies and digital marketing trends, while providing personalized service and competitive pricing. We're committed to helping local businesses succeed online."
    },
    {
      question: "Do you offer mobile app development?",
      answer: "Yes, we develop both native and progressive web apps (PWAs) for iOS and Android platforms. Our mobile solutions are designed to provide excellent user experiences while integrating seamlessly with your existing digital presence."
    },
    {
      question: "Can you integrate M-Pesa and other local payment gateways?",
      answer: "Yes, we have extensive experience integrating M-Pesa, Airtel Money, and other popular payment solutions in Kenya. We ensure secure, reliable payment processing that meets local regulations and customer expectations."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us through our Contact page, email us, or give us a call. We'll schedule a consultation to discuss your needs, provide recommendations, and create a customized proposal for your project."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div
            ref={heroRef}
            className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Find answers to common questions about our services, process, and how we can help your business succeed online.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 pb-24">
          <div
            ref={faqRef}
            className={`container mx-auto px-4 max-w-4xl transition-all duration-1000 delay-200 ${
              faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA Section */}
            <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team is here to help! Get in touch with us and we'll be happy to answer any questions you may have.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default FAQ;
