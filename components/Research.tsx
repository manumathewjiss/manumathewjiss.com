import { research } from "../data/research";

const typeConfig = {
  conference: {
    label: "Conference Paper",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  research: {
    label: "Research Project",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  ongoing: {
    label: "Ongoing Research",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
};

export default function Research() {
  return (
    <section id="research" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Research</h2>
        <p className="section-subheading">
          Published and ongoing research across NLP, fake account detection, sentiment analysis, and autonomous systems.
        </p>

        {/* Featured Publication */}
        <div className="mb-6 relative overflow-hidden glass-card border-accent/30 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl" />
          <div className="pl-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded border bg-accent/10 text-accent border-accent/20 font-semibold">
                  Conference Paper
                </span>
                <span className="text-xs text-text-muted">IEEE ISTAS25</span>
              </div>
              <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-lg flex-shrink-0">
                Fall 2025
              </span>
            </div>

            <h3 className="text-white font-bold text-base mb-2">
              LIMFADD: LLM-Enabled Instagram Multi-Class Fake Account Detection Dataset
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              Introduced a novel multi-class Instagram fake account detection dataset using
              LLM-based augmentation. Classifies accounts into real, spam, scam, and bot
              categories with{" "}
              <span className="text-accent font-medium">97% DNN accuracy</span>. Integrated
              LIME-based Explainable AI for model transparency. Outperforms existing Kaggle
              benchmarks.
            </p>

            <p className="text-text-muted text-xs mb-3">
              Santa Clara University, CA | International Symposium on Technology and Society
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://techrxiv.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-4 py-2"
              >
                View on techRxiv
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="flex flex-wrap gap-1.5">
                {["Fake Account Detection", "LLM Augmentation", "XAI / LIME", "Deep Learning"].map((tag) => (
                  <span key={tag} className="tag-chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Research */}
        <div className="grid md:grid-cols-3 gap-4">
          {research.slice(1).map((item) => {
            const config = typeConfig[item.type];
            return (
              <div key={item.id} className="glass-card flex flex-col group">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded border ${config.color}`}>
                    {config.label}
                  </span>
                  <span className="text-xs text-text-muted flex-shrink-0">{item.date}</span>
                </div>

                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-text-secondary text-xs leading-relaxed mb-3 flex-grow">
                  {item.description}
                </p>

                {item.advisor && (
                  <p className="text-text-muted text-xs mb-3 flex items-center gap-1.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {item.advisor}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
