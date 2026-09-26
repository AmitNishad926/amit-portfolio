export const SITE_CONFIG = {
  name: "Amit Nishad",
  title: "Full Stack Developer | .NET & Angular Specialist",
  email: "amitnishad926@gmail.com",
  phone: "+91 97251 48435",
  linkedin: "https://www.linkedin.com/in/amit-nishad-203253279/",
  resumePath: "/resume/Amit-Nishad-Resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    number: "01",
    icon: "Globe",
    title: "Business Websites",
    description:
      "Modern, responsive websites for companies, brands and organisations. Clean design, fast performance, and built to convert visitors into clients.",
  },
  {
    number: "02",
    icon: "Layers",
    title: "Full Stack Web Applications",
    description:
      "End-to-end web applications using .NET Core and Angular - from backend APIs and database design to polished frontend interfaces.",
  },
  {
    number: "03",
    icon: "Building2",
    title: "Enterprise Software",
    description:
      "HRM, CRM, workforce management and workflow-based systems built for real business operations with role-based access and reporting.",
  },
  {
    number: "04",
    icon: "Server",
    title: "API & Backend Development",
    description:
      "RESTful APIs, business logic layers, and database integration. Clean architecture, efficient queries and maintainable code.",
  },
  {
    number: "05",
    icon: "LayoutDashboard",
    title: "Dashboards & Admin Panels",
    description:
      "Data-driven dashboards, reporting systems and management panels that give businesses clear visibility into their operations.",
  },
  {
    number: "06",
    icon: "RefreshCw",
    title: "Website Modernisation",
    description:
      "Upgrading existing business websites with modern responsive interfaces, improved performance and contemporary design standards.",
  },
];

export const PUBLIC_PROJECTS = [
  {
    id: "isa",
    name: "ISA - Indian Society of Anaesthesiologists",
    category: "Professional Organisation / Healthcare",
    description:
      "Official website for the Indian Society of Anaesthesiologists, featuring member registration, event management, journal listings and news publication for a national professional medical body.",
    tags: ["ASP.NET", "Angular", "SQL Server", "Healthcare"],
    url: "https://www.isaweb.in/",
    featured: true,
    gradient: "from-blue-900/40 to-slate-900",
  },
  {
    id: "fiercelearning",
    name: "FierceLearning - E-Learning Platform",
    category: "E-Learning / Enterprise Platform",
    description:
      "Feature-rich e-learning platform with course management, video content delivery, quizzes, progress tracking, student and instructor portals, subscription management and administrative content controls.",
    tags: [".NET", "Angular", "SQL Server", "EdTech"],
    url: "https://fiercelearning.com/",
    featured: true,
    gradient: "from-violet-900/40 to-slate-900",
  },
  {
    id: "gohils",
    name: "Gohil's Designer Studio",
    category: "Business / Fashion / Tailoring",
    description:
      "Modern business website for a bespoke tailoring and Indian ethnic wear studio, showcasing services, portfolio, brand identity and customer contact options.",
    tags: ["Business Website", "Fashion", "Responsive Design"],
    url: "https://gohil-designer-studio.netlify.app/",
    featured: false,
    gradient: "from-amber-900/30 to-slate-900",
  },
  // {
  //   id: "lastloop",
  //   name: "The Last Loop",
  //   category: "E-Commerce / Handmade Brand",
  //   description:
  //     "Creative website for a handmade crochet brand, designed to showcase products, custom creations, and tell the brand story in an engaging and visually distinct way.",
  //   tags: ["E-Commerce", "Brand Website", "Creative"],
  //   url: "https://theelastloop.netlify.app/",
  //   featured: false,
  //   gradient: "from-rose-900/30 to-slate-900",
  // },
  {
    id: "ampure",
    name: "Ampure International",
    category: "Industrial / Export Business",
    description:
      "Professional business website for an industrial exporter specialising in electrical connectors, brass components, precision parts and related engineering solutions.",
    tags: ["Industrial", "B2B", "Corporate"],
    url: "https://ampureinternational.com/",
    featured: false,
    gradient: "from-emerald-900/30 to-slate-900",
  },
];

export const ENTERPRISE_PROJECTS = [
  {
    id: "hrm",
    title: "HRM System",
    fullTitle: "Human Resource Management System",
    tech: ["ASP.NET Core", "Angular", "SQL Server"],
    description:
      "End-to-end HR platform covering employee onboarding, attendance tracking, payroll processing and leave management - built for businesses managing multi-department workforces.",
    features: [
      "Employee management & onboarding",
      "Attendance tracking",
      "Payroll processing",
      "Leave management",
      "Role-based access control",
      "RESTful API integration",
      "Angular dashboard interface",
    ],
    icon: "Users",
  },
  {
    id: "crm",
    title: "CRM System",
    fullTitle: "Customer Relationship Management System",
    tech: ["ASP.NET Core", "Angular", "SQL Server"],
    description:
      "CRM platform built to manage leads, client interactions, follow-ups and sales pipeline tracking. Designed for sales teams that need clear visibility into their pipeline.",
    features: [
      "Lead management",
      "Client interaction logs",
      "Follow-up scheduling",
      "Sales pipeline tracking",
      "Real-time status updates",
      "Notifications system",
      "Reporting & exportable summaries",
    ],
    icon: "BarChart3",
  },
  {
    id: "workforce",
    title: "Workforce Management",
    fullTitle: "Workforce Management Software",
    tech: ["ASP.NET Core", "Angular", "SQL Server"],
    description:
      "Workforce scheduling and task allocation system for field technicians and support staff, giving managers real-time visibility into team productivity and assignments.",
    features: [
      "Shift management",
      "Attendance monitoring",
      "Job & task assignment",
      "Manager dashboards",
      "Productivity analytics",
      "Custom reporting",
      "Field technician portals",
    ],
    icon: "Briefcase",
  },
  {
    id: "transport",
    title: "Transport Management",
    fullTitle: "Transport Company Management System",
    tech: ["ASP.NET Core", "Angular", "SQL Server"],
    description:
      "Business management platform for fleet operations covering bookings, routes, drivers, billing and vehicle tracking - with both admin and client-facing portals.",
    features: [
      "Fleet management",
      "Booking management",
      "Route planning",
      "Driver management",
      "Billing & invoicing",
      "Vehicle tracking integration",
      "Admin panel & client booking portal",
    ],
    icon: "Truck",
  },
];

export const SKILLS = {
  Frontend: [
    "Angular", "TypeScript", "HTML5", "CSS3", "JavaScript", "Bootstrap",
  ],
  Backend: [
    "ASP.NET Core", ".NET Framework", "C#", "RESTful APIs", "PHP",
  ],
  Database: [
    "SQL Server", "MySQL", "Oracle", "Stored Procedures", "Query Optimisation",
  ],
  Languages: [
    "C#", "TypeScript", "JavaScript", "C", "C++", "Java",
  ],
  Architecture: [
    "Clean Architecture", "RESTful Design", "Agile / Scrum", "Schema Design", "Code Review", "Performance Tuning",
  ],
  Tools: [
    "Visual Studio", "VS Code", "Git", "GitHub", "Postman",
  ],
};

export const EXPERIENCE = [
  {
    role: "Software Developer - Full Stack",
    type: "Internship",
    company: "Codex Lancers",
    duration: "6 Months",
    responsibilities: [
      "Developed and maintained full-stack enterprise web applications using ASP.NET Core and Angular",
      "Designed and built RESTful APIs in .NET, consumed through Angular with TypeScript",
      "Worked on HRM, CRM and Workforce Management modules as part of larger business platforms",
      "Managed SQL Server databases including schema design, stored procedures and query optimisation",
      "Participated in Agile sprints, daily stand-ups and code review sessions",
      "Collaborated with cross-functional teams on multi-module enterprise projects",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "MCA - Master of Computer Applications",
    institution: "Sarvajanik College of Engineering and Technology",
    year: "Graduated 2026",
    cgpa: "8.18 CGPA",
    status: "completed",
  },
  {
    degree: "BCA - Bachelor of Computer Applications",
    institution: "SDJ International College",
    year: "Graduated 2024",
    cgpa: "7.61 CGPA",
    status: "completed",
  },
];

export const STATS = [
  { value: "9+", label: "Months Professional Full-Stack Experience" },
  { value: "4", label: "Public & Client Websites Delivered" },
  { value: "4", label: "Enterprise Application Domains" },
  { value: ".NET + Angular", label: "Primary Full-Stack Expertise" },
];
