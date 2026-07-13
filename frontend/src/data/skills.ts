export type SkillLevel =
  | "Strong"
  | "Working Knowledge"
  | "Learning";

export type Skill = {
  name: string;
  level: SkillLevel;
  description?: string;
};

export type SkillCategoryType = {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategoryType[] = [
  {
    id: "languages",
    title: "Languages & Scripting",
    icon: "⌨",
    description:
      "Programming languages and scripting tools used across web, automation, and engineering projects.",
    skills: [
      {
        name: "Python",
        level: "Strong",
        description:
          "Automation, web scraping, data processing, APIs, and backend services.",
      },
      {
        name: "JavaScript",
        level: "Strong",
        description:
          "Frontend development, browser logic, and full-stack projects.",
      },
      {
        name: "TypeScript",
        level: "Working Knowledge",
        description:
          "Typed React applications and backend development.",
      },
      {
        name: "Java",
        level: "Working Knowledge",
        description:
          "Object-oriented programming and university projects.",
      },
      {
        name: "Bash",
        level: "Working Knowledge",
        description:
          "Linux scripting, automation, and system administration.",
      },
      {
        name: "SQL",
        level: "Working Knowledge",
        description:
          "Database queries, schema design, and data manipulation.",
      },
      {
        name: "PowerShell",
        level: "Learning",
        description:
          "Windows administration and development workflows.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "▣",
    description:
      "Technologies used to create responsive and interactive web interfaces.",
    skills: [
      {
        name: "React",
        level: "Strong",
        description:
          "Reusable components, hooks, routing, and modern frontend architecture.",
      },
      {
        name: "HTML",
        level: "Strong",
        description:
          "Semantic markup, accessible layouts, and responsive structures.",
      },
      {
        name: "CSS",
        level: "Strong",
        description:
          "Responsive design, animations, layouts, and component styling.",
      },
      {
        name: "React Router",
        level: "Working Knowledge",
        description:
          "Client-side routing and nested application layouts.",
      },
      {
        name: "Responsive Design",
        level: "Strong",
        description:
          "Mobile-first interfaces across phones, tablets, and desktops.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "⚙",
    description:
      "Backend frameworks, APIs, authentication, and application services.",
    skills: [
      {
        name: "Node.js",
        level: "Working Knowledge",
        description:
          "Backend APIs, server-side logic, and integrations.",
      },
      {
        name: "NestJS",
        level: "Working Knowledge",
        description:
          "Structured TypeScript backend applications and REST APIs.",
      },
      {
        name: "FastAPI",
        level: "Working Knowledge",
        description:
          "Python APIs, automation services, and machine learning integrations.",
      },
      {
        name: "Django",
        level: "Learning",
        description:
          "Python web applications, models, views, and backend architecture.",
      },
      {
        name: "REST APIs",
        level: "Strong",
        description:
          "Designing, consuming, and integrating web APIs.",
      },
      {
        name: "Authentication",
        level: "Working Knowledge",
        description:
          "Login flows, authorization, and protected application routes.",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation & Data",
    icon: "▶",
    description:
      "Tools used for scraping, repetitive task automation, and data workflows.",
    skills: [
      {
        name: "Web Scraping",
        level: "Strong",
        description:
          "Collecting and structuring data from complex websites.",
      },
      {
        name: "Selenium",
        level: "Working Knowledge",
        description:
          "Browser automation and dynamic website interactions.",
      },
      {
        name: "BeautifulSoup",
        level: "Strong",
        description:
          "HTML parsing and structured data extraction.",
      },
      {
        name: "Pandas",
        level: "Strong",
        description:
          "Cleaning, transforming, and exporting structured datasets.",
      },
      {
        name: "Excel Automation",
        level: "Strong",
        description:
          "Automated reports, formatting, conversion, and data processing.",
      },
      {
        name: "OCR",
        level: "Working Knowledge",
        description:
          "Extracting structured information from images and documents.",
      },
      {
        name: "ETL Pipelines",
        level: "Working Knowledge",
        description:
          "Extracting, transforming, validating, and loading data.",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "▤",
    description:
      "Relational and document databases used in full-stack applications.",
    skills: [
      {
        name: "PostgreSQL",
        level: "Working Knowledge",
        description:
          "Relational database design, queries, and backend integration.",
      },
      {
        name: "MySQL",
        level: "Working Knowledge",
        description:
          "Database management and web application storage.",
      },
      {
        name: "MongoDB",
        level: "Working Knowledge",
        description:
          "Document databases and JavaScript backend applications.",
      },
      {
        name: "Oracle SQL",
        level: "Learning",
        description:
          "Relational database concepts and enterprise SQL.",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    icon: "⚒",
    description:
      "Tools for containerization, deployment, automation, and infrastructure.",
    skills: [
      {
        name: "Docker",
        level: "Working Knowledge",
        description:
          "Containerizing frontend, backend, and database services.",
      },
      {
        name: "Docker Compose",
        level: "Working Knowledge",
        description:
          "Running and connecting multi-container applications.",
      },
      {
        name: "GitHub Actions",
        level: "Working Knowledge",
        description:
          "Automated testing, build workflows, and deployment pipelines.",
      },
      {
        name: "Kubernetes",
        level: "Learning",
        description:
          "Container orchestration, deployments, and services.",
      },
      {
        name: "Terraform",
        level: "Learning",
        description:
          "Infrastructure as code and cloud resource management.",
      },
      {
        name: "Jenkins",
        level: "Learning",
        description:
          "Continuous integration and deployment pipelines.",
      },
      {
        name: "AWS",
        level: "Learning",
        description:
          "Cloud infrastructure, storage, compute, and deployment.",
      },
    ],
  },
  {
    id: "systems",
    title: "Linux & Systems",
    icon: "■",
    description:
      "Operating systems, networking, command-line tools, and system fundamentals.",
    skills: [
      {
        name: "Linux",
        level: "Working Knowledge",
        description:
          "Command line, permissions, processes, packages, logs, and services.",
      },
      {
        name: "Ubuntu",
        level: "Working Knowledge",
        description:
          "Development environments and Linux server practice.",
      },
      {
        name: "Systemd",
        level: "Learning",
        description:
          "Managing services, startup processes, and system logs.",
      },
      {
        name: "Networking",
        level: "Working Knowledge",
        description:
          "DNS, ports, HTTP, firewalls, load balancing, and network basics.",
      },
      {
        name: "SSH",
        level: "Working Knowledge",
        description:
          "Secure remote access and server administration.",
      },
      {
        name: "VirtualBox",
        level: "Working Knowledge",
        description:
          "Virtual machines and Linux lab environments.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Collaboration",
    icon: "✦",
    description:
      "Development, version control, design, and project collaboration tools.",
    skills: [
      {
        name: "Git",
        level: "Strong",
        description:
          "Version control, branches, commits, and collaboration workflows.",
      },
      {
        name: "GitHub",
        level: "Strong",
        description:
          "Repository management, project documentation, and collaboration.",
      },
      {
        name: "Visual Studio Code",
        level: "Strong",
        description:
          "Primary development environment for frontend, backend, and Python.",
      },
      {
        name: "Postman",
        level: "Working Knowledge",
        description:
          "Testing and documenting REST APIs.",
      },
      {
        name: "Jira",
        level: "Working Knowledge",
        description:
          "Task tracking and agile project management.",
      },
      {
        name: "Figma",
        level: "Working Knowledge",
        description:
          "Interface planning, design references, and layout preparation.",
      },
    ],
  },
];