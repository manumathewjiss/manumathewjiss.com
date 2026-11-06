export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: "startup" | "research" | "teaching" | "internship";
  bullets: string[];
  tech?: string[];
  /** Primary URL (live app, dashboard, publication, conference, etc.) */
  link?: string;
  linkLabel?: string;
  /** Source code repository */
  github?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
}


export const experiences: Experience[] = [
  {
    id: 12,
    role: "Co-Founder & Software Engineer",
    company: "WhatToBuy (AI Shopping Concierge)",
    duration: "March 2026 – Present",
    type: "startup",
    link: "https://whattobuy.app",
    linkLabel: "whattobuy.app",
    bullets: [
      "Co-founded WhatToBuy (whattobuy.app), a live shopping concierge that turns a natural-language scenario into one purchase-ready cart with prices, ratings, stores, and buy links.",
      "Shipped Fast and Guided modes: Claude Haiku extracts requirements, Claude Sonnet runs follow-up questions, and products come from Google Shopping, Amazon, and eBay.",
      "Built product filtering, alternatives, saved carts, affiliate links, and Supabase accounts; the Next.js app runs on Vercel and the FastAPI service on Railway.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Claude", "Supabase", "PostgreSQL", "Vercel", "Railway"],
  },
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
      "Combined Gemini, Perplexity, and OpenAI analysis with consensus recommendations, confidence scores, and momentum tracking.",
      "Built the Flask API and React dashboard with Vite and Tailwind CSS; deployed the web service on Render.",
    ],
    tech: ["Python", "Flask", "React", "Vite", "Tailwind CSS", "Gemini", "Perplexity", "OpenAI", "Reddit API", "Finnhub", "Render"],
  },
  {
    id: 2,
    role: "Co-Founder & Software Engineer",
    company: "MealMuse (AI-Powered iOS Startup, live on App Store)",
    duration: "Fall 2025 – Present",
    type: "startup",
    link: "https://apps.apple.com/us/app/meal-muse-recipes/id6757258154",
    linkLabel: "App Store",
    bullets: [
      "Launched Meal Muse Recipes on the App Store: SwiftUI client with Fastify + PostgreSQL backend for secure, scalable recipe workflows.",
      "Built text and voice recipe requests with spoken cooking steps, using SwiftUI, Apple Speech, OpenAI, and a TypeScript API.",
      "Added guided recipe steps, account sign-in, profile onboarding, and dietary preferences backed by PostgreSQL.",
    ],
    tech: ["Swift", "SwiftUI", "Apple Speech", "Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "OpenAI", "Fly.io"],
  },
  {
    id: 13,
    role: "Machine Learning Engineering Intern",
    company: "Equalizer (Dubai, UAE · Remote)",
    duration: "May 2023 – July 2024",
    type: "internship",
    bullets: [
      "Worked on Equalizer, mining-infrastructure software that monitors machines, detects failures, and redistributes hash power so one outage does not wipe out a customer’s capacity.",
      "Developed and deployed Python telemetry analytics pipelines with FastAPI, PostgreSQL, and Docker for distributed-infrastructure visibility.",
      "Applied anomaly detection and time-series forecasting to machine health and hash-rate signals.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Anomaly Detection", "Time-Series"],
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
    github: "https://github.com/manumathewjiss/moodmirror-student-wellness-tracker",
    bullets: [
      "Built AIMoodDiary, a live reflective-journaling app with emotion-aware writing support and a mood analytics dashboard.",
      "Used RoBERTa trained on GoEmotions alongside LLM-assisted diary generation and longitudinal emotion views.",
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
    github: "https://github.com/manumathewjiss/LIMFADD",
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
    duration: "December 2024 – May 2025",
    type: "research",
    link: "https://www.researchgate.net/publication/410616302_A_Three-Phase_Pipeline_for_Sentiment_Toxicity_and_Account_Authenticity_on_Social_Media_Comments",
    linkLabel: "Paper on ResearchGate",
    github: "https://github.com/manumathewjiss/nlp-social-media-harmful-content-detection",
    bullets: [
      "As a graduate research assistant under Dr. Tapadhir Das, developed a three-phase AI pipeline for sentiment, toxicity, and account authenticity using XGBoost and LIME, achieving 96.9% accuracy.",
      "Designed an end-to-end system linking comment sentiment with account-level risk profiling for bot, scam, spam, and real account detection; paper published at IEEE SMC 2026.",
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
    github: "https://github.com/manumathewjiss/Research-on-Software-Updates",
    secondaryLink: "https://github.com/SE4CPS/Research-on-Software-Updates",
    secondaryLinkLabel: "Earlier research repository",
    bullets: [
      "Studied Reddit software-update discussions across three connected papers on discussion purpose, diagnostic evidence, and sentiment dynamics.",
      "Used Python, VADER, TextBlob, RoBERTa, SentiStrength-SE, and scikit-learn to compare how sentiment changes with speaker, text, and discussion stage.",
      "Built a Plotly dashboard showing author and community sentiment trajectories, with reviewed labels supporting the research analysis.",
    ],
    tech: ["Python", "VADER", "TextBlob", "RoBERTa", "scikit-learn", "Plotly", "Reddit API"],
  },
  {
    id: 6,
    role: "Graduate Research Assistant",
    company: "University of the Pacific (Advisor: Dr. Dongbin Lee)",
    duration: "August 2025 – Present",
    type: "research",
    link: "https://openreview.net/forum?id=Uj7BvxrESp&noteId=JxcVGhoZYI",
    linkLabel: "OpenReview submission",
    secondaryLink: "https://f1tenth.org/",
    secondaryLinkLabel: "F1TENTH platform docs",
    bullets: [
      "Integrated LiDAR, ZED stereo, CUDA-aware Docker stacks, ROS 2 Humble controls, waypoint tracking, and regression ROS bags atop the NVIDIA Jetson Orin Nano F1TENTH stack used in Dr. Lee’s autonomy lab sequences.",
      "Extended the program with SignSight, a vision-language fusion template matcher that grounds CLIP-style semantics with handcrafted sign primitives for credible onboard detections during high-speed racing loops.",
      "CVPR 2026 manuscript under peer review via OpenReview while iterating hardware bring-up notebooks, Pure Pursuit baselines, and obstacle recovery behaviors for classroom demonstrations.",
    ],
    tech: ["ROS 2", "OpenCV", "PyTorch", "Docker", "NVIDIA Jetson", "CLIP", "LiDAR", "ZED SDK"],
  },
];
