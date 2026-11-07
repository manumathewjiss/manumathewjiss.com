import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<number[]>([]);
  const toggleExpanded = (id: number) => {
    setExpanded((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const visible = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
          <h2 className="section-heading !mb-0">Selected Projects</h2>
          <span className="text-xs font-mono text-accent border border-accent/30 rounded-full px-3 py-1">{projects.length} projects</span>
        </div>
        <p className="section-subheading !mb-7">Products, research, and engineering work across AI, full-stack development, data, and robotics. Each card shows the tools behind the work.</p>

        <div className="flex flex-wrap gap-2 mb-8" aria-label="Filter projects">
          {categories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`px-3 py-2 text-xs rounded-full border transition-colors ${category === item ? "bg-accent text-black border-accent font-semibold" : "text-text-secondary border-border-subtle hover:border-accent/40 hover:text-white"}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="grid items-start md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visible.map((project) => (
            <article key={project.id} className={`glass-card relative self-start h-auto overflow-hidden ${project.featured ? "border-accent/25 bg-gradient-to-br from-accent/[0.07] via-bg-card to-bg-card" : ""}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/70 via-accent/20 to-transparent" />
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-accent">{project.category}</span>
                {project.featured && <span className="text-[10px] text-text-muted border border-border-subtle rounded-full px-2 py-0.5">Featured</span>}
              </div>
              <h3 className="text-white font-bold text-lg leading-snug mb-3">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-text-muted font-semibold mb-2">Tools & frameworks</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tool) => <span key={tool} className="text-[11px] rounded-md border border-accent/15 bg-accent/[0.06] px-2 py-1 text-accent/90">{tool}</span>)}
                </div>
              </div>
              {expanded.includes(project.id) && (
                <div id={`project-details-${project.id}`} className="border-t border-border-subtle pt-4 mb-5 text-xs leading-relaxed text-text-secondary">
                  <p>{project.longDescription}</p>
                  {project.highlights && <ul className="mt-3 space-y-2">{project.highlights.map((h) => <li key={h} className="flex gap-2"><span className="text-accent">•</span>{h}</li>)}</ul>}
                </div>
              )}
              <div className="flex flex-wrap items-center gap-3 mt-4 pt-2 border-t border-border-subtle">
                <button type="button" aria-expanded={expanded.includes(project.id)} aria-controls={`project-details-${project.id}`}
                  onClick={() => toggleExpanded(project.id)}
                  className="text-xs font-semibold text-accent hover:text-white py-2">
                  {expanded.includes(project.id) ? "Less detail ↑" : "Explore project ↓"}
                </button>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-accent ml-auto py-2">{project.demoLabel ?? "Live project"} ↗</a>}
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-secondary hover:text-accent py-2">Code ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
