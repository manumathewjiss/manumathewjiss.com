export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  /** Visible label next to demo link (e.g. \"App Store\", \"Paper\") */
  demoLabel?: string;
  category: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Stock Crusher",
    description:
      "AI-powered multi-model trading workspace at stockcrusher.com—8+ wired data feeds, deterministic guardrails, and a triple-agent consensus lane (Gemini, Perplexity, OpenAI) for actionable BUY / SELL / HOLD guidance.",
    longDescription:
      "Co-founded Stock Crusher end-to-end: Flask ingestion services, Postgres-backed feature stores, Redis-throttled enrichment, React/Tailwind command center, plus Render/GitHub Actions automation for repeatable deploys.",
    demo: "https://stockcrusher.com",
    demoLabel: "Live site",
    tech: ["Python", "Flask", "React", "Tailwind CSS", "OpenAI", "Gemini", "Perplexity"],
    category: "GenAI / Full-Stack",
    highlights: [
      "8+ real-time feeds (Reddit, Finnhub, NewsAPI, X/Twitter)",
      "Triple AI quorum with configurable weights plus bespoke momentum composites",
      "Deterministic alerting + journaling for reproducible experimentation",
      "Production deployment stack on Render with CI previews",
    ],
  },
  {
    id: 2,
    title: "MealMuse",
    description:
      "Meal Muse Recipes ships on Apple’s App Store with SwiftUI on-device UX, Fastify API mesh, Postgres persistence, multimodal GPT prompts, TTL caching (~80–90% fewer redundant calls).",
    longDescription:
      "Co-created the consumer experience (guided steps, calorie heuristics, ingredient parsing) alongside hardened auth (SHA-256 session tokens), per-user quotas, Crashlytics-friendly logging, and TestFlight/Test Studio loops for rapid iteration.",
    demo: "https://apps.apple.com/us/app/meal-muse-recipes/id6757258154",
    demoLabel: "App Store",
    tech: ["Swift", "SwiftUI", "Node.js", "TypeScript", "Fastify", "PostgreSQL", "OpenAI"],
    category: "AI / iOS",
    highlights: [
      "App Store distribution with entitlement-safe keychain flows",
      "Multimodal prompts (typed, spoken, plated photo) guarded by TTL caches",
      "Fastify pipelines with rate limiting & structured logging hooks",
      "Privacy disclosures + iterative App Store submissions",
    ],
  },
  {
    id: 3,
    title: "LIMFADD: LLM-Enabled Instagram Multi-Class Fake Account Detection Spring 2024",
    description:
      "LLM-derived Instagram corpora enabling four-way fake-account taxonomy (real, spam, scam, bot) at 97% DNN accuracy. Ground-truthed ingestion + XAI stack presented at IEEE ISTAS 2025 (TechRxiv preprint).",
    longDescription:
      "Architected crawler hygiene, multimodal augmentation, and expert adjudication pipelines before exporting balanced splits for TensorFlow/Keras DNN stacks. Wrapped LIME + SHAP overlays for recruiter-friendly interpretability vignettes aligned with ISTAS reviewer feedback.",
    tech: ["Python", "TensorFlow", "Keras", "LIME", "XAI", "Jupyter"],
    github: "https://github.com/manumathewjiss",
    demo:
      "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174613142.27190162/v1",
    demoLabel: "TechRxiv",
    category: "ML Research",
    highlights: [
      "97% hold-out accuracy separating bot/scam/spam/real personas",
      "LLM-guided expansion to ≥1.6K labeled handles with provenance manifests",
      "Explainable overlays (LIME) packaged for ISTAS reproducibility appendix",
      "Dataset + model cards lodged on TechRxiv for open scrutiny",
    ],
  },
  {
    id: 4,
    title: "A Three Phase Pipeline for Sentiment, Toxicity, and Account Authenticity on Social Media Comments",
    description:
      "Three-phase supervised stack covering comment sentiment, toxicity, and authenticity under Dr. Tapadhir Das. Couples classical gradient boosting + LIME for high-fidelity risk surfaces (96.9% headline accuracy); manuscript under IEEE SMC 2026 review.",
    longDescription:
      "Bridged multilingual embeddings, engineered lexicons, and XGBoost ensembles with calibrated decision thresholds. Produced account-level coherence scoring that fuses conversational stance with longitudinal bot/scam probabilities for investigator-ready dossiers.",
    demo: "https://www.ieeesmc2026.org",
    demoLabel: "IEEE SMC 2026",
    tech: ["Python", "XGBoost", "LIME", "PyTorch", "HuggingFace", "Transformers"],
    category: "NLP / ML",
    highlights: [
      "96.9% calibrated accuracy layering sentiment × toxicity × authenticity heads",
      "XGBoost + LIME stories for stakeholder-grade audit trails",
      "End-to-end fusion linking comment moods to account archetypes (bot/spam/scam/real)",
      "Full manuscript currently under SMC 2026 peer review cycle",
    ],
  },
  {
    id: 5,
    title: "MoodMirror",
    description:
      "AIMoodDiary (MoodMirror) — GPT-assisted journaling, fine-tuned RoBERTa sentiment lanes, weekly insight digests deployed for Dr. Gupta’s lab.",
    longDescription:
      "Public deployment at aimooddiary.com couples Next.js UI layers, FastAPI microservices, and PostgreSQL warehousing with privacy-conscious auth, moderated prompts, and export flows suitable for stakeholder demos.",
    demo: "https://www.aimooddiary.com",
    demoLabel: "Live app",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "RoBERTa", "GPT-4o-mini", "Python"],
    category: "AI / Full-Stack",
    highlights: [
      "74.64% accuracy on 3-class emotion classification",
      "Fine-tuned RoBERTa on GoEmotions dataset (54K samples)",
      "GPT-4o-mini diary generation",
      "Interactive mood analytics dashboard",
    ],
  },
  {
    id: 6,
    title: "Weather Data Engineering Pipeline",
    description:
      "End-to-end multi-database weather analytics pipeline using MongoDB, ClickHouse, and Redis with incremental ETL, metadata lineage tracking, and real-time dashboard.",
    longDescription:
      "Built a production-style data pipeline: API → MongoDB (data lake) → ClickHouse (warehouse) → Redis (cache) → Express.js dashboard. Achieves sub-second load times via Redis caching.",
    tech: ["Node.js", "MongoDB", "ClickHouse", "Redis", "Chart.js", "Python", "Docker"],
    category: "Data Engineering",
    highlights: [
      "4+ database systems in one pipeline",
      "365+ days of weather data processed",
      "Sub-second dashboard via Redis caching",
      "Incremental ETL with metadata lineage",
    ],
  },
  {
    id: 7,
    title: "F1TENTH Autonomous Racing Car",
    description:
      "AI-driven perception and control stack for autonomous racing using NVIDIA Jetson Orin Nano and ROS 2, with computer vision and sensor fusion for real-time navigation.",
    longDescription:
      "Graduate research project under Dr. Dongbin Lee. Built complete ROS 2 Humble stack with Docker, implemented lane detection, obstacle avoidance, and object tracking with ZED stereo camera.",
    tech: ["ROS 2", "Python", "PyTorch", "OpenCV", "Docker", "NVIDIA Jetson", "LiDAR"],
    category: "Robotics / Embedded AI",
    highlights: [
      "NVIDIA Jetson Orin Nano + ROS 2 Humble",
      "ZED 2i stereo camera integration",
      "Cross-architecture ARM64 Docker builds",
      "Real-time sensor fusion (LiDAR + Vision)",
    ],
  },
  {
    id: 8,
    title: "Crop Monitoring & Maturity Detection",
    description:
      "Deep learning-based crop maturity detection system using a custom CNN model and drone imagery, achieving 86%+ accuracy in classifying plantation crop images.",
    longDescription:
      "Developed a deep learning crop maturity detection system using a custom CNN model that achieved over 86% accuracy in classifying plantation crop images captured by drones.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV", "Drone Imaging"],
    category: "Computer Vision",
    highlights: [
      "86%+ accuracy on plantation crop images",
      "Custom CNN on drone-captured imagery",
      "Real-time classification for harvest planning",
      "Fall 2023 project",
    ],
  },
  {
    id: 9,
    title: "On-Tree Areca Nut Fruit Maturity Detection",
    description:
      "YOLOv5-based deep learning model integrated with DJI Mini SE drones to detect and classify areca nut maturity in complex backgrounds, optimizing harvest timing.",
    longDescription:
      "Developed and deployed a YOLOv5 model on DJI Mini SE drones to detect areca nut fruit maturity in real-world, complex backgrounds. Improved yield estimation and harvest decision-making.",
    tech: ["Python", "YOLOv5", "DJI Mini SE", "OpenCV", "Deep Learning"],
    category: "Computer Vision",
    highlights: [
      "YOLOv5 deployed on DJI Mini SE drones",
      "Maturity classification in complex backgrounds",
      "Optimized harvest timing and yield estimation",
      "Spring 2022 project",
    ],
  },
  {
    id: 10,
    title: "Pest Detection Using SVM",
    description:
      "SVM-based pest detection system that preprocesses crop images and classifies infected vs. healthy tea leaves with high accuracy, enabling early pest identification.",
    longDescription:
      "Built an SVM-based pest detection system that preprocesses crop images and classifies infected vs. healthy tea leaves, enabling early pest identification for improved agricultural decision-making.",
    tech: ["Python", "SVM", "Scikit-learn", "OpenCV", "Image Processing"],
    category: "Computer Vision",
    highlights: [
      "SVM classifier for tea leaf pest detection",
      "Image preprocessing pipeline",
      "Infected vs. healthy leaf classification",
      "Fall 2022 project",
    ],
  },
];
