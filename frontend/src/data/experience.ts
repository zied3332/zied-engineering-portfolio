export type ExperienceStatus =
  | "Current"
  | "Completed"
  | "Goal";

export type Experience = {
  id: number;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  status: ExperienceStatus;
  summary: string;
  achievements: string[];
  technologies: string[];
  fileName: string;
};

export type CareerSummary = {
  freelanceJobsCompleted: number;
  currentStatus: string;
  mainDirection: string;
};

export const careerSummary: CareerSummary = {
  freelanceJobsCompleted: 19,
  currentStatus: "Available for new opportunities",
  mainDirection:
    "Backend engineering, automation, systems, and DevOps",
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2026 — Present",
    title: "Python Automation Developer",
    organization: "Upwork and Independent Clients",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    summary:
      "Developing automation tools, web scrapers, data-processing workflows, and custom Python solutions for real client requirements.",
    achievements: [
      "Completed 19 freelance projects with a 5.0 average rating",
      "Built browser automation tools for repetitive web workflows",
      "Created scraping systems for structured and unstructured websites",
      "Processed Excel, CSV, JSON, and API data into clean reports",
      "Communicated directly with clients from requirements to delivery",
    ],
    technologies: [
      "Python",
      "Playwright",
      "Selenium",
      "BeautifulSoup",
      "Pandas",
      "Excel",
      "REST APIs",
    ],
    fileName: "FREELANCE_AUTOMATION_2026.LOG",
  },
  {
    id: 2,
    period: "July 2026 — September 2026",
    title: "Full-Stack Developer Intern",
    organization: "Waterfall Festival",
    location: "Koh Phangan, Thailand / Remote",
    type: "Internship",
    status: "Current",
    summary:
      "Designing and developing a new responsive festival platform with a public website, administration dashboard, and planned backend services.",
    achievements: [
      "Rebuilt the festival website using React and TypeScript",
      "Created pages for events, tickets, gallery, venue, FAQ, and contact",
      "Designed an administration dashboard for managing website content",
      "Built reusable components and responsive mobile layouts",
      "Planned the backend, database, API, and media architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
    fileName: "WATERFALL_INTERNSHIP_2026.LOG",
  },
  {
    id: 3,
    period: "2025 — 2026",
    title: "Business Systems Intern",
    organization: "NET-INFO",
    location: "Tunisia",
    type: "Internship",
    status: "Completed",
    summary:
      "Studied how ERP and business-management systems support company operations, internal processes, and organizational workflows.",
    achievements: [
      "Explored Odoo modules and business workflows",
      "Worked with CRM, HR, finance, and quality-management concepts",
      "Analyzed how software supports daily company operations",
      "Improved understanding of business requirements and system design",
    ],
    technologies: [
      "Odoo",
      "ERP",
      "CRM",
      "QMS",
      "Business Analysis",
    ],
    fileName: "NETINFO_INTERNSHIP_2025.LOG",
  },
  {
    id: 4,
    period: "Target: 2030",
    title: "Systems Engineering Career Objective",
    organization: "Long-Term Development Plan",
    location: "Europe",
    type: "Career Goal",
    status: "Goal",
    summary:
      "Building the technical depth and professional experience required to become a high-performing systems engineer in Europe.",
    achievements: [
      "Strengthen Linux and operating-system fundamentals",
      "Develop advanced backend and system-design skills",
      "Gain practical DevOps and infrastructure experience",
      "Build reliable production-oriented engineering projects",
      "Improve French and professional communication",
    ],
    technologies: [
      "Linux",
      "Backend Engineering",
      "Distributed Systems",
      "DevOps",
      "Cloud Infrastructure",
      "AI Engineering",
    ],
    fileName: "SYSTEMS_ENGINEER_OBJECTIVE_2030.LOG",
  },
];

