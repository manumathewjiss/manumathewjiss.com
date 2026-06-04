import { research, type Research } from "../data/research";

const typeConfig = {
  conference: {
    label: "Conference Paper",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  research: {
    label: "Research Project",
    color: "bg-blue-500/10 text-blue-400 border-blue-400/20",
  },
  ongoing: {
    label: "Ongoing Research",
    color: "bg-green-500/10 text-green-400 border-green-400/20",
  },
};

const externalIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const githubIcon = (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function ResearchCard({ item }: { item: Research }) {
  const badge = typeConfig[item.type];
  const hasActions = item.link || item.secondaryLink || item.github;

  return (
    <article className="relative overflow-hidden glass-card border-accent/30 bg-gradient-to-r from-accent/5 to-transparent">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl" />
      <div className="pl-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${badge.color}`}>{badge.label}</span>
            {item.conference && <span className="text-xs text-text-muted">{item.conference}</span>}
          </div>
          <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-lg flex-shrink-0">
            {item.date}
          </span>
        </div>

        <h3 className="text-white font-bold text-base mb-3 leading-snug">{item.title}</h3>

        {hasActions && (
          <div className="mb-4 flex flex-col sm:flex-row flex-wrap gap-2">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-w-[12rem] items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-black shadow-lg shadow-accent/25 hover:brightness-110 transition-all"
              >
                {item.linkLabel ?? "Open link"}
                {externalIcon}
              </a>
            )}
            {item.secondaryLink && (
              <a
                href={item.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-w-[12rem] items-center justify-center gap-2 rounded-lg border border-border-subtle bg-white/5 px-5 py-3 text-sm font-semibold text-text-secondary hover:border-accent/40 hover:text-accent transition-colors"
              >
                {item.secondaryLinkLabel ?? "Additional link"}
                {externalIcon}
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto min-w-[12rem] items-center justify-center gap-2 rounded-lg border border-border-subtle bg-white/5 px-5 py-3 text-sm font-semibold text-text-secondary hover:border-accent/40 hover:text-accent transition-colors"
              >
                {githubIcon}
                GitHub
              </a>
            )}
          </div>
        )}

        <p className="text-text-secondary text-sm leading-relaxed mb-3">{item.description}</p>

        {item.venue && <p className="text-text-muted text-xs mb-2">{item.venue}</p>}

        {item.advisor && (
          <p className="text-text-muted text-xs mb-3 flex items-center gap-1.5 flex-wrap">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{item.advisor}</span>
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-4 mb-3">
          {item.tags.map((tag) => (
            <span key={tag} className="tag-chip text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Research</h2>
        <p className="text-sm font-semibold text-green-400/95 tracking-wide mb-2">Ongoing research</p>
        <p className="section-subheading">
          Featured publication:{" "}
          <span className="text-text-primary">LIMFADD: LLM-Enabled Instagram Multi-Class Fake Account Detection Spring 2024</span>.
          Concurrent tracks include the SMC three-phase sentiment and authenticity pipeline on social comments, Reddit software-update sentiment trajectories with a live dashboard, Jetson ROS 2 perception plus SignSight for F1TENTH, AIMoodDiary, a deployed hybrid emotion-inference journaling platform submitted to ICMLA 2026, and a white paper on explainable LLMs for cardiovascular disease detection. Cards link to papers, live apps, dashboards, conferences, and GitHub.
        </p>

        <div className="flex flex-col gap-6 mt-2">
          {research.map((item) => (
            <ResearchCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
