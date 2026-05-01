import { experiences } from "../data/experience";

const PACIFIC_URL = "https://www.pacific.edu";

const typeColors: Record<string, string> = {
  startup: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  research: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  teaching: "bg-green-500/10 text-green-400 border-green-500/20",
};

const typeLabels: Record<string, string> = {
  startup: "Startup",
  research: "Research",
  teaching: "Teaching",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">
          Résumé snapshot: co-founded two shipped GenAI products (LLM-guided trading insights and Meal Muse on iOS), held five concurrent graduate research roles at{" "}
          <a
            href={PACIFIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/45 underline-offset-4 hover:decoration-accent"
          >
            University of the Pacific
          </a>{" "}
          spanning Reddit trajectory analytics, NVIDIA Jetson / ROS&nbsp;2 racing stacks, SMC-review NLP authenticity pipelines, ISTAS-published LIMFADD, and RoBERTa-driven AIMoodDiary, backed by SOC analytics teaching support. Gold buttons surface live products, dashboards, conferences, or preprints; outlined rows jump to GitHub repositories.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border-subtle to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-accent rounded-full border-2 border-bg-primary transform md:-translate-x-1.5 hidden md:block z-10" />

                {/* Card: alternating sides on desktop */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="glass-card group h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-sm leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-accent text-xs font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-lg border whitespace-nowrap flex-shrink-0 ${typeColors[exp.type]}`}
                      >
                        {typeLabels[exp.type]}
                      </span>
                    </div>

                    {/* Duration */}
                    <p className="text-text-muted text-xs mb-3 flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </p>

                    {(exp.link || exp.secondaryLink || exp.github) && (
                      <div className="space-y-2 mb-4">
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2.5 text-xs font-semibold text-black shadow-[0_0_0_1px_rgba(212,165,116,0.35)] hover:brightness-110 transition-all"
                          >
                            {exp.linkLabel ?? "Open link"}
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {exp.secondaryLink && (
                          <a
                            href={exp.secondaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border-subtle bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-text-secondary hover:border-accent/40 hover:text-accent transition-colors"
                          >
                            {exp.secondaryLinkLabel ?? "Additional link"}
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {exp.github && (
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border-subtle bg-white/5 px-3 py-2.5 text-xs font-semibold text-text-secondary hover:border-accent/40 hover:text-accent transition-colors"
                          >
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub repo
                          </a>
                        )}
                      </div>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-text-secondary text-xs leading-relaxed">
                          <span className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    {exp.tech && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span key={t} className="tag-chip text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty col for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
