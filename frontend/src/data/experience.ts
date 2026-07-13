export type ExperienceStatus = "Current" | "Completed" | "Goal";

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
  currentStatus: "Active and building",
  mainDirection: "Backend, systems, automation, and DevOps",
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2026 — Present",
    title: "Freelance Python Automation Developer",
    organization: "Upwork / Independent Clients",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    summary:
      "Building automation scripts, web scrapers, data-processing workflows, and custom tools for real clients.",
    achievements: [
      "Completed 19 freelance jobs with a 5.0 average rating",
      "Built browser automation and web-scraping tools using Python",
      "Created data pipelines for Excel, CSV, APIs, and structured reports",
      "Worked directly with clients to understand requirements and deliver reliable solutions",
      "Built scripts using Playwright, Selenium, BeautifulSoup, Pandas, and Python",
    ],
    technologies: [
      "Python",
      "Playwright",
      "Selenium",
      "BeautifulSoup",
      "Pandas",
      "Excel",
      "APIs",
    ],
    fileName: "2026_FREELANCE_AUTOMATION.LOG",
  },
  {
    id: 2,
    period: "2026",
    title: "Full-Stack Developer Intern",
    organization: "Waterfall Festival",
    location: "Koh Phangan, Thailand / Remote",
    type: "Internship",
    status: "Current",
    summary:
      "Designing and rebuilding the Waterfall Festival website using React, TypeScript, modern CSS, and a planned backend architecture.",
    achievements: [
      "Rebuilt the public festival website from scratch",
      "Created responsive pages for events, tickets, gallery, venue, FAQ, contact, and AI chat",
      "Designed an administration dashboard for events, tickets, gallery, messages, FAQs, and settings",
      "Improved mobile usability and reusable component architecture",
      "Planned backend integration using Node.js or NestJS, PostgreSQL, and APIs",
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
    fileName: "2026_WATERFALL_INTERNSHIP.LOG",
  },
  {
    id: 3,
    period: "2025 — 2026",
    title: "Software and Business Systems Intern",
    organization: "NET-INFO",
    location: "Tunisia",
    type: "Internship",
    status: "Completed",
    summary:
      "Worked with Odoo modules, quality-management processes, CRM workflows, HR systems, finance modules, and business software architecture.",
    achievements: [
      "Explored Odoo business modules and workflows",
      "Worked with CRM, HR, finance, and quality-management processes",
      "Learned how software systems support real company operations",
      "Improved understanding of business requirements and system architecture",
    ],
    technologies: ["Odoo", "CRM", "ERP", "QMS", "Business Analysis"],
    fileName: "2025_NETINFO_INTERNSHIP.LOG",
  },
  {
    id: 4,
    period: "2030 Objective",
    title: "High-Performing Systems Engineer in Europe",
    organization: "Long-Term Career Goal",
    location: "Europe",
    type: "Career Objective",
    status: "Goal",
    summary:
      "Developing strong expertise in backend engineering, Linux, distributed systems, DevOps, automation, and AI-assisted engineering.",
    achievements: [
      "Build strong Linux and operating-system fundamentals",
      "Develop advanced backend and system-design skills",
      "Gain practical DevOps and infrastructure experience",
      "Build reliable real-world engineering projects",
      "Continue improving French and professional communication",
    ],
    technologies: [
      "Linux",
      "Backend",
      "Distributed Systems",
      "DevOps",
      "Cloud",
      "AI/ML",
    ],
    fileName: "2030_SYSTEMS_ENGINEER_GOAL.LOG",
  },
];