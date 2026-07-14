export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full-Stack Technical Partner",
    company_name: "NDA",
    icon: "/assets/icons/nextjs.svg",
    iconBg: "#e5e7eb",
    date: "Jul 2024 - Jul 2026",
    points: [
      "Acted as embedded technical partner and team lead for a task-planning and AI-assistant SaaS platform, architecting two independently deployable Next.js microservices and working directly alongside the CEO, a business analyst, and QA.",
      "Assembled and led the development team, establishing code-review standards, CI/CD pipelines, and sprint workflows that improved delivery predictability.",
      "Designed and optimized RESTful and RPC-style API endpoints in Node.js/TypeScript, with persistent data storage via Prisma and PostgreSQL.",
      "Built a Retrieval-Augmented Generation (RAG) pipeline powered by the Claude and OpenAI APIs, combining embeddings-based vector search with LLM reasoning for a context-aware chat assistant.",
      "Designed lightweight AI agents to automate recurring engineering tasks, leveraging the Cursor ecosystem with MCP-based automation to accelerate development velocity.",
    ],
  },
  {
    title: "Senior Node/React Software Engineer",
    company_name: "SoftServe",
    icon: "/assets/icons/nodejs.svg",
    iconBg: "#bbf7d0",
    date: "Feb 2022 - May 2024",
    points: [
      "Led development and maintenance of a Node.js microservice for payment confirmation and subscription management, integrated with PostgreSQL.",
      "Implemented event-driven workflows and webhooks to synchronize services, reducing latency and improving system reliability.",
      "Built a production-grade NestJS backend applying clean architecture, dependency injection, and automated testing.",
      "Collaborated via Atlassian tools (Jira, Bitbucket, Confluence) to manage releases and cross-team workflows.",
    ],
  },
  {
    title: "Middle Node/Next.js Engineer",
    company_name: "SampleOcean",
    icon: "/assets/icons/mongodb.svg",
    iconBg: "#bfdbfe",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Designed and implemented multi-step backend-driven funnels using Node.js and MongoDB for dynamic data storage and personalization.",
      "Developed form-chaining logic and upsell/downsell workflows, improving conversion quality and sales performance.",
      "Integrated Stripe payment flows, server-side event tracking, and analytics tools (Hotjar, Sentry, GTM, Pixel).",
      "Enhanced backend testing, performance, and deployment pipelines, ensuring fast response times and reliable data flow.",
    ],
  },
  {
    title: "Junior / Strong Junior Full-Stack Developer",
    company_name: "UA LV PBN",
    icon: "/assets/icons/javascript.svg",
    iconBg: "#fef08a",
    date: "May 2019 - Jun 2021",
    points: [
      "Developed and maintained backend logic for affiliate marketing websites, focusing on data aggregation, content automation, and API integrations.",
      "Built Python-based parsers and ETL pipelines to collect and process content from multiple sources, ensuring data freshness and consistency.",
      "Implemented server-side rendering and markup generation, optimizing performance and SEO.",
      "Collaborated with developers and marketers to deliver stable, scalable, and high-performing backend solutions.",
    ],
  },
];
