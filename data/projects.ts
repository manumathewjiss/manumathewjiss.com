export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  /** Visible label next to demo link */
  demoLabel?: string;
  category: string;
  highlights?: string[];
  featured?: boolean;
}

/** Selected Projects: B2B lead scoring, BookRAG retrieval, weather ETL, agritech CV. */
export const projects: Project[] = [
  {
    id: 6, title: "BookRAG — Private PDF Question Answering", category: "RAG / NLP", featured: true,
    description: "A private PDF library that finds relevant passages, answers questions, and links citations to original pages.",
    longDescription: "BookRAG grew from page-aware PDF retrieval research into a cloud app with accounts, private uploads, background processing, answers with source passages, and an in-browser PDF viewer. The research benchmarks and cloud product are separate parts of the project.",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Supabase", "Voyage AI", "OpenAI", "PDF.js", "Render", "Vercel"],
    demo: "https://bookrag.vercel.app/", demoLabel: "Explore BookRAG", github: "https://github.com/manumathewjiss/BookRAG",
    highlights: ["Private accounts and PDF library", "Answers with passage and page citations", "Background PDF processing", "Research comparing search and answer methods"],
  },
  {
    id: 7, title: "Sanskrity — Sanskrit Scripture Assistant", category: "RAG / NLP", featured: true,
    description: "A locally run scripture assistant with English and Devanagari questions and verse-level citations.",
    longDescription: "Sanskrity searches paired Sanskrit and English verses from the Ramayana and Mahabharata, then generates an explanation citing the book, chapter, and verse. It also accepts PDF, DOCX, and text documents as user context.",
    tech: ["Python", "FastAPI", "Qwen", "LoRA", "PyTorch", "FAISS", "multilingual-e5-large", "LangChain", "Whisper", "MongoDB Atlas", "JavaScript"],
    github: "https://github.com/manumathewjiss/sanskriti-ai",
    highlights: ["Sanskrit and English verse search", "Local Qwen model adapted with LoRA", "FAISS search with multilingual embeddings", "Document upload, web chat, and speech input"],
  },
  {
    id: 8, title: "Sprout-ly — Smart Plant Monitoring", category: "IoT / Full-Stack", featured: true,
    description: "A connected plant-monitoring system combining soil sensors, local weather data, a cloud API, and a dashboard.",
    longDescription: "Raspberry Pi software reads soil-moisture sensors through an ADS1115 converter, stores readings locally, and adds weather context. A FastAPI service stores data in PostgreSQL, while a React dashboard shows plant status and sensor history.",
    tech: ["Python", "Raspberry Pi", "ADS1115", "SQLite", "Open-Meteo", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"],
    github: "https://github.com/SE4CPS/PlantWaterSystem",
    highlights: ["Raspberry Pi sensor readings", "Weather-enriched plant readings", "FastAPI and PostgreSQL service", "React dashboard for plant history"],
  },
  {
    id: 5, title: "B2B Sales Intelligence and Lead Prioritization", category: "Machine Learning", featured: true,
    description: "Company research and lead scoring that combines saved business profiles, meaning-based matching, practical filters, and Apollo enrichment.",
    longDescription: "The project evaluates companies against manufacturing and software/security customer profiles. It combines local text embeddings with checks for industry, location, size, and technology, then produces ranked results and short explanations. Separate Apollo tools enrich named companies by domain and reuse saved responses.",
    tech: ["Python", "sentence-transformers", "BGE", "scikit-learn", "Apollo API", "MCP", "JSON", "Flan-T5"],
    highlights: ["Two customer-profile workflows", "50 saved company profiles and scoring comparisons", "Apollo company enrichment by domain", "Local tool access to saved company data"],
  },
  {
    id: 9, title: "WhatToBuy — AI Shopping Concierge", category: "AI / Full-Stack",
    description: "Turns a real-life situation into a practical shopping cart with prices, ratings, stores, and buying links.",
    longDescription: "Fast mode turns an open-ended request into product categories. Guided mode asks follow-up questions. The product searches several catalogs, filters poor matches, offers alternatives, and supports accounts and saved carts.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Claude Haiku", "Claude Sonnet", "Supabase", "PostgreSQL", "Vercel", "Railway"],
    demo: "https://whattobuy.app", demoLabel: "Visit WhatToBuy",
    highlights: ["Fast guest flow and Guided conversations", "Google Shopping, Amazon, and eBay sources", "Product alternatives and saved carts", "Accounts and affiliate buying links"],
  },
  {
    id: 10, title: "Stock Crusher — AI Market Analysis", category: "AI / Full-Stack",
    description: "A market dashboard that combines Reddit, news, and financial data with three AI models and momentum tracking.",
    longDescription: "Stock Crusher collects market, news, and social data, then combines analysis from Gemini, Perplexity, and OpenAI. A Flask service powers the React dashboard, analysis history, and momentum rankings.",
    tech: ["Python", "Flask", "React", "Vite", "Tailwind CSS", "Gemini", "Perplexity", "OpenAI", "Reddit API", "Finnhub", "Render"],
    demo: "https://stockcrusher.com", demoLabel: "Visit Stock Crusher",
    highlights: ["Three-model consensus analysis", "Reddit, news, social, and market data", "Analysis history and momentum rankings", "Flask API and React dashboard"],
  },
  {
    id: 11, title: "MealMuse — AI Recipe Companion", category: "AI / iOS",
    description: "An iOS recipe app that turns a request or ingredients into guided recipes with voice-friendly cooking steps.",
    longDescription: "MealMuse uses a SwiftUI app and TypeScript API to create structured recipes. It supports text and voice input, spoken steps, sign-in, onboarding, and cooking preferences.",
    tech: ["Swift", "SwiftUI", "Apple Speech", "Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "OpenAI", "Fly.io"],
    demo: "https://apps.apple.com/us/app/meal-muse-recipes/id6757258154", demoLabel: "View on App Store",
    highlights: ["Native iOS cooking flow", "Voice input and spoken steps", "Profiles and dietary preferences", "TypeScript API and PostgreSQL"],
  },
  {
    id: 12, title: "AIMoodDiary — Reflective Journaling", category: "AI / Full-Stack",
    description: "A student wellness app combining emotion classification, AI-assisted diary writing, and mood trends.",
    longDescription: "AIMoodDiary uses a RoBERTa emotion model and a language model to support reflective writing. A dashboard helps users explore mood patterns over time. It is a non-clinical wellness tool.",
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "RoBERTa", "GoEmotions", "OpenAI", "Python"],
    demo: "https://www.aimooddiary.com", demoLabel: "Visit AIMoodDiary", github: "https://github.com/manumathewjiss/moodmirror-student-wellness-tracker",
    highlights: ["Emotion-aware reflective journaling", "RoBERTa model trained on GoEmotions", "Mood analytics dashboard", "Live web application"],
  },
  {
    id: 13, title: "F1TENTH and SignSight — Autonomous Perception", category: "Robotics / Embedded AI",
    description: "Autonomous racing work on NVIDIA Jetson and ROS 2, with vision-language traffic-sign research.",
    longDescription: "The F1TENTH work combines embedded deployment, LiDAR and stereo-camera inputs, and ROS 2 controls. SignSight pairs visual templates with CLIP-based semantic checks for traffic-sign recognition research.",
    tech: ["ROS 2", "NVIDIA Jetson", "Docker", "CUDA", "ZED SDK", "LiDAR", "PyTorch", "CLIP", "OpenCV"],
    highlights: ["Jetson and ROS 2 racing stack", "LiDAR and ZED stereo-camera integration", "GPU-aware Docker workflows", "CLIP and visual-template sign research"],
  },
  {
    id: 1, title: "Weather Data Engineering Pipeline", category: "Data Engineering",
    description: "Moves Open-Meteo weather records through MongoDB, ClickHouse, and Redis into an interactive dashboard.",
    longDescription: "Node.js scripts collect historical weather data, keep raw records in MongoDB, prepare analytical tables in ClickHouse, and cache dashboard results in Redis. An Express API serves Chart.js visualizations.",
    tech: ["Node.js", "JavaScript", "Open-Meteo", "MongoDB Atlas", "ClickHouse", "Redis", "Express", "Chart.js"],
    highlights: ["Historical Open-Meteo ingestion", "MongoDB storage and ClickHouse analytics", "Redis caching", "Express API and Chart.js dashboard"],
    github: "https://github.com/manumathewjiss/Weather-Data-App",
  },
  {
    id: 2, title: "Crop Monitoring & Maturity Detection", category: "Computer Vision",
    description: "Used drone imagery and a custom CNN to assess crop maturity, with more than 86% hold-out accuracy in the documented study.",
    longDescription: "A computer-vision study of plantation imagery, including image preparation, model training, and evaluation of harvest-readiness predictions.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV", "Drone Imagery"],
    highlights: ["Drone-image preparation", "Custom CNN classification", "Evaluation of harvest-readiness predictions"],
  },
  {
    id: 3, title: "On-Tree Areca Nut Fruit Maturity Detection", category: "Computer Vision",
    description: "Used DJI Mini SE imagery and YOLOv5 to study fruit maturity under difficult canopy conditions.",
    longDescription: "A drone-based detection study focused on labeled areca fruit and the challenges of overlap, lighting, and small objects in tree canopies.",
    tech: ["Python", "YOLOv5", "DJI Mini SE", "OpenCV"],
    highlights: ["Drone image collection", "YOLOv5 object detection", "Analysis of canopy and lighting challenges"],
  },
  {
    id: 4, title: "Pest Detection Using SVM", category: "Computer Vision",
    description: "Used image features and a support vector machine to distinguish healthy from infected tea leaves.",
    longDescription: "A lightweight image-classification study using leaf image preparation, color and texture features, and scikit-learn models.",
    tech: ["Python", "scikit-learn", "SVM", "OpenCV", "Image Processing"],
    highlights: ["Leaf image preparation", "Color and texture features", "Support vector machine classification"],
  },
];
