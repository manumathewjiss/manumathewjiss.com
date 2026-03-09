export interface Research {
  id: number;
  title: string;
  description: string;
  conference?: string;
  venue?: string;
  date: string;
  link?: string;
  type: "conference" | "research" | "ongoing";
  advisor?: string;
  tags: string[];
}

export const research: Research[] = [
  {
    id: 1,
    title: "LIMFADD: LLM-Enabled Instagram Multi-Class Fake Account Detection Dataset",
    description:
      "Introduced a novel multi-class Instagram fake account detection dataset using LLM-based data augmentation. Classifies accounts into real, spam, scam, and bot categories with 97% DNN accuracy. Integrated LIME-based Explainable AI for model transparency.",
    conference: "IEEE ISTAS25",
    venue: "International Symposium on Technology and Society, Santa Clara University, CA",
    date: "Fall 2025",
    link: "https://techrxiv.org",
    type: "conference",
    tags: ["Fake Account Detection", "LLM Augmentation", "XAI", "Deep Learning", "Instagram"],
  },
  {
    id: 2,
    title: "Sentiment Trajectory Analysis in Software Update Reddit Discussions",
    description:
      "Conducted large-scale sentiment trajectory research on 324+ Reddit discussions in the ReleaseTrain.io ecosystem. Built a Python pipeline using VADER to compare author vs. community sentiment dynamics over time, validated through human labeling and confusion matrices.",
    date: "Summer 2025 – Present",
    type: "research",
    advisor: "Dr. Solomon Berhe, University of the Pacific",
    tags: ["NLP", "VADER", "Sentiment Analysis", "Reddit API", "Data Visualization"],
  },
  {
    id: 3,
    title: "Real-Time Social Media Sentiment & Toxicity Analysis",
    description:
      "Three-phase NLP research pipeline achieving 90.23% sentiment accuracy on 18,214 YouTube comments. Implemented zero-shot toxicity classification into 7 categories using BART Large MNLI without fine-tuning. Supervised by Professor Tapadhir Das.",
    date: "Fall 2025 – Present",
    type: "ongoing",
    advisor: "Prof. Tapadhir Das, University of the Pacific",
    tags: ["RoBERTa", "BERTweet", "BART", "Zero-Shot Learning", "NLP", "Toxicity Detection"],
  },
  {
    id: 4,
    title: "AI-Driven Perception Stack for F1TENTH Autonomous Racing",
    description:
      "Developing an AI perception and control stack for F1TENTH autonomous racing using NVIDIA Jetson Orin Nano and ROS 2. Implements computer vision and sensor fusion for real-time lane detection, obstacle avoidance, and object tracking on embedded GPU platforms.",
    date: "Fall 2025",
    type: "research",
    advisor: "Dr. Dongbin Lee, University of the Pacific",
    tags: ["ROS 2", "Autonomous Systems", "Computer Vision", "Sensor Fusion", "Embedded AI"],
  },
];
