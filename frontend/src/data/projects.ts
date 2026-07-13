import ocrImage from "../assets/projects/project-ocr.png";
import fallehtechImage from "../assets/projects/project-fallehtech.jpg";
import intellihrImage from "../assets/projects/project-intellihr.png";


export type Project = {
  id: number;
  title: string;
  fileName: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
  year: string;
  status: "Completed" | "In Progress";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered HR SaaS Platform",
    fileName: "INTELLIHR_PROJECT",
    description:
      "A complete HR management platform with employee management, recruitment workflows, AI-powered services, and containerized deployment.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    image: intellihrImage,
    category: "Full-Stack Application",
    year: "2026",
    status: "Completed",
    github: "https://github.com/zied3332",
  },
  {
    id: 2,
    title: "OCR Handwritten to Excel",
    fileName: "OCR_AUTOMATION_TOOL",
    description:
      "A Python automation solution that extracts handwritten information from documents and converts it into structured Excel files.",
    technologies: [
      "Python",
      "OCR",
      "OpenCV",
      "Pandas",
      "Excel Automation",
    ],
    image: ocrImage,
    category: "Python Automation",
    year: "2026",
    status: "Completed",
    github: "https://github.com/zied3332",
  },
  {
    id: 3,
    title: "FallehTech Smart Agriculture Platform",
    fileName: "FALLEHTECH_PLATFORM",
    description:
      "A smart agriculture platform that connects farmers with services, products, marketplace features, and agricultural management tools.",
    technologies: [
      "Full-Stack",
      "Web APIs",
      "Database",
      "Marketplace",
      "Agriculture",
    ],
    image: fallehtechImage,
    category: "Web Platform",
    year: "2025",
    status: "Completed",
    github: "https://github.com/zied3332",
  },
];