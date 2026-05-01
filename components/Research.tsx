import { research } from "../data/research";

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

export default function Research() {
  const featured = research[0];

  return (
    <section id="research" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Research</h2>
        <p className="section-subheading">
          Publication (LIMFADD), the SMC-under-review pipeline, and related projects—with direct links on each card (also listed under Experience for advisor Dr.&nbsp;Tapadhir&nbsp;Das).
        </p>

        {/* Featured publication — driven by data/research.ts */}
        <div className="mb-6 relative overflow-hidden glass-card border-accent/30 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl" />
          <div className="pl-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded border bg-accent/10 text-accent border-accent/20 font-semibold">
                  Conference Paper
                </span>
                {featured.conference && (
                  <span className="text-xs text-text-muted">{featured.conference}</span>
                )}
              </div>
              <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-lg flex-shrink-0">
                {featured.date}
              </span>
            </div>

            <h3 className="text-white font-bold text-base mb-3 leading-snug">{featured.title}</h3>

            {featured.link && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex w-full sm:w-auto min-w-[12rem] items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-black shadow-lg shadow-accent/25 hover:brightness-110 transition-all"
              >
                {featured.linkLabel ?? "Open publication"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}

            <p className="text-text-secondary text-sm leading-relaxed mb-3">{featured.description}</p>

            {featured.venue && (
              <p className="text-text-muted text-xs mb-2">{featured.venue}</p>
            )}

            {featured.advisor && (
              <p className="text-text-muted text-xs mb-3 flex items-center gap-1.5 flex-wrap">
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{featured.advisor}</span>
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-4 mb-3">
              {featured.tags.slice(0, 5).map((tag) => (
                <span key={tag} className="tag-chip text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {research.slice(1).map((item) => {
            const config = typeConfig[item.type];
            return (
              <div key={item.id} className="glass-card flex flex-col group">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded border ${config.color}`}>{config.label}</span>
                  <span className="text-xs text-text-muted flex-shrink-0">{item.date}</span>
                </div>

                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>

                {item.conference && (
                  <p className="text-accent/90 text-xs font-medium mb-2">{item.conference}</p>
                )}

                <p className="text-text-secondary text-xs leading-relaxed mb-3 flex-grow">{item.description}</p>

                {item.advisor && (
                  <p className="text-text-muted text-xs mb-3 flex items-center gap-1.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {item.advisor}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent/50 bg-accent/10 px-3 py-2.5 text-xs font-semibold text-accent hover:bg-accent/20 hover:border-accent transition-colors mt-auto"
                  >
                    {item.linkLabel ?? "Open link"}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
