export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedOverview?: string;
  projectFocus?: string;
  keyFeatures?: ProjectFeature[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
  imageType: 'ecommerce' | 'dicom' | 'mobile' | 'dashboard' | 'property' | 'crm';
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  location: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  startingPrice?: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sreejith S",
    title: "Software Engineer",
    gradientSubtitle: "React • Next.js • Node.js Developer",
    badgeText: "Available for Freelance Projects",
    bio: "Building fast, scalable web applications, mobile apps, and e-commerce platforms with clean code, modern technologies, and exceptional user experiences.",
    location: "Global",
    email: "sreejith2103@gmail.com",
    website: "https://www.sreejiths.in",
    whatsapp: "https://wa.me/919876543210",
    calendly: "https://calendly.com",
  },

  stats: [
    { label: "Years", value: 8, suffix: "+" },
    { label: "Projects", value: 50, suffix: "+" },
    { label: "Clients", value: 20, suffix: "+" },
    { label: "Satisfaction", value: 100, suffix: "%" },
  ],

  trustedLogos: [
    { name: "React", icon: "atom" },
    { name: "Next.js", icon: "zap" },
    { name: "Node.js", icon: "server" },
    { name: "PostgreSQL", icon: "database" },
    { name: "MongoDB", icon: "leaf" },
    { name: "Firebase", icon: "flame" },
    { name: "Stripe", icon: "credit-card" },
    { name: "AWS", icon: "cloud" },
    { name: "Docker", icon: "box" },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "Vercel", icon: "triangle" },
  ],

  whatIDo: [
    {
      id: "web-dev",
      title: "Full Stack Web Development",
      description: "Building production-ready, ultra-fast web applications with modern architectures and clean maintainable code.",
      features: [
        "React.js & Next.js 15 (App Router)",
        "TypeScript & Clean Architecture",
        "Tailwind CSS & Framer Motion UI",
        "Node.js APIs & Microservices",
        "Secure Authentication & JWT",
        "Responsive Admin Dashboards",
      ],
      icon: "code-2",
      gradient: "from-emerald-500/20 to-cyan-500/10",
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      description: "Crafting native-like cross-platform mobile apps for iOS and Android using React Native and Expo.",
      features: [
        "React Native & Expo Ecosystem",
        "iOS & Android Deployment",
        "Push Notifications & Background Services",
        "OTP Authentication & Biometrics",
        "Stripe & Native Payment Integration",
        "Offline Sync & Real-time State",
      ],
      icon: "smartphone",
      gradient: "from-cyan-500/20 to-purple-500/10",
    },
    {
      id: "backend-cloud",
      title: "Backend & Cloud Systems",
      description: "Designing robust database schemas, scalable microservices, and automated cloud deployment pipelines.",
      features: [
        "Express.js & NestJS REST APIs",
        "PostgreSQL & Prisma ORM",
        "MongoDB & Redis Caching",
        "Firebase Realtime Database",
        "AWS (EC2, S3, CloudFront, Lambda)",
        "Docker Containerization & CI/CD",
      ],
      icon: "server",
      gradient: "from-purple-500/20 to-emerald-500/10",
    },
  ],

  projects: [
    {
      id: "dubai-police",
      title: "Dubai Police Merchandise E-commerce Platform",
      category: "E-Commerce",
      description: "Complete, production-ready e-commerce platform for a Dubai Police merchandise store, providing customers with a seamless and secure shopping experience across web and mobile devices.",
      detailedOverview: "Developed a complete, production-ready e-commerce platform for a Dubai Police merchandise store, providing customers with a seamless and secure shopping experience across web and mobile devices.",
      keyFeatures: [
        { title: "Complete E-commerce System", description: "Product catalog, categories, product details, search, wishlist, cart and checkout." },
        { title: "Customer Authentication", description: "Secure registration, login, OTP/email verification and guest shopping." },
        { title: "Payment Integration", description: "Integrated N-Genius payment gateway with payment authorization, verification and order-status handling." },
        { title: "Order Management", description: "Complete order lifecycle including order creation, payment status, order history and invoice generation." },
        { title: "Wishlist & Cart", description: "Persistent customer wishlist and cart management with guest-to-user cart handling." },
        { title: "Email & Notifications", description: "OTP verification, order confirmation and transactional email integration." },
        { title: "Admin Dashboard", description: "Product, inventory, customer, order and store management through an administrative interface." },
        { title: "Inventory Management", description: "Product stock management and inventory availability tracking." },
        { title: "Responsive UI", description: "Optimized experience across desktop, tablet and mobile devices." },
        { title: "Security", description: "Authentication, protected customer data, API security, secure payment processing and sensitive-data handling." },
        { title: "Backend & APIs", description: "Developed REST APIs for seamless data synchronization." },
      ],
      tags: ["React", "Node.js", "PostgreSQL", "N-Genius Gateway", "Tailwind CSS"],
      liveUrl: "https://example.com/dubai-police",
      githubUrl: "https://github.com/devsreejith",
      image: "/images/dp-store.webp",
      imageType: "ecommerce",
      featured: true,
    },
    {
      id: "medical-viewer",
      title: "Custom Medical Imaging Viewer",
      category: "Healthcare Tech",
      description: "Developed and customized a web-based medical imaging application using the open-source OHIF Viewer framework for viewing and analyzing DICOM medical studies directly in the browser.",
      detailedOverview: "Developed and customized a web-based medical imaging application using the open-source OHIF Viewer framework for viewing and analyzing DICOM medical studies directly in the browser.",
      projectFocus: "Medical imaging visualization • DICOM viewer • Radiology workflow • Image analysis • Web-based healthcare application",
      keyFeatures: [
        { title: "DICOM CT and medical image visualization" },
        { title: "Multi-slice image viewing and navigation" },
        { title: "Window Level and Window Width controls" },
        { title: "Zoom, pan and image manipulation" },
        { title: "Image annotations and measurements" },
        { title: "Medical image segmentation and labelmap visualization" },
        { title: "2D and 3D visualization capabilities" },
        { title: "DICOMWeb integration for retrieving imaging studies" },
        { title: "Patient and study information display" },
        { title: "Series and study navigation" },
        { title: "Customizable viewer interface and tools" },
        { title: "Responsive browser-based medical imaging workflow" },
        { title: "Support for extensible imaging workflows" },
      ],
      tags: ["OHIF Viewer", "React", "JavaScript/TypeScript", "Cornerstone3D", "DICOM", "DICOMWeb", "Web APIs"],
      liveUrl: "https://example.com/medical-viewer",
      githubUrl: "https://github.com/devsreejith",
      image: "/images/medical-viewer.webp",
      imageType: "dicom",
      featured: true,
    },
    {
      id: "booknfix",
      title: "BookNFix — AC Service & Repair Mobile App",
      category: "Mobile App",
      description: "BookNFix is a mobile application designed to make AC service and repair booking simple, fast, and convenient for customers.",
      detailedOverview: "BookNFix is a mobile application designed to make AC service and repair booking simple, fast, and convenient for customers. The application provides an easy-to-use interface for customers to register, access services, and manage their service requirements.",
      projectFocus: "Mobile App Development • Service Booking • Customer Experience • AC Service Management",
      keyFeatures: [
        { title: "User registration and login" },
        { title: "Mobile number-based signup" },
        { title: "AC service and repair booking" },
        { title: "AC installation services" },
        { title: "AC cleaning and maintenance services" },
        { title: "Simple and intuitive user interface" },
        { title: "Service status and booking management" },
        { title: "Responsive mobile experience" },
        { title: "Customer-friendly service workflow" },
      ],
      tags: ["React Native", "JavaScript", "Redux", "Firebase"],
      liveUrl: "https://example.com/booknfix",
      githubUrl: "https://github.com/devsreejith",
      image: "/images/book_fix.webp",
      imageType: "mobile",
      featured: true,
    },
    {
      id: "dp-world",
      title: "Nexus Global Analytics Dashboard",
      category: "Web Platform",
      description: "Enterprise analytics portal for managing international logistics, real-time shipment monitoring, interactive revenue charts, and automated PDF reporting.",
      detailedOverview: "High-throughput logistics portal handling international freight data, container tracking, and revenue forecasting.",
      keyFeatures: [
        { title: "Realtime Telemetry", description: "WebSocket live container status updates across global ports." },
        { title: "Automated Reporting", description: "Exportable PDF/Excel financial reports with chart analytics." },
      ],
      tags: ["Next.js", "Admin Dashboard", "Charts", "PostgreSQL", "Tailwind"],
      liveUrl: "https://example.com/dp-world",
      githubUrl: "https://github.com/devsreejith",
      imageType: "dashboard",
      featured: true,
    },
    {
      id: "property-booking",
      title: "Orbit Property Booking Platform",
      category: "Collaboration",
      description: "Luxury property rental application featuring interactive Mapbox geolocation search, calendar availability sync, instant Stripe checkout, and host tools.",
      detailedOverview: "Full-featured real estate marketplace for short-term luxury villa bookings.",
      keyFeatures: [
        { title: "Mapbox Search", description: "Interactive map pins with instant price popups and distance filters." },
        { title: "Stripe Checkout", description: "Multi-currency instant booking checkout with deposit hold." },
      ],
      tags: ["Next.js", "Stripe", "Maps", "Tailwind CSS", "Prisma"],
      liveUrl: "https://example.com/property",
      githubUrl: "https://github.com/devsreejith",
      imageType: "property",
      featured: true,
    },
    {
      id: "ai-crm",
      title: "AI Revenue CRM Platform",
      category: "AI SaaS",
      description: "Automated customer relationship manager powered by LLMs for automated lead scoring, email drafting, predictive pipeline analytics, and task routing.",
      detailedOverview: "AI-native CRM system that automates lead nurturing and sales pipeline forecasting using LLM agents.",
      keyFeatures: [
        { title: "AI Lead Scoring", description: "Predictive conversion probability calculated automatically per deal." },
        { title: "Auto Pitch Generation", description: "One-click personalized email draft generation based on CRM history." },
      ],
      tags: ["React", "Node.js", "PostgreSQL", "OpenAI API", "Redis"],
      liveUrl: "https://example.com/ai-crm",
      githubUrl: "https://github.com/devsreejith",
      imageType: "crm",
      featured: true,
    },
  ] as Project[],

  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "Atom", highlight: true },
        { name: "Next.js", icon: "Zap", highlight: true },
        { name: "TypeScript", icon: "Code", highlight: true },
        { name: "Tailwind CSS", icon: "Palette", highlight: true },
        { name: "Redux Toolkit", icon: "Layers" },
        { name: "React Query", icon: "RefreshCw" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "Server", highlight: true },
        { name: "Express.js", icon: "Cpu" },
        { name: "PostgreSQL", icon: "Database", highlight: true },
        { name: "MongoDB", icon: "Leaf", highlight: true },
        { name: "Firebase", icon: "Flame" },
        { name: "Prisma ORM", icon: "Shield" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", icon: "Smartphone", highlight: true },
        { name: "Expo", icon: "Box", highlight: true },
        { name: "Android", icon: "Bot" },
        { name: "iOS Development", icon: "Apple" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", icon: "GitBranch", highlight: true },
        { name: "Docker", icon: "Container", highlight: true },
        { name: "AWS", icon: "Cloud" },
        { name: "Figma", icon: "Figma" },
        { name: "Vercel", icon: "Triangle" },
      ],
    },
  ] as SkillCategory[],

  about: {
    heading: "Curious about me?",
    paragraphs: [
      "Building fast, scalable web applications, mobile apps, and e-commerce platforms with clean code, modern technologies, and exceptional user experiences.",
      "My expertise spans from building pixel-perfect, lightning-fast frontend interfaces with React & Next.js to architecting resilient microservices, secure authentication flows, and payment gateway integrations.",
      "Whether it's an e-commerce platform for Dubai Police, complex DICOM medical viewers, or high-throughput AI dashboards, I focus on delivering clean code, intuitive UX, and measurable business growth.",
    ],
    highlights: [
      { text: "Full Stack Developer with 8+ years experience", icon: "Globe" },
      { text: "Specialized in E-Commerce & High-Growth SaaS Platforms", icon: "ShoppingBag" },
      { text: "Cross-Platform Mobile Developer (React Native & Expo)", icon: "Smartphone" },
      { text: "API Integration, Payment Gateways & Secure Auth Specialist", icon: "ShieldCheck" },
    ],
  },

  experience: [
    {
      company: "LS Apps Solution",
      role: "Full Stack Developer",
      period: "2025 – Present",
      location: "UAE Remote",
      description: "Developing scalable web & mobile applications, integrating payment gateways, and architecting cloud-ready microservices for UAE and international enterprise clients.",
      skills: ["React", "Next.js 15", "Node.js", "React Native", "PostgreSQL"],
    },
    {
      company: "Cirakas Consulting",
      role: "Senior Web Developer",
      period: "2018 – 2025",
      location: "Kerala, India",
      description: "Led full-stack engineering for major client projects including official e-commerce platforms, DICOM medical imaging tools, and responsive admin portals.",
      skills: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    },
    {
      company: "AIBI Technologies",
      role: "Web Developer",
      period: "2016 – 2018",
      location: "Kerala, India",
      description: "Built interactive web applications, reusable UI components, admin dashboards, and database integrations for various industry clients.",
      skills: ["JavaScript", "React", "HTML5/CSS3", "MySQL", "REST APIs"],
    },
  ] as ExperienceItem[],

  process: [
    {
      step: "01",
      title: "Research & Planning",
      description: "Analyzing business requirements, mapping user journeys, creating interactive Figma wireframes, and defining architectural roadmaps.",
      icon: "Search",
      codeSnippet: "// Wireframe & Architecture Blueprint\nconst spec = {\n  target: 'Scalable Microservices',\n  ux: 'Aura Glassmorphism',\n  perfTarget: 'Lighthouse 95+'\n};",
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Crafting pixel-perfect responsive layouts with Framer Motion, building modular React components, and integrating robust REST/GraphQL APIs.",
      icon: "Code2",
      codeSnippet: "const Developer = {\n  stack: ['Next.js 15', 'TypeScript'],\n  style: 'Tailwind CSS + Glassmorphism',\n  cleanCode: true\n};",
    },
    {
      step: "03",
      title: "Testing & Deployment",
      description: "Rigorous performance audits, automated unit testing, SEO optimization, and seamless automated CI/CD deployments to AWS or Vercel.",
      icon: "CheckCircle2",
      codeSnippet: "export async function deploy() {\n  await testSuite.passAll();\n  await vercel.shipToProduction();\n  console.log('🚀 100% Clean Launch!');\n}",
    },
  ],

  services: [
    {
      title: "Website Development",
      description: "Custom high-performance web applications built with Next.js 15, React 19, and Tailwind CSS.",
      icon: "Globe",
    },
    {
      title: "Mobile App Development",
      description: "Native cross-platform iOS & Android mobile apps powered by React Native and Expo.",
      icon: "Smartphone",
    },
    {
      title: "Admin Dashboards",
      description: "Interactive analytics portals with real-time charts, tables, and secure role-based permissions.",
      icon: "LayoutDashboard",
    },
    {
      title: "API & Backend Integration",
      description: "Scalable REST APIs, GraphQL microservices, JWT authentication, and database design.",
      icon: "Server",
    },
    {
      title: "E-Commerce Platforms",
      description: "Custom online stores with Stripe, PayPal, order management, and inventory tracking.",
      icon: "ShoppingBag",
    },
    {
      title: "Figma UI to React Code",
      description: "Converting design prototypes into clean, responsive, production-ready React component code.",
      icon: "Figma",
    },
    {
      title: "High-Converting Landing Pages",
      description: "Ultra-fast sales pages with luxury animations, SEO optimization, and high lead conversion.",
      icon: "Sparkles",
    },
    {
      title: "Maintenance & Optimization",
      description: "Speed optimization, Lighthouse audit fixes, security patches, and ongoing support.",
      icon: "Wrench",
    },
  ] as ServiceItem[],

  socials: [
    { name: "GitHub", url: "https://github.com/devsreejith", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sreejith-s2103", icon: "Linkedin" },
    { name: "Website", url: "https://www.sreejiths.in", icon: "Globe" },
    { name: "Fiverr", url: "https://fiverr.com", icon: "Briefcase" },
    { name: "Upwork", url: "https://upwork.com", icon: "Award" },
  ],
};
