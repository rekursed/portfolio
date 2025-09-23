export interface Job {
  role: string;
  company: string;
  dates: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const jobs: Job[] = [
  {
    role: "Senior Technology Consultant",
    company: "Crosstide",
    dates: "May 2023 – Aug 2025",
    duration: "2 years 3 months",
    location: "Remote",
    highlights: [
      "Led end-to-end service delivery and technical architecture for enterprise clients including Recharge and Marks & Spencer",
      "Spearheaded AI/ML initiatives, delivering custom LLM integration solutions and generative AI use cases",
      "Mentored 8+ junior consultants and initiated comprehensive internal AI training program",
      "Architected scalable cloud-native solutions using AWS, Docker, and modern CI/CD practices",
      "Collaborated with C-level executives to define technical strategy and digital transformation roadmaps",
    ],
    technologies: [
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "LLM",
      "Machine Learning",
      "Terraform",
      "Kubernetes",
    ],
  },
  {
    role: "Tech Lead",
    company: "Friisbee",
    dates: "May 2022 – May 2023",
    duration: "1 year",
    location: "London, UK",
    highlights: [
      "Built and scaled distributed systems handling 1M+ daily transactions with 99.9% uptime",
      "Implemented comprehensive Infrastructure as Code using Terraform, reducing deployment time by 70%",
      "Developed robust data pipelines connecting Fivetran to Snowflake with DBT for real-time analytics",
      "Recruited and coached a new engineering team of 6 developers, establishing best practices and code review processes",
      "Led technical decision-making for microservices architecture and event-driven system design",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Terraform",
      "Snowflake",
      "DBT",
      "Fivetran",
      "AWS",
      "Docker",
    ],
  },
  {
    role: "Full-stack Software Engineer",
    company: "Dunelm",
    dates: "Sept 2021 – Oct 2022",
    duration: "1 year 1 month",
    location: "Leicester, UK",
    highlights: [
      "Migrated legacy monolithic systems to AWS CDK, improving scalability and reducing infrastructure costs by 40%",
      "Designed and implemented microservices architecture for e-commerce platform serving 2M+ customers",
      "Introduced comprehensive CI/CD pipeline with GitLab, reducing deployment time from hours to minutes",
      "Optimized database performance and implemented caching strategies, improving page load times by 60%",
      "Collaborated with product teams to deliver customer-facing features and backend API improvements",
    ],
    technologies: [
      "Node.js",
      "AWS CDK",
      "TypeScript",
      "GitLab CI/CD",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    role: "Full-stack Software Engineer",
    company: "Checkatrade",
    dates: "July 2020 – July 2021",
    duration: "1 year",
    location: "London, UK",
    highlights: [
      "Implemented event-driven serverless microservices architecture using AWS EventBridge and Lambda",
      "Orchestrated migration from REST APIs to event-driven architecture, improving system resilience",
      "Developed real-time notification system processing 500K+ events daily with 99.95% reliability",
      "Built automated testing frameworks and monitoring solutions using AWS CloudWatch and custom dashboards",
      "Collaborated with DevOps team to establish infrastructure monitoring and alerting systems",
    ],
    technologies: [
      "Node.js",
      "AWS EventBridge",
      "Lambda",
      "DynamoDB",
      "CloudWatch",
      "Serverless",
      "TypeScript",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "HEXR",
    dates: "Aug 2019 – Jun 2020",
    duration: "10 months",
    location: "London, UK",
    highlights: [
      "Optimized database architecture and query performance, reducing response times by 50%",
      "Developed scalable GPU-based serverless framework for 3D modeling workloads with auto-scaling",
      "Introduced comprehensive CI/CD automation, reducing deployment time from 2 hours to 15 minutes",
      "Built real-time collaboration features for 3D design platform using WebSockets and Redis",
      "Implemented advanced caching strategies and CDN optimization for global user base",
    ],
    technologies: [
      "Python",
      "Node.js",
      "GPU Computing",
      "Docker",
      "Kubernetes",
      "Redis",
      "WebSockets",
      "AWS",
    ],
  },
  {
    role: "Backend Software Engineer",
    company: "Callaly",
    dates: "May 2018 – Jul 2019",
    duration: "1 year 2 months",
    location: "London, UK",
    highlights: [
      "Built custom subscription commerce platform from scratch using Python Django and React",
      "Designed and built customer portal with real-time subscription management and analytics",
      "Established monitoring and logging infrastructure for production systems and customer support",
    ],
    technologies: [
      "Python",
      "Django",
      "AWS Lambda",
      "Stripe API",
      "PostgreSQL",
      "ChargeBee",
    ],
  },
];
