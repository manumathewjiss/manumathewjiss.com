import { useState } from "react";
import { projects } from "../data/projects";

const categories = ["All", "GenAI / Full-Stack", "AI / iOS", "ML Research", "NLP / ML", "AI / Full-Stack", "Data Engineering", "Robotics / Embedded AI", "Computer Vision"];

const categoryColors: Record<string, string> = {
  "GenAI / Full-Stack": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "AI / iOS": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "ML Research": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "NLP / ML": "bg-green-500/10 text-green-400 border-green-500/20",
  "AI / Full-Stack": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Data Engineering": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Robotics / Embedded AI": "bg-red-500/10 text-red-400 border-red-500/20",
  "Computer Vision": "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Selected Projects</h2>
        <p className="section-subheading">
          Production apps, research tools, and AI systems built from the ground up.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(["All", ...Array.from(new Set(projects.map((p) => p.category)))]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-black border-accent font-semibold"
                  : "bg-transparent text-text-secondary border-border-subtle hover:border-accent/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass-card flex flex-col group cursor-pointer"
              onClick={() =>
                setExpanded(expanded === project.id ? null : project.id)
              }
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full bg-gradient-to-r from-accent via-accent/50 to-transparent rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1" />

              {/* Category badge */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded border ${
                    categoryColors[project.category] || "bg-white/5 text-text-secondary border-border-subtle"
                  }`}
                >
                  {project.category}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-text-muted hover:text-accent transition-colors flex-shrink-0"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-xs leading-relaxed mb-3 flex-grow">
                {project.description}
              </p>

              {/* Expanded highlights */}
              {expanded === project.id && project.highlights && (
                <div className="mb-3 pt-3 border-t border-border-subtle">
                  <p className="text-accent text-xs font-medium mb-2">Highlights</p>
                  <ul className="space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-text-secondary text-xs">
                        <span className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tag-chip">+{project.tech.length - 5}</span>
                )}
              </div>

              {/* Expand toggle */}
              <button className="mt-3 text-xs text-text-muted hover:text-accent transition-colors flex items-center gap-1 self-start">
                {expanded === project.id ? "Show less" : "Show highlights"}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${expanded === project.id ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
