const stats = [
  { label: "Publications", value: "1+", sub: "IEEE ISTAS25" },
  { label: "Projects", value: "10+", sub: "Production-ready" },
  { label: "Accuracy", value: "97%", sub: "LIMFADD model" },
  { label: "APIs Integrated", value: "8+", sub: "In Stock Crusher" },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of the Pacific",
    location: "Stockton, CA",
    year: "Spring 2026",
    focus: "Machine Learning, Generative AI, AI Systems",
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    school: "APJ Abdul Kalam Technological University",
    location: "Kerala, India",
    year: "Summer 2023",
    focus: "Computer Vision, Deep Learning, Embedded Systems",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <div className="accent-line" />
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">
              Building intelligent systems at the intersection of research and production.
            </p>

            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-white font-medium">
                  Master&apos;s student in Computer Science
                </span>{" "}
                at the University of the Pacific, specializing in Machine
                Learning, Generative AI, and AI systems engineering. I thrive
                at the boundary between research and real-world deployment.
              </p>
              <p>
                From co-founding a{" "}
                <span className="text-accent font-medium">
                  GenAI trading startup (Stock Crusher)
                </span>{" "}
                and launching an{" "}
                <span className="text-accent font-medium">
                  AI-powered iOS app (MealMuse)
                </span>{" "}
                live on the App Store, to publishing research at{" "}
                <span className="text-white font-medium">IEEE ISTAS25</span>{" "}
                on fake account detection. I build things that work.
              </p>
              <p>
                My research spans NLP, transformer models, autonomous robotics,
                and data engineering. I&apos;ve worked as a{" "}
                <span className="text-white font-medium">
                  Graduate Research Assistant
                </span>{" "}
                across three labs simultaneously and as a{" "}
                <span className="text-white font-medium">
                  Teaching Assistant
                </span>{" "}
                for security analytics.
              </p>
              <p>
                Based in the{" "}
                <span className="text-white font-medium">
                  San Francisco Bay Area
                </span>
                , I&apos;m actively looking for roles in ML engineering,
                AI/software engineering, and research.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="mailto:manumathewjiss18@gmail.com"
                className="btn-primary text-xs"
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/manu-mathew-jiss"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: Stats + Education */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card group cursor-default"
                >
                  <p className="text-2xl font-black text-accent mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-white text-sm font-medium">{stat.label}</p>
                  <p className="text-text-muted text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-3 h-0.5 bg-accent rounded-full" />
                Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="glass-card group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {edu.degree}
                      </p>
                      <p className="text-accent text-xs font-medium mt-0.5">
                        {edu.school}
                      </p>
                      <p className="text-text-muted text-xs mt-1">
                        {edu.location}
                      </p>
                      <p className="text-text-secondary text-xs mt-2 italic">
                        {edu.focus}
                      </p>
                    </div>
                    <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-lg whitespace-nowrap flex-shrink-0">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="glass-card flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">San Francisco Bay Area, USA</p>
                <p className="text-text-muted text-xs">Available for on-site, hybrid, and remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
