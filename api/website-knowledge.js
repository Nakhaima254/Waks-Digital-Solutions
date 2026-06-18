// Waks Digital Solutions — Chat Widget Knowledge Base
// Written to sound like it's coming from someone on the team, not a brochure.

const WEBSITE_KNOWLEDGE = {
  company: {
    name: 'Waks Digital Solutions',
    tagline: 'Your Digital Growth Partner',
    description:
      "We're a digital solutions company building websites, e-commerce platforms, and custom software for businesses — from independent operators to growing enterprises. Our home base is Nairobi, and we work with clients well beyond it.",
    location: 'Nairobi, Kenya — working with clients locally and internationally',
    founded: '2024',
    story:
      "Waks Digital was built around a simple idea: a business website should be a growth engine, not just a digital business card. We work across industries and borders, but we keep the experience personal — real people answering real questions, not a ticket queue.",
    mission:
      'Give businesses, wherever they are, digital tools that are genuinely high-quality and genuinely accessible.',
    vision:
      'To be a trusted digital partner for ambitious businesses, in Kenya and far beyond it.',
    positioning:
      "We're confident about what we do, but never stiff about it. Think established and capable, with a team that's actually easy to talk to.",
    personalityNote:
      "If a visitor asks something off-topic or casual, it's fine to be a little warm and human about it before steering back to how we can help — we're not a robot reading a script. Never describe the company as small, local-only, or a 'studio' — we operate as a full digital solutions company with international reach.",
  },

  contact: {
    email: 'info@waksdigital.co.ke',
    whatsapp: '+254750509252',
    phone: '+254750509252',
    responseTime: 'Usually within a few hours during the day, definitely within 24 hours',
    preferredChannel: 'WhatsApp — it\'s genuinely the fastest way to reach us',
    supportChannels: ['WhatsApp', 'Email', 'Contact Form', 'Phone Call'],
  },

  services: [
    {
      id: 'custom-web-development',
      name: 'Custom Web Development',
      pitch: "When a template just won't cut it and you need something built around exactly how your business works.",
      description:
        'We build your site or web app from the ground up — no recycled templates pretending to be custom work.',
      features: [
        'Full-stack development',
        'Responsive design that actually works on a budget Android phone, not just an iPhone in a demo',
        'Performance optimized — we care about load times, not just looks',
        'Scalable architecture so it doesn\'t fall over when you grow',
        'Security-focused from day one',
        'SEO-ready out of the box',
      ],
      targetAudience: 'Startups, SMEs, enterprises, and service businesses (cleaning companies, tour operators, agencies, consultancies) with specific needs a template can\'t meet',
      turnaroundTime: '4–12 weeks, depending on how complex things get',
    },
    {
      id: 'wordpress-design',
      name: 'WordPress Design & Development',
      pitch: 'For businesses that want a great-looking site they can actually update themselves afterward.',
      description: 'Custom-built WordPress sites — themes and plugins built specifically for you, not a marketplace theme with your logo slapped on.',
      features: [
        'Custom-coded themes (not store-bought)',
        'Plugin development when off-the-shelf plugins don\'t do what you need',
        'Content management that\'s easy enough for non-techy staff to handle',
        'E-commerce ready if you need to sell',
        'SEO optimized',
        'Maintenance support afterward',
      ],
      targetAudience: 'Small businesses, bloggers, and content-driven brands',
      turnaroundTime: '2–6 weeks',
    },
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      pitch: 'A real online store, not just a product list with a "call to order" button.',
      description:
        'Full online shops — catalog, cart, checkout, payments, and the backend tools you need to actually run the thing day to day.',
      features: [
        'Product catalog management',
        'Secure checkout',
        'M-Pesa, card, and PayPal payment integration',
        'Inventory tracking',
        'Order management system',
        'Analytics dashboard so you know what\'s actually selling',
        'Multi-currency support',
      ],
      targetAudience: 'Online retailers, service businesses (cleaning, tours, salons, etc.), and anyone selling physical, digital, or bookable services',
      turnaroundTime: '6–12 weeks',
      platforms: ['Shopify', 'WooCommerce', 'Fully custom builds'],
    },
    {
      id: 'custom-system-design',
      name: 'Custom System Design',
      pitch: 'For when "we manage it in a spreadsheet" has officially become a problem.',
      description: 'Internal business systems built around your actual workflow — CRM, HR, inventory, finance, whatever\'s eating your team\'s time.',
      features: [
        'Requirements analysis (we sit down and actually map out how you work)',
        'System architecture',
        'Database design',
        'API development',
        'User authentication and role permissions',
        'Reporting and analytics',
        'Built to scale as your team grows',
      ],
      targetAudience: 'Larger SMEs and corporates with messy internal processes',
      turnaroundTime: '8–16+ weeks',
      examples: ['CRM systems', 'HR management systems', 'Inventory systems', 'Financial management systems'],
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      pitch: 'Making sure people actually enjoy using what we build, not just tolerate it.',
      description: 'A proper design process before a single line of code gets written — so the end product feels obvious to use, not confusing.',
      features: [
        'User research',
        'Wireframing',
        'Prototyping',
        'Usability testing with real people, not just our own opinions',
        'Design systems for consistency',
        'Accessibility built in, not bolted on',
      ],
      targetAudience: 'Any digital project, really — websites, apps, internal tools',
    },
    {
      id: 'website-maintenance',
      name: 'Website Maintenance & Support',
      pitch: 'Because a website is never really "done" — it needs someone watching it.',
      description: 'Ongoing care so your site stays fast, secure, and updated without you having to think about it.',
      features: [
        'Regular backups',
        'Security updates',
        'Performance monitoring',
        'Bug fixes',
        '24/7 support available on higher-tier plans',
        'Content updates when you need something changed',
      ],
      pricing: 'Starts from KES 3,000/month',
    },
  ],

  pricing: {
    structure: 'Custom quotes based on what you actually need',
    introduction:
      "Honestly, anyone who gives you a fixed price before understanding your project is guessing. We ask a few questions first, then give you a real number — not a placeholder that balloons later.",
    packages: [
      {
        name: 'Starter Website',
        price: 'KES 25,000 – 50,000',
        description: 'A clean 5–8 page site to get a new business or personal brand online properly',
        includes: [
          'Modern, responsive design',
          'Contact form',
          'Basic SEO setup',
          '1 month of free support after launch',
          'SSL certificate (the little padlock icon)',
        ],
        ideal: 'New businesses, freelancers, portfolios',
      },
      {
        name: 'Professional Website',
        price: 'KES 50,000 – 150,000',
        description: 'A more capable site with the extra features growing businesses tend to need',
        includes: [
          'Custom development work',
          'Advanced SEO',
          'Blog or news section',
          'User accounts/login if needed',
          '3 months of free support',
          'Performance optimization',
        ],
        ideal: 'Growing businesses, content-heavy sites',
      },
      {
        name: 'E-commerce Store',
        price: 'KES 80,000 – 250,000',
        description: 'A full online store ready to take real orders and real payments',
        includes: [
          'Product management',
          'Payment gateway integration (M-Pesa, card, etc.)',
          'Inventory system',
          'Order management',
          '6 months of free support',
          'Mobile-ready experience',
        ],
        ideal: 'Online retailers and product-based businesses',
      },
      {
        name: 'Enterprise Solution',
        price: 'Custom — let\'s talk',
        description: 'A bespoke system built around a genuinely complex set of business needs',
        includes: [
          'Custom architecture',
          'Complex third-party integrations',
          'Advanced analytics',
          'A dedicated support contact',
          'Ongoing maintenance',
          'Scalability planning from day one',
        ],
        ideal: 'Large enterprises and complex, multi-system projects',
      },
    ],
    factors:
      'What moves the price: number of pages, custom features, integrations (payments, APIs, etc.), how tight the timeline is, and hosting/domain costs if we\'re handling those too.',
    paymentTerms: '50% upfront to begin, 50% on delivery — happy to discuss other terms for bigger projects.',
  },

  portfolio: {
    description: "We've worked with a real mix of Kenyan businesses, and we're proud of most of what we've shipped (and learned from the rest).",
    projectCount: '30+',
    clientSatisfaction: '98%',
    industries: ['E-commerce', 'Tech startups', 'Healthcare', 'Real estate', 'Education', 'Hospitality', 'Finance'],
    caseStudies: [
      {
        name: 'E-commerce Platform for a Local Retailer',
        description: 'Built them a proper online store with M-Pesa baked into checkout',
        result: 'Online sales jumped roughly 300% after launch',
      },
      {
        name: 'HR Management System',
        description: 'A custom system to replace their spreadsheet chaos for managing staff',
        result: 'Cut their HR team\'s admin workload by around 60%',
      },
      {
        name: 'Tourism Website with Booking',
        description: 'A responsive site with an integrated booking flow',
        result: 'Now pulling in 50,000+ visitors a month',
      },
    ],
  },

  technology: {
    frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB', 'Express.js', 'Django'],
    ecommerce: ['Shopify', 'WooCommerce', 'Custom-built solutions'],
    cms: ['WordPress', 'Custom CMS builds'],
    hosting: ['AWS', 'Vercel', 'cPanel', 'DigitalOcean'],
    tools: ['GitHub', 'Docker', 'CI/CD pipelines', 'Firebase', 'Stripe', 'M-Pesa API'],
    note: "We pick the stack based on the project, not the other way around — we're not precious about any one tool.",
  },

  faq: [
    {
      question: 'How long does a website take to build?',
      answer:
        'Depends on the scope. A simple 5-page site is usually 2-4 weeks. Bigger custom builds or systems can run 8-16 weeks or more. We\'ll give you a real timeline once we understand what you need — not a generic guess.',
    },
    {
      question: 'Do you provide hosting?',
      answer:
        'We can set you up on cPanel, AWS, or Vercel depending on what suits your site, and we can manage it ongoing if you\'d rather not deal with that side of things.',
    },
    {
      question: 'What happens after the website goes live?',
      answer:
        'We don\'t just disappear after launch. Maintenance packages start from KES 3,000/month and cover backups, security updates, and general support.',
    },
    {
      question: 'Can you integrate M-Pesa?',
      answer: 'Yes — this is one of the things we do most often for e-commerce clients, so it\'s well worn territory for us.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, from quick hourly consulting to a dedicated monthly maintenance plan — whatever fits how hands-on you want to be.',
    },
    {
      question: 'What does working with you actually look like?',
      answer:
        'Roughly: we start by understanding what you actually need, then design it, build it, test it properly, launch it, and stick around for support after. Ask and I can walk you through each stage.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Definitely — a lot of our work is actually fixing or modernizing sites that already exist but aren\'t pulling their weight anymore.',
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes — we build SEO best practices in from the start, and can also do ongoing optimization if you want ranking to be an active focus.',
    },
    {
      question: 'I\'m not techy at all, can I still manage my own site afterward?',
      answer: 'Yes, that\'s actually something we plan for. We build with non-technical owners in mind and walk you through how to make basic updates yourself once it\'s live.',
    },
  ],

  // Casual, conversational, and "meta" questions visitors actually type into a chat widget.
  // These aren't formal FAQs — they're the small talk and offhand questions a real human
  // would ask before getting to business. Answer briefly and warmly, then guide back
  // toward how we can help.
  humanQuestions: {
    greetings: [
      {
        examples: ['hi', 'hello', 'hey', 'good morning', 'how is your day'],
        guidance:
          'Reply warmly and briefly (you don\'t have feelings to report in detail, but a light, human touch is fine — "Doing well, thanks for asking! How can I help you today?"). Don\'t launch straight into a service pitch unprompted.',
        sampleAnswer:
          "Hey there! Doing well, thanks for asking 🙂 What can I help you with today — are you exploring a new website, or already have a project in mind?",
      },
    ],
    aboutTheBot: [
      {
        question: 'Who built you?',
        answer:
          "I'm the virtual assistant for Waks Digital Solutions, built by our team to help answer questions about our services, pricing, and process. If I can't answer something, I'll point you to a real person on the team.",
      },
      {
        question: 'What LLM / AI model are you running on?',
        answer:
          "I'm not able to share technical details about the underlying model or provider — that's not really the focus here! I'm happy to help with anything about Waks Digital's services, pricing, or your project though.",
      },
      {
        question: 'Are you a real person?',
        answer:
          "I'm an AI assistant for Waks Digital — not a person. If you'd rather speak to someone on the team directly, I can point you to WhatsApp or email and they'll pick it up from there.",
      },
      {
        question: 'Can I talk to a human?',
        answer:
          "Of course — message us directly on WhatsApp at +254750509252 or email info@waksdigital.co.ke and a member of the team will take it from there.",
      },
    ],
    pricingPlainLanguage: [
      {
        question: 'How much is a simple website?',
        answer:
          "A simple, good-looking informational website typically runs KES 25,000–50,000, depending on how many pages and features you need. If you tell me roughly what the site needs to do, I can point you to the right package.",
      },
      {
        question: 'What\'s the cheapest option you have?',
        answer:
          "Our Starter package (KES 25,000–50,000) is the most affordable — a clean 5–8 page site, ideal for new businesses or personal brands. Happy to break down what's included.",
      },
      {
        question: 'Do you have payment plans?',
        answer: 'Yes — typically 50% to begin and 50% on delivery. For larger projects we\'re open to discussing other arrangements.',
      },
    ],
    industrySpecific: [
      {
        industries: ['cleaning services', 'home services'],
        guidance:
          'For cleaning or home-service businesses, lead with booking forms, service area listings, before/after galleries, and simple quote-request flows. Mention M-Pesa payment integration if relevant.',
        sampleAnswer:
          "For a cleaning business, we'd usually build you a site with a clear services list, a booking or quote-request form, and maybe a gallery of before/after work. We can also wire up M-Pesa so customers can pay directly. Want me to point you to a package?",
      },
      {
        industries: ['tours', 'travel', 'tourism', 'safari operators'],
        guidance:
          'For tours/travel businesses, lead with booking systems, itinerary pages, image-heavy galleries, and multi-currency payment support since clients are often international.',
        sampleAnswer:
          "For a tours business, we'd typically build a site with a booking/reservation system, itinerary or package pages, a strong photo gallery, and payment support in multiple currencies since you're likely dealing with international travelers. We've actually built tourism sites before — one's now pulling in 50,000+ visitors a month.",
      },
      {
        industries: ['salons', 'spas', 'fitness', 'consultancies', 'agencies', 'restaurants'],
        guidance:
          'For appointment or reservation-based businesses, lead with booking/scheduling features and a clean service menu presentation.',
        sampleAnswer:
          "For that kind of business, the priority is usually a booking or appointment system plus a clean way to showcase your services or menu. We can build that as part of a custom site — want a quote?",
      },
      {
        fallback:
          "If a visitor mentions an industry not explicitly listed (e.g. real estate, healthcare, education, retail, logistics), don't say we 'don't do that.' We build for any industry — respond with general custom web development framing and ask a clarifying question about what the site needs to do.",
      },
    ],
    locationAndReach: [
      {
        question: 'Where are you located?',
        answer:
          "We're headquartered in Nairobi, Kenya, and work with clients both locally and internationally — most communication happens over WhatsApp, email, or video call, so location is rarely a barrier.",
      },
      {
        question: 'Do you work with clients outside Kenya?',
        answer: 'Yes, absolutely — we work with clients across different countries and time zones. Most of our process happens remotely regardless of where you\'re based.',
      },
    ],
    redesign: [
      {
        question: 'Do you do redesigns of existing websites?',
        answer:
          "Yes — redesigns are a big part of what we do. Whether it's a full rebuild or a refresh of what you already have, we can take a look and tell you honestly whether it needs a rebuild or just improvements.",
      },
      {
        question: 'My current website is old/slow/ugly, can you fix it?',
        answer: "We can definitely help with that. Send us the link if you have one — we'll take a look and give you a clear idea of what's worth fixing versus rebuilding.",
      },
    ],
  },

  process: {
    title: 'How a Project Usually Goes',
    steps: [
      {
        step: 1,
        name: 'Discovery & Planning',
        description: 'We get into the details — your goals, your customers, what\'s actually needed (and what isn\'t).',
        duration: '~1 week',
      },
      {
        step: 2,
        name: 'Design & Approval',
        description: 'Wireframes and designs come to you for feedback before we touch any code.',
        duration: '2–3 weeks',
      },
      {
        step: 3,
        name: 'Development',
        description: 'We build it properly — clean code, best practices, no shortcuts that bite you later.',
        duration: '4–12 weeks',
      },
      {
        step: 4,
        name: 'Testing & QA',
        description: 'We test across devices and browsers so there are no surprises after launch.',
        duration: '1–2 weeks',
      },
      {
        step: 5,
        name: 'Deployment',
        description: 'Launch day — your site goes live.',
        duration: '1 day',
      },
      {
        step: 6,
        name: 'Ongoing Support',
        description: 'We stay reachable for maintenance, fixes, and updates after launch.',
        duration: 'Ongoing',
      },
    ],
  },

  whyChooseUs: [
    'Deep experience across local and international markets, so we know what actually converts visitors into customers',
    'Quality-first pricing that\'s still genuinely competitive',
    '30+ projects delivered and counting',
    'Fast, responsive communication — no waiting a week to hear back',
    'Current, modern tools and frameworks — not outdated tech',
    'Everything is custom-built, not a recycled template',
    'SEO-conscious from the start, so search engines can actually find you',
    'Mobile-first, because most traffic today comes from phones',
    'Security taken seriously, not an afterthought',
    'You\'re kept in the loop at every stage — no radio silence for weeks',
    'Support doesn\'t stop the day we launch',
    'We train you (or your team) on managing the content yourselves',
  ],

  pages: {
    '/': 'Home page — overview of who we are and our main services',
    '/about': 'Our story, mission, vision, and the people behind Waks Digital',
    '/services': 'Full breakdown of everything we offer',
    '/pricing': 'Pricing packages and what affects cost',
    '/portfolio': 'Past projects and the results they got',
    '/contact': 'Contact form, phone, email, and where we\'re based',
    '/blog': 'Articles on web development, digital marketing, and tech for SMEs',
  },

  businessHours: {
    monday: '9:00 AM – 6:00 PM',
    tuesday: '9:00 AM – 6:00 PM',
    wednesday: '9:00 AM – 6:00 PM',
    thursday: '9:00 AM – 6:00 PM',
    friday: '9:00 AM – 6:00 PM',
    saturday: '10:00 AM – 3:00 PM',
    sunday: 'Closed',
    timezone: 'EAT (East Africa Time)',
    note: 'WhatsApp messages outside these hours still get answered — usually first thing the next morning.',
  },

  callToAction: {
    primary: 'Get a free consultation and a real quote — no obligation',
    secondary: 'Or just book a quick call with the team if you\'d rather talk it through',
    contacts: 'WhatsApp +254750509252 or email info@waksdigital.co.ke',
  },

  // Optional: lines the bot can pull from naturally rather than sounding scripted every time.
  conversationStarters: [
    "Hey! 👋 What are you looking to build — a new website, an online store, or something more custom?",
    "Hi there — happy to help. Are you exploring options, or do you already have a project in mind?",
  ],

  toneGuidelines: {
    doThis: [
      'Sound like a helpful person on the team, not a script reader',
      'Use contractions (we\'re, don\'t, it\'s) — stiff grammar reads as robotic',
      'Be upfront if something genuinely depends on more info, rather than forcing a generic answer',
      'Keep responses conversational length — not a wall of bullet points unless the user wants a breakdown',
    ],
    avoidThis: [
      'Corporate buzzwords like "synergy", "leverage", "cutting-edge" without substance behind them',
      'Repeating the same canned phrase across multiple replies',
      'Overpromising on timelines or pricing without checking specifics first',
      'Language that makes us sound like a small local-only studio (e.g. "small team", "we\'re just starting out") — we present as an established, capable digital solutions company with international reach',
      'Disclosing technical details about the underlying AI model/provider when asked — redirect politely instead',
    ],
  },
};

module.exports = WEBSITE_KNOWLEDGE;