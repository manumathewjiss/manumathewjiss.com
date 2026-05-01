export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: "startup" | "research" | "teaching";
  bullets: string[];
  tech?: string[];
  /** Primary URL shown on the timeline card (live product, dashboard, paper hub, etc.) */
  link?: string;
  linkLabel?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Co-Founder & Software Engineer",
    company: "Stock Crusher (GenAI Startup)",
    duration: "Summer 2025 – Present",
    type: "startup",
    link: "https://stockcrusher.com",
    linkLabel: "stockcrusher.com",
    bullets: [
      "Built and shipped Stock Crusher, a production multi-agent trading intelligence platform integrating 8+ real-time APIs (Reddit, Finnhub, NewsAPI, X/Twitter).",
      "Implemented weighted triple-AI consensus (Gemini, Perplexity, OpenAI), custom momentum scoring, and deterministic guardrails powering BUY / SELL / HOLD outputs.",
      "Delivered Flask services and a React + Tailwind analytics dashboard deployed on Render for resilient day-to-day use.",
    ],
    tech: ["Python", "Flask", "React", "OpenAI", "Gemini", "Perplexity", "Render.com"],
  },
  {
    id: 2,
    role: "Co-Founder & Software Engineer",
    company: "MealMuse (AI-Powered iOS Startup — Live on App Store)",
    duration: "Fall 2025 – Present",
    type: "startup",
    link: "https://apps.apple.com/us/app/meal-muse-recipes/id6757258154",
    linkLabel: "App Store",
    bullets: [
      "Launched Meal Muse Recipes on the App Store: SwiftUI client with Fastify + PostgreSQL backend for secure, scalable recipe workflows.",
      "Shipped multimodal prompting (text, optional voice/image) against GPT-style models plus TTL caching and quotas, targeting ~80–90% fewer redundant LLM calls.",
      "Productized onboarding, recipe steps, calorie estimates, and privacy-forward analytics hooks suitable for iterative App Store releases.",
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
    link: "https://www.aimooddiary.com",
    linkLabel: "AIMoodDiary",
    bullets: [
      "Shipped AIMoodDiary — a student emotional wellness journaling suite that blends GPT-assisted reflections with interactive mood analytics dashboards.",
      "Fine-tuned a RoBERTa classifier on supervised affect corpora to surface weekly emotion trends alongside estimated confidence bands.",
      "Next.js frontend, FastAPI microservices, and PostgreSQL back-end deliver rapid iteration cycles for stakeholder demos and longitudinal studies.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "RoBERTa", "GPT-4o-mini"],
  },
  {
    id: 10,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Tapadhir Das)",
    duration: "September 2025 – April 2026",
    type: "research",
    link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174613142.27190162/v1",
    linkLabel: "TechRxiv publication",
    bullets: [
      "Developed LIMFADD, an LLM-generated dataset for Instagram fake account detection, enabling classification into real, spam, scam, and bot categories with 97% accuracy.",
      "Designed data collection and XAI-based validation pipeline; paper published at IEEE ISTAS 2025 (preprint on TechRxiv).",
    ],
    tech: ["Python", "TensorFlow", "Instagram APIs", "LIME", "XAI", "LLM-assisted labeling"],
  },
  {
    id: 11,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Tapadhir Das)",
    duration: "January 2025 – May 2025",
    type: "research",
    link: "https://www.ieeesmc2026.org",
    linkLabel: "IEEE SMC 2026 conference",
    bullets: [
      "Developed a three-phase AI pipeline combining sentiment analysis, toxicity detection, and account authenticity classification using XGBoost and LIME, achieving 96.9% accuracy.",
      "Designed an end-to-end system linking comment sentiment with account-level risk profiling for bot, scam, spam, and real account detection; paper under review at IEEE SMC 2026.",
    ],
    tech: ["Python", "XGBoost", "LIME", "NLP", "Social media analytics"],
  },
  {
    id: 5,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Solomon Berhe)",
    duration: "Summer 2025 – Present",
    type: "research",
    link: "https://beamish-custard-f44097.netlify.app/research-open-text-sentimental/web/",
    linkLabel: "Live dashboard",
    bullets: [
      "Modeled longitudinal sentiment on 324+ ReleaseTrain-fed Reddit cohorts spanning minScore/maxScore-balanced slices pulled via official APIs.",
      "Engineered reproducible ingestion + QA scripts (duplicate filtering, lexical checks) before VADER-derived trajectories are visualized in Plotly.",
      "Deployed a public comparative VADER storytelling dashboard highlighting author vs community drift, backed by adjudicated confusion-matrix baselines.",
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
