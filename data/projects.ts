export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Stock Crusher",
    description:
      "AI-powered multi-model trading platform aggregating real-time data from 8+ APIs with a triple AI consensus engine (Gemini, Perplexity, OpenAI) for BUY/SELL/HOLD signals.",
    longDescription:
      "Co-founded and built a production-ready GenAI startup. Integrates Reddit, NewsAPI, Twitter/X, Finnhub, and Alpha Vantage with a weighted consensus algorithm and custom momentum scoring formula.",
    tech: ["Python", "Flask", "React", "Tailwind CSS", "OpenAI", "Gemini", "Perplexity"],
    category: "GenAI / Full-Stack",
    highlights: [
      "8+ real-time market APIs integrated",
      "Triple AI consensus: Gemini 33%, Perplexity 37%, OpenAI 30%",
      "Custom momentum scoring algorithm",
      "Production deployment on Render.com",
    ],
  },
  {
    id: 2,
    title: "MealMuse",
    description:
      "AI-powered iOS app (live on App Store) generating personalized recipes via text, voice, and image inputs using GPT-4o-mini with 80–90% LLM cost reduction through caching.",
    longDescription:
      "Co-founded and launched a production iOS app using SwiftUI and Node.js/TypeScript backend. Built scalable OpenAI infrastructure with TTL-based caching and secure authentication.",
    tech: ["Swift", "SwiftUI", "Node.js", "TypeScript", "Fastify", "PostgreSQL", "OpenAI"],
    category: "AI / iOS",
    highlights: [
      "Live on the App Store",
      "80–90% reduction in LLM API calls via caching",
      "Text, voice, and image input support",
      "SHA-256 token auth, rate limiting",
    ],
  },
  {
    id: 3,
    title: "LIMFADD",
    description:
      "LLM-augmented multi-class Instagram fake account detection system classifying real, spam, scam, and bot accounts with 97% accuracy. Published at IEEE ISTAS25.",
    longDescription:
      "Developed LIMFADD dataset and deep learning model using TensorFlow/Keras DNN. Used ChatGPT for data augmentation to 1,600 samples. Integrated LIME-based XAI for explainability.",
    tech: ["Python", "TensorFlow", "Keras", "LIME", "XAI", "Jupyter"],
    github: "https://github.com/manumathewjiss",
    category: "ML Research",
    highlights: [
      "97% accuracy across 4 classes",
      "LLM-based data augmentation to 1,600 samples",
      "IEEE ISTAS25 conference paper (techRxiv)",
      "LIME Explainable AI integration",
    ],
  },
  {
    id: 4,
    title: "Real-Time NLP Sentiment & Toxicity System",
    description:
      "Three-phase NLP pipeline analyzing 18K+ social media comments using transformer models (RoBERTa, BERTweet, BART) for sentiment, toxicity, and authenticity detection.",
    longDescription:
      "Achieved 90.23% accuracy with RoBERTa. Implemented zero-shot toxicity classification into 7 categories using BART Large MNLI. Built data augmentation pipeline for dataset balancing.",
    tech: ["Python", "PyTorch", "RoBERTa", "BERTweet", "BART", "HuggingFace", "Scikit-learn"],
    category: "NLP / ML",
    highlights: [
      "90.23% sentiment accuracy on 18,214 YouTube comments",
      "Zero-shot toxicity into 7 categories (no fine-tuning)",
      "4 model-dataset combinations evaluated",
      "Macro F1-score: 0.886",
    ],
  },
  {
    id: 5,
    title: "MoodMirror",
    description:
      "AI-powered student emotional wellness tracking system using Next.js, FastAPI, and PostgreSQL with GPT-4o-mini diary generation and fine-tuned RoBERTa emotion classification.",
    longDescription:
      "Developed for UoP under Dr. Pramod Gupta. Detects mood trends, behavioral patterns, and emotional triggers with interactive analytics and personalized weekly insights.",
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
