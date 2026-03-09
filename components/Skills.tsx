const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "HuggingFace",
      "LLMs", "RAG", "NLP", "RoBERTa", "BERTweet", "BART",
      "YOLOv5", "ResNet-50", "SHAP", "LIME", "OpenAI API",
      "Gemini API", "Zero-Shot Learning", "Sentiment Analysis",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "Python", "TypeScript", "JavaScript", "C++", "Swift",
      "SQL", "MATLAB", "Bash/Shell", "HTML", "CSS",
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      "FastAPI", "Flask", "Node.js", "Express.js", "Next.js",
      "Fastify", "REST APIs", "Streamlit", "AWS Lambda",
    ],
  },
  {
    title: "Databases & Data Engineering",
    skills: [
      "MongoDB", "PostgreSQL", "Redis", "ClickHouse",
      "ETL Pipelines", "Data Warehousing", "Prisma ORM",
      "Incremental ETL", "Metadata Lineage",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker", "Git/GitHub", "Linux (Ubuntu)", "Vercel",
      "Render.com", "CUDA", "VS Code", "Jupyter Notebook",
    ],
  },
  {
    title: "Robotics & Embedded",
    skills: [
      "ROS 2 Humble", "NVIDIA Jetson Orin Nano", "LiDAR",
      "ZED Stereo Camera", "Sensor Fusion", "Raspberry Pi",
      "Arduino", "Embedded Linux", "JetPack SDK",
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly",
      "Chart.js", "Recharts", "Power BI", "Tableau",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Network Security", "Splunk SIEM", "Ethical Hacking",
      "Penetration Testing", "Cryptography", "SOC Operations",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Skills & Technologies</h2>
        <p className="section-subheading">
          A broad and deep technical toolkit across AI, full-stack development, robotics, and data engineering.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card flex flex-col gap-3">
              <h3 className="text-white font-semibold text-sm border-b border-border-subtle pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-white/5 hover:bg-accent/10 hover:text-accent border border-border-subtle hover:border-accent/30 rounded text-xs text-text-secondary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* APIs section */}
        <div className="mt-4 glass-card">
          <h3 className="text-white font-semibold text-sm mb-3 border-b border-border-subtle pb-2">
            APIs & Data Sources
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Reddit API (PRAW)", "Twitter/X API", "YouTube Data API",
              "Yahoo Finance", "NewsAPI", "Finnhub", "Alpha Vantage",
              "GNews", "OpenWeather API", "Google Cloud APIs",
            ].map((api) => (
              <span
                key={api}
                className="px-3 py-1 bg-accent/5 border border-accent/15 rounded-full text-xs text-accent/80 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
              >
                {api}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
