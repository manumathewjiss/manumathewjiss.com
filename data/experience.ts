export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: "startup" | "research" | "teaching";
  bullets: string[];
  tech?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Co-Founder & Software Engineer",
    company: "Stock Crusher (GenAI Startup)",
    duration: "Summer 2025 – Present",
    type: "startup",
    bullets: [
      "Built and deployed a production-ready multi-AI trading platform integrating 8+ real-time market APIs.",
      "Implemented a weighted consensus algorithm across Gemini, Perplexity, and OpenAI for BUY/SELL/HOLD signals.",
      "Delivered via Flask APIs and a React + Tailwind dashboard with resilient cloud deployment.",
    ],
    tech: ["Python", "Flask", "React", "OpenAI", "Gemini", "Perplexity", "Render.com"],
  },
  {
    id: 2,
    role: "Co-Founder & Software Engineer",
    company: "MealMuse (AI-Powered iOS Startup — Live on App Store)",
    duration: "Fall 2025 – Present",
    type: "startup",
    bullets: [
      "Launched a production-ready AI-powered iOS app using SwiftUI and Node.js/TypeScript (Fastify) backend.",
      "Enabled personalized recipe generation via text, voice, and image inputs.",
      "Built scalable OpenAI GPT-4o-mini infrastructure with caching, reducing LLM calls by 80–90%.",
    ],
    tech: ["Swift", "SwiftUI", "Node.js", "TypeScript", "PostgreSQL", "OpenAI", "Fastify"],
  },
  {
    id: 3,
    role: "Graduate Teaching Assistant",
    company: "University of the Pacific (Advisor: Dr. Sethuraman Kuruvimalai)",
    duration: "Spring 2026 – Present",
    type: "teaching",
    bullets: [
      "Assisted in ANLT-293B: Introduction to Security Analytics.",
      "Supported hands-on instruction in Linux, virtualization, Splunk SIEM, and SOC-based security investigations.",
      "Created quizzes, graded assignments, guided lab sessions, and prepared course materials.",
    ],
    tech: ["Splunk", "Linux", "SIEM", "Cybersecurity", "EDR"],
  },
  {
    id: 4,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Pramod Gupta)",
    duration: "Spring 2026 – Present",
    type: "research",
    bullets: [
      "Developed MoodMirror, an AI-powered student emotional wellness tracking system.",
      "Integrated GPT-4o-mini diary generation with a fine-tuned RoBERTa emotion classification model.",
      "Built with Next.js, FastAPI, and PostgreSQL with interactive analytics for mood trend detection.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "RoBERTa", "GPT-4o-mini"],
  },
  {
    id: 5,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Solomon Berhe)",
    duration: "Summer 2025 – Present",
    type: "research",
    bullets: [
      "Conducted large-scale sentiment trajectory research on 324+ Reddit discussions within the ReleaseTrain.io ecosystem.",
      "Built a Python-based pipeline using VADER, REST APIs, and custom quality/reliability metrics.",
      "Compared author vs. community sentiment dynamics, validated through human labeling and confusion matrices.",
    ],
    tech: ["Python", "VADER", "REST APIs", "NLP", "Data Visualization"],
  },
  {
    id: 6,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Dongbin Lee)",
    duration: "Fall 2025",
    type: "research",
    bullets: [
      "Developed an AI-driven perception and control stack for the F1TENTH Autonomous Racing Car.",
      "Used Jetson Orin Nano and ROS 2 with computer vision and sensor fusion for real-time navigation.",
      "Implemented cross-architecture ARM64 Docker workflows for embedded GPU deployment.",
    ],
    tech: ["ROS 2", "OpenCV", "PyTorch", "Docker", "NVIDIA Jetson", "LiDAR", "ZED SDK"],
  },
];
