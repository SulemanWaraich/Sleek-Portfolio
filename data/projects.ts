export type Project = {
  id: number;
  name: string;
  inspiredBy: [{name?: string, url?: string}];
  // inspiredBy: string[];
  type: string;
  date: string;
  hidePreview?: boolean;
  featured?: boolean;
  description?: string;
  content?: string;
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
    caseStudy?: string;
  };
  technologies?: string[];
  images?: {
    src: string;
    alt: string;
  }[];
  features?: {
    title: string;
    description: string;
  }[];
  workflow?: string[];
};

export const projects: Project[] = [
   {
    id: 10,
    name: "PakPay (wallet)",
    date: "2025 - Present",
    inspiredBy: [{name: "Myself", url: ""}],
    type: "fintech / fullstack",
    featured: true,
    description:
      "fintech platform for secure digital payments with real-time processing and wallet infrastructure.",
    content:
      "pakpay is a full-stack fintech platform built with microservices architecture. features real-time websocket pipelines, secure wallet systems, bank webhook integrations, and automated on-ramp/off-ramp payments. includes analytics dashboards and ai-powered payment insights. deployed on aws using docker and github actions for scalable and reliable infrastructure.",
    links: {
      demo: "https://pakpay10.site/",
      caseStudy: "/case-studies/pakpay",
    },
      technologies: [
      "next.js",
      "node.js",
      "postgresql",
      "prisma",
      "cloudflare workers",
      "websockets",
      "redis",
      "microservices",
      "aws",
      "docker",
      "github actions",
      "ci/cd",
      "fintech security",
      "monorepo architecture",
    ],
    features: [
      {
        title: "secure wallet system",
        description:
          "manage balances and transactions with secure wallet infrastructure.",
      },
      {
        title: "real-time payments",
        description:
          "websocket-based pipelines for instant transaction updates.",
      },
      {
        title: "bank integrations",
        description:
          "webhook-based syncing with banking systems for automation.",
      },
      {
        title: "analytics dashboard",
        description:
          "track transactions and insights with real-time data visualization.",
      },
      {
        title: "ai insights",
        description:
          "intelligent analysis of payment behavior and trends.",
      },
    ],
  },
  {
    id: 14,
    name: "Ryuk ai",
    date: "april, 2026",
    inspiredBy: [{name: "ankurgajurel", url: "https://github.com/ankurgajurel"}],
    type: "ai/saas",
    featured: true,
    description:
      "talk to your database, get answers. connect any database, explore schemas visually, and generate reports through conversation.",
    content:
      "ryuk is a conversational data analytics platform. connect any postgresql, mysql, or data warehouse — credentials encrypted at rest. ryuk automatically discovers your schema, labels tables and columns, and tracks drift over time. ask questions in plain english and ryuk writes the sql, validates it, and runs it. step-by-step reasoning renders show exactly how queries and insights are generated. build metric collections, pin charts to live dashboards that stay in sync with your data, and export polished reports from any conversation or dashboard in one click to pdf.",
    links: {
      demo: "https://ryuk-ai.xyz",
    },
    technologies: [
      "next.js",
      "typescript",
      "postgresql",
      "sql generation",
      "tool calling",
      "schema discovery",
    ],
    features: [
      {
        title: "database connections",
        description:
          "connect any postgresql, mysql, or data warehouse. credentials encrypted at rest.",
      },
      {
        title: "schema tracking",
        description:
          "automatic schema discovery with labeled tables and columns. tracks drift over time.",
      },
      {
        title: "chat interface",
        description:
          "ask questions in plain english. ryuk writes the sql, validates it, and runs it.",
      },
      {
        title: "reasoning engine",
        description:
          "step-by-step reasoning renders show exactly how queries and insights are generated.",
      },
      {
        title: "dashboards",
        description:
          "build metric collections and pin charts. live dashboards that stay in sync with your data.",
      },
      {
        title: "pdf export",
        description:
          "generate polished reports from any conversation or dashboard. one click to pdf.",
      },
    ],
    workflow: [
      "connect your database",
      "ryuk maps your schema",
      "ask anything",
      "build and export",
    ],
  },
  {
    id: 9,
    name: "School Management System (saas)",
    date: "feb, 2026",
    inspiredBy: [{name: "Odoo", url: "https://apps.odoo.com/apps/modules/16.0/wk_school_management"}],
    type: "fullstack/ai",
    featured: true,
    description:
      "comprehensive saas platform for managing school operations including students, teachers, classes, and assignments.",
    content:
      "built a full-stack school management system designed for institutions to manage academic workflows efficiently. includes role-based dashboards for admins, teachers, and students, assignment management, attendance tracking, and centralized data handling. integrates authentication, cloud storage, and scalable backend architecture for real-world deployment.",
    links: {
      demo: "https://odoo-school-management-system.netlify.app/",
    },
      technologies: [
      "next.js",
      "python",
      "flask",
      "postgresql",
      "prisma",
      "authentication",
      "cloud storage",
      "emergent"
    ],
    features: [
      {
        title: "role-based dashboards",
        description:
          "separate dashboards for admins, teachers, and students with controlled access.",
      },
      {
        title: "assignment management",
        description:
          "create, submit, and manage assignments with structured workflows.",
      },
      {
        title: "attendance tracking",
        description:
          "track and manage student attendance digitally.",
      },
      {
        title: "scalable architecture",
        description:
          "designed for real-world usage with secure and scalable backend systems.",
      },
    ],
  },

    {
    id: 6,
    name: "Awaaz Stories",
    date: "march, 2025",
    inspiredBy: [{name: "utarchadhav", url: "https://utarchadhav.com/"}],
    type: "frontend/BaaS",
    description: "podcast hosting and streaming platform",
    content:
      "platform for hosting and streaming podcasts where creators can upload audio content and listeners can stream episodes seamlessly.",
    links: {
      demo: "https://awaaz-stories.netlify.app/",
    },
    technologies: ["react", "supabase", "audio streaming", "cloudinary", "tailwindcss", "shadcn/ui"],
  },
{
  id: 7,
  name: "StreamX",
  date: "dec, 2024",
  inspiredBy: [{name: "twitter", url: "https://twitter.com"}],
  type: "backend",
  description: "YouTube + Twitter inspired social video platform",
  content:
    "A backend-focused project inspired by YouTube and Twitter, enabling users to upload short video content, interact through likes and comments, and engage in real-time social discussions. Built a complete backend system including authentication, media handling, API design, and scalable data management.",
  links: {
    demo: "https://youtube-twitter.vercel.app/",
  },
  technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Media Handling"],
}
];