/**
 * WEBSITE KNOWLEDGE BASE
 * Comprehensive information about Waks Digital Solutions
 * Used to provide context to the chatbot AI
 */

const WEBSITE_KNOWLEDGE = {
  company: {
    name: 'Waks Digital Solutions',
    tagline: 'Your Digital Growth Partner',
    description: 'Professional web development and design services for SMEs in Nairobi, Kenya. We build websites that grow your business.',
    location: 'Nairobi, Kenya',
    founded: '2024',
    mission: 'We empower Kenyan SMEs with affordable, high-quality digital solutions that drive growth and success.',
    vision: 'To be the leading trusted digital partner for SMEs across Kenya and Africa.',
  },

  contact: {
    email: 'info@waksdigital.co.ke',
    whatsapp: '+254750509252',
    phone: '+254750509252',
    responseTime: '24 hours',
    supportChannels: ['Email', 'WhatsApp', 'Contact Form', 'Phone'],
  },

  services: [
    {
      id: 'custom-web-development',
      name: 'Custom Web Development',
      description: 'Tailored web applications built from scratch for your specific business needs.',
      features: [
        'Full-stack development',
        'Responsive design',
        'Performance optimized',
        'Scalable architecture',
        'Security-focused',
        'SEO ready',
      ],
      targetAudience: 'Startups, SMEs, Enterprises',
      turnaroundTime: '4-12 weeks depending on complexity',
    },
    {
      id: 'wordpress-design',
      name: 'WordPress Design & Development',
      description: 'Professional WordPress websites with custom themes and plugins.',
      features: [
        'Custom WordPress themes',
        'Plugin development',
        'Easy content management',
        'E-commerce ready',
        'SEO optimized',
        'Maintenance support',
      ],
      targetAudience: 'Small businesses, Bloggers, Content creators',
      turnaroundTime: '2-6 weeks',
    },
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms including shopping carts, payment integration, and inventory management.',
      features: [
        'Product catalog management',
        'Secure checkout',
        'Multiple payment gateways (M-Pesa, Card, PayPal)',
        'Inventory tracking',
        'Order management system',
        'Analytics dashboard',
        'Multi-currency support',
      ],
      targetAudience: 'Online retailers, Product sellers',
      turnaroundTime: '6-12 weeks',
      platforms: ['Shopify', 'WooCommerce', 'Custom solutions'],
    },
    {
      id: 'custom-system-design',
      name: 'Custom System Design',
      description: 'Enterprise-level custom systems including CRM, HR systems, inventory management, and more.',
      features: [
        'Requirements analysis',
        'System architecture',
        'Database design',
        'API development',
        'User authentication',
        'Reporting & analytics',
        'Scalability planning',
      ],
      targetAudience: 'Large enterprises, Corporates',
      turnaroundTime: '8-16 weeks+',
      examples: ['CRM Systems', 'HR Management Systems', 'Inventory Systems', 'Financial Management Systems'],
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      description: 'User-centered design approach ensuring beautiful, intuitive interfaces.',
      features: [
        'User research',
        'Wireframing',
        'Prototyping',
        'Usability testing',
        'Design systems',
        'Accessibility focus',
      ],
      targetAudience: 'All types of digital projects',
    },
    {
      id: 'website-maintenance',
      name: 'Website Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance to keep your website running smoothly.',
      features: [
        'Regular backups',
        'Security updates',
        'Performance monitoring',
        'Bug fixes',
        '24/7 support available',
        'Content updates',
      ],
      pricing: 'Starting from KES 3,000/month',
    },
  ],

  pricing: {
    structure: 'Custom quotes based on project requirements',
    introduction: 'We believe in transparent, flexible pricing. Every project is unique, so we provide custom quotes.',
    packages: [
      {
        name: 'Starter Website',
        price: 'KES 25,000 - 50,000',
        description: '5-8 page informational website',
        includes: [
          'Modern responsive design',
          'Contact form',
          'Basic SEO optimization',
          '1 month free support',
          'SSL certificate',
        ],
        ideal: 'New businesses, portfolios',
      },
      {
        name: 'Professional Website',
        price: 'KES 50,000 - 150,000',
        description: 'Advanced website with custom features',
        includes: [
          'Custom web development',
          'Advanced SEO',
          'Blog/News section',
          'User authentication',
          '3 months free support',
          'Performance optimization',
        ],
        ideal: 'Growing businesses, content sites',
      },
      {
        name: 'E-commerce Store',
        price: 'KES 80,000 - 250,000',
        description: 'Full e-commerce platform with payment integration',
        includes: [
          'Product management',
          'Payment gateway integration',
          'Inventory system',
          'Order management',
          '6 months free support',
          'Mobile app ready',
        ],
        ideal: 'Online retailers, product sellers',
      },
      {
        name: 'Enterprise Solution',
        price: 'Custom - Contact us',
        description: 'Bespoke system for complex business needs',
        includes: [
          'Custom architecture',
          'Complex integrations',
          'Advanced analytics',
          'Dedicated support team',
          'Ongoing maintenance',
          'Scalability planning',
        ],
        ideal: 'Large enterprises, complex requirements',
      },
    ],
    factors: 'Pricing depends on: complexity, pages, features, integrations, timeline, hosting & domain costs',
    paymentTerms: '50% upfront, 50% on delivery (negotiable for larger projects)',
  },

  portfolio: {
    description: 'Our portfolio includes successful projects for various Kenyan businesses',
    projectCount: '30+',
    clientSatisfaction: '98%',
    industries: ['E-commerce', 'Tech startups', 'Healthcare', 'Real estate', 'Education', 'Hospitality', 'Finance'],
    caseStudies: [
      {
        name: 'E-commerce Platform for Local Retailer',
        description: 'Fully functional online store with M-Pesa integration',
        result: 'Increased online sales by 300%',
      },
      {
        name: 'HR Management System',
        description: 'Custom system for employee management',
        result: 'Reduced HR workload by 60%',
      },
      {
        name: 'Tourism Website',
        description: 'Responsive website with booking system',
        result: 'Attracted 50,000+ monthly visitors',
      },
    ],
  },

  technology: {
    frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB', 'Express.js', 'Django'],
    ecommerce: ['Shopify', 'WooCommerce', 'Custom solutions'],
    cms: ['WordPress', 'Custom CMS'],
    hosting: ['AWS', 'Vercel', 'cPanel', 'Digital Ocean'],
    tools: ['GitHub', 'Docker', 'CI/CD', 'Firebase', 'Stripe', 'M-Pesa API'],
  },

  faq: [
    {
      question: 'How long does a website take to build?',
      answer: 'It depends on complexity. A simple 5-page website takes 2-4 weeks, while complex projects can take 8-16 weeks or more. We provide timeline estimates during the planning phase.',
    },
    {
      question: 'Do you provide hosting?',
      answer: 'We can help you set up hosting on platforms like cPanel, AWS, or Vercel. We can also manage hosting for you if needed.',
    },
    {
      question: 'What about after the website is launched?',
      answer: 'We provide maintenance packages starting from KES 3,000/month including backups, security updates, and support.',
    },
    {
      question: 'Can you integrate M-Pesa?',
      answer: 'Yes! We have extensive experience integrating M-Pesa and other payment gateways for e-commerce sites.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we offer flexible support packages ranging from hourly consulting to dedicated monthly maintenance.',
    },
    {
      question: 'What is your process?',
      answer: 'Our process: 1) Discovery & Planning, 2) Design & Approval, 3) Development, 4) Testing, 5) Deployment, 6) Support.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We can redesign and upgrade your existing website to improve performance and user experience.',
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes, we implement SEO best practices during development and can provide ongoing SEO optimization services.',
    },
  ],

  process: {
    title: 'Our Development Process',
    steps: [
      {
        step: 1,
        name: 'Discovery & Planning',
        description: 'We understand your goals, audience, and requirements',
        duration: '1 week',
      },
      {
        step: 2,
        name: 'Design & Approval',
        description: 'Create wireframes and designs for your review and approval',
        duration: '2-3 weeks',
      },
      {
        step: 3,
        name: 'Development',
        description: 'Build the website/application with best practices and clean code',
        duration: '4-12 weeks',
      },
      {
        step: 4,
        name: 'Testing & QA',
        description: 'Comprehensive testing on all devices and browsers',
        duration: '1-2 weeks',
      },
      {
        step: 5,
        name: 'Deployment',
        description: 'Launch your website to production',
        duration: '1 day',
      },
      {
        step: 6,
        name: 'Ongoing Support',
        description: 'Maintenance, monitoring, and support after launch',
        duration: 'Ongoing',
      },
    ],
  },

  whyChooseUs: [
    'Local expertise - We understand the Kenyan market',
    'Affordable pricing - No compromise on quality',
    '30+ successful projects',
    'Responsive team - Fast communication and support',
    'Modern technology - Latest tools and frameworks',
    'Custom solutions - Not template-based',
    'SEO optimized - Better visibility on Google',
    'Mobile first approach - Works perfectly on all devices',
    'Secure coding practices',
    'Transparent process - You\'ll be updated every step',
    'Post-launch support included',
    'Training provided for content management',
  ],

  pages: {
    '/': 'Home page with company overview and featured services',
    '/about': 'Company mission, vision, team, and values',
    '/services': 'Detailed information about all services offered',
    '/pricing': 'Pricing information and packages',
    '/portfolio': 'Showcase of completed projects and case studies',
    '/contact': 'Contact form, phone, email, and physical location',
    '/blog': 'Blog posts about web development, digital marketing, and technology',
  },

  businessHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 3:00 PM',
    sunday: 'Closed',
    timezone: 'EAT (East Africa Time)',
  },

  callToAction: {
    primary: 'Get a free consultation and custom quote',
    secondary: 'Schedule a call with our team',
    contacts: 'WhatsApp +254750509252 or email info@waksdigital.co.ke',
  },
};

module.exports = WEBSITE_KNOWLEDGE;
