import { experiences } from "../data/experience";

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
          From founding AI startups to graduate research and teaching. Here&apos;s where I&apos;ve applied my skills.
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
