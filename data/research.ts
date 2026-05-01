export interface Research {
  id: number;
  title: string;
  description: string;
  conference?: string;
  venue?: string;
  date: string;
  link?: string;
  linkLabel?: string;
  github?: string;
  type: "conference" | "research" | "ongoing";
  advisor?: string;
  tags: string[];
}

export const research: Research[] = [
  {
    id: 1,
    title: "LIMFADD: LLM-Enabled Instagram Multi-Class Fake Account Detection Spring 2024",
    description:
      "Developed LIMFADD, an LLM-generated dataset for Instagram fake account detection enabling classification into real, spam, scam, and bot categories with 97% accuracy. Designed the data-collection and XAI-based validation pipeline; paper published at IEEE ISTAS 2025 with TechRxiv preprint.",
    conference: "IEEE ISTAS25",
    venue: "International Symposium on Technology and Society, Santa Clara University, CA",
    date: "September 2025 – April 2026",
    link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.174613142.27190162/v1",
    linkLabel: "Paper on TechRxiv",
    github: "https://github.com/manumathewjiss/LIMFADD",
    type: "conference",
    advisor: "Dr. Tapadhir Das, University of the Pacific",
    tags: ["Fake Account Detection", "LLM Augmentation", "XAI / LIME", "Deep Learning", "Instagram"],
  },
  {
    id: 2,
    title: "A Three Phase Pipeline for Sentiment, Toxicity, and Account Authenticity on Social Media Comments",
    description:
      "Developed a three-phase AI pipeline combining sentiment analysis, toxicity detection, and account authenticity classification using XGBoost and LIME, achieving 96.9% accuracy. Designed an end-to-end system linking comment sentiment with account-level risk profiling for bot, scam, spam, and real account detection. Paper under review at IEEE SMC 2026.",
    conference: "IEEE SMC 2026 (under review)",
    date: "January 2025 – May 2025",
    type: "ongoing",
    advisor: "Dr. Tapadhir Das, University of the Pacific",
    link: "https://www.ieeesmc2026.org",
    linkLabel: "IEEE SMC 2026 (conference site)",
    github: "https://github.com/manumathewjiss/nlp-social-media-harmful-content-detection",
    tags: ["XGBoost", "LIME", "Sentiment", "Toxicity", "Authenticity", "Social Media"],
  },
  {
    id: 3,
    title: "Sentiment Trajectory Analysis in Software Update Reddit Discussions",
    description:
      "Large-scale trajectory research on 324+ Reddit discussions in the ReleaseTrain.io ecosystem. Built a Python pipeline using VADER, REST cohort APIs, and custom reliability metrics comparing author versus community sentiment, validated via human labeling and confusion matrices.",
    date: "Summer 2025 – Present",
    type: "research",
    advisor: "Dr. Solomon Berhe, University of the Pacific",
    link: "https://beamish-custard-f44097.netlify.app/research-open-text-sentimental/web/",
    linkLabel: "Open live dashboard",
    github: "https://github.com/manumathewjiss/vader-sentiment-dashboard/tree/main/research-open-text-sentimental",
    tags: ["NLP", "VADER", "Sentiment Analysis", "Reddit API", "Data Visualization"],
  },
  {
    id: 4,
    title: "AI-Driven Perception Stack for F1TENTH Autonomous Racing",
    description:
      "Graduate project under Dr. Dongbin Lee building on the upstream F1TENTH autonomy stack with ROS 2 Humble on NVIDIA Jetson Orin Nano: LiDAR + stereo fusion, waypoint tracking, reactive obstacle resets, reproducible ROS bags, and Dockerized workflows aligned with classroom documentation.",
    date: "Fall 2025",
    type: "research",
    advisor: "Dr. Dongbin Lee, University of the Pacific",
    link: "https://f1tenth.org/",
    linkLabel: "F1TENTH platform docs",
    tags: ["ROS 2", "Autonomous Systems", "Computer Vision", "Sensor Fusion", "Embedded AI"],
  },
];
