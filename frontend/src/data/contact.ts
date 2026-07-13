export type ContactType =
  | "Email"
  | "LinkedIn"
  | "GitHub"
  | "Upwork"
  | "Location";

export type ContactIcon =
  | "email"
  | "linkedin"
  | "github"
  | "upwork"
  | "location";

export type ContactAction =
  | {
      type: "copy";
      label: string;
      value: string;
    }
  | {
      type: "link";
      label: string;
      href: string;
    }
  | null;

export type ContactRecord = {
  id: number;
  type: ContactType;
  title: string;
  subtitle: string;
  icon: ContactIcon;
  fileName: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  action: ContactAction;
};

export const contactRecords: ContactRecord[] = [
  {
    id: 1,
    type: "Email",
    title: "Professional Email",
    subtitle: "Primary contact address",
    icon: "email",
    fileName: "ZIED_EMAIL.CONTACT",
    description:
      "The best way to contact me about software projects, internships, freelance work, and professional opportunities.",
    details: [
      {
        label: "Email address",
        value: "ziedalimi2244@gmail.com",
      },
      {
        label: "Purpose",
        value: "Professional inquiries",
      },
      {
        label: "Response status",
        value: "Available",
      },
    ],
    highlights: [
      "Freelance project inquiries",
      "Internship opportunities",
      "Junior engineering roles",
      "Technical collaborations",
    ],
    action: {
      type: "copy",
      label: "Copy Email Address",
      value: "ziedalimi2244@gmail.com",
    },
  },
  {
    id: 2,
    type: "LinkedIn",
    title: "LinkedIn Profile",
    subtitle: "Professional network",
    icon: "linkedin",
    fileName: "LINKEDIN_PROFILE.URL",
    description:
      "My professional profile containing engineering experience, education, projects, skills, and career updates.",
    details: [
      {
        label: "Profile",
        value: "Zied Alimi",
      },
      {
        label: "Field",
        value: "Computer Engineering",
      },
      {
        label: "Focus",
        value: "Backend, automation, systems, and full-stack development",
      },
    ],
    highlights: [
      "Computer engineering student",
      "Python automation developer",
      "Full-stack project experience",
      "Open to professional networking",
    ],
    action: {
      type: "link",
      label: "Open LinkedIn",
      href: "https://www.linkedin.com/in/zied-alimi",
    },
  },
  {
    id: 3,
    type: "GitHub",
    title: "GitHub Repository Archive",
    subtitle: "Projects and source code",
    icon: "github",
    fileName: "GITHUB_REPOSITORIES.URL",
    description:
      "A collection of my portfolio projects, automation scripts, academic work, and software engineering experiments.",
    details: [
      {
        label: "Username",
        value: "ziedalimi2244",
      },
      {
        label: "Content",
        value: "Applications, scripts, automation tools, and experiments",
      },
      {
        label: "Activity",
        value: "Active development",
      },
    ],
    highlights: [
      "Engineering portfolio",
      "Waterfall Festival platform",
      "Python automation scripts",
      "Full-stack applications",
    ],
    action: {
      type: "link",
      label: "Open GitHub",
      href: "https://github.com/ziedalimi2244",
    },
  },
  {
    id: 4,
    type: "Upwork",
    title: "Upwork Freelance Profile",
    subtitle: "Client work and reviews",
    icon: "upwork",
    fileName: "UPWORK_FREELANCE_PROFILE.URL",
    description:
      "My freelance profile focused on Python automation, web scraping, data processing, API integration, and custom software tools.",
    details: [
      {
        label: "Jobs completed",
        value: "19",
      },
      {
        label: "Average rating",
        value: "5.0 / 5.0",
      },
      {
        label: "Work format",
        value: "Remote freelance",
      },
    ],
    highlights: [
      "Python automation",
      "Browser automation",
      "Web scraping",
      "Excel and CSV processing",
      "API integrations",
    ],
    action: {
      type: "link",
      label: "View Upwork Profile",
      href: "https://www.upwork.com/freelancers/~01",
    },
  },
  {
    id: 5,
    type: "Location",
    title: "Current Location",
    subtitle: "Work availability",
    icon: "location",
    fileName: "CURRENT_LOCATION.INFO",
    description:
      "Currently based in Tunisia and available for remote opportunities, local collaboration, and future relocation.",
    details: [
      {
        label: "Current location",
        value: "Tunisia",
      },
      {
        label: "Remote work",
        value: "Available",
      },
      {
        label: "Relocation",
        value: "Open to opportunities in Europe",
      },
    ],
    highlights: [
      "Remote opportunities",
      "Hybrid opportunities",
      "International collaboration",
      "Future relocation",
    ],
    action: null,
  },
];