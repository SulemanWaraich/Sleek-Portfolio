export type Project = {
  id: number;
  name: string;
  collabs: string[];
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
    id: 14,
    name: "ryuk ai",
    date: "march, 2026",
    collabs: [],
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
    id: 6,
    name: "guftuguu",
    date: "september, 2023",
    collabs: [],
    type: "fullstack",
    description: "podcast hosting and streaming platform",
    content:
      "platform for hosting and streaming podcasts where creators can upload audio content and listeners can stream episodes seamlessly.",
    links: {
      demo: "https://utarchadhav.com",
    },
    technologies: ["react", "node.js", "audio streaming"],
  },
  {
    id: 9,
    name: "school management system (saas)",
    date: "2026",
    collabs: [],
    type: "fullstack",
    featured: true,
    description:
      "comprehensive saas platform for managing school operations including students, teachers, classes, and assignments.",
    content:
      "built a full-stack school management system designed for institutions to manage academic workflows efficiently. includes role-based dashboards for admins, teachers, and students, assignment management, attendance tracking, and centralized data handling. integrates authentication, cloud storage, and scalable backend architecture for real-world deployment.",
    technologies: [
      "next.js",
      "react",
      "node.js",
      "postgresql",
      "prisma",
      "authentication",
      "cloud storage",
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
    id: 10,
    name: "pakpay",
    date: "2025",
    collabs: [],
    type: "fintech / fullstack",
    featured: true,
    description:
      "fintech platform for secure digital payments with real-time processing and wallet infrastructure.",
    content:
      "pakpay is a full-stack fintech platform built with microservices architecture. features real-time websocket pipelines, secure wallet systems, bank webhook integrations, and automated on-ramp/off-ramp payments. includes analytics dashboards and ai-powered payment insights. deployed on aws using docker and github actions for scalable and reliable infrastructure.",
    technologies: [
      "next.js",
      "node.js",
      "postgresql",
      "websockets",
      "microservices",
      "aws",
      "docker",
      "github actions",
      "ci/cd",
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
];