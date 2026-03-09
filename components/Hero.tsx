import { useEffect, useState } from "react";

const roles = [
  "AI Engineer",
  "ML Researcher",
  "Full-Stack Developer",
  "GenAI Builder",
];

const highlights = [
  { label: "Co-Founder", sub: "2 AI Startups" },
  { label: "Research Assistant", sub: "x4 at University of the Pacific" },
  { label: "Teaching Assistant", sub: "Security Analytics" },
  { label: "IEEE Published", sub: "ISTAS25 Conference" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F5C518 1px, transparent 1px), linear-gradient(90deg, #F5C518 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-slide-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Open to opportunities
          </div>

          <p className="text-text-secondary text-lg font-light mb-2 tracking-wider uppercase">
            Hi there, I&apos;m
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-4 tracking-tight">
            MANU
            <br />
            <span className="text-accent">MATHEW</span>
            <br />
            JISS
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 mb-5 h-8">
            <span className="text-lg md:text-xl font-semibold text-white">
              {displayed}
            </span>
            <span className="w-0.5 h-5 bg-accent animate-pulse" />
          </div>

          {/* Role highlights */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-start gap-2 bg-white/[0.03] border border-border-subtle rounded-lg px-3 py-2"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">{h.label}</p>
                  <p className="text-text-muted text-xs">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-text-secondary leading-relaxed max-w-md mb-8 text-sm">
            Master&apos;s student in Computer Science at{" "}
            <span className="text-white">University of the Pacific</span>.
            Building AI systems that work in the real world, from multi-model
            trading platforms to autonomous robots.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => handleScroll("projects")}
              className="btn-primary"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a href="/resume.pdf" download className="btn-outline">
              Download Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <button onClick={() => handleScroll("contact")} className="btn-ghost">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/manumathewjiss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/manumathewjiss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:manumathewjiss18@gmail.com"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Profile Image / Avatar */}
        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110 animate-float" />

            {/* Outer ring */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-accent/30 p-1">
              <div className="w-full h-full rounded-full border border-accent/20 overflow-hidden bg-bg-card flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 via-bg-card to-bg-secondary flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-black text-accent/60 select-none">
                    MMJ
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-2 -right-4 bg-bg-card border border-border-subtle rounded-xl px-3 py-2 shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <p className="text-xs text-text-secondary">Published</p>
              <p className="text-sm font-semibold text-accent">IEEE ISTAS25</p>
            </div>
            <div
              className="absolute -bottom-2 -left-4 bg-bg-card border border-border-subtle rounded-xl px-3 py-2 shadow-lg animate-float"
              style={{ animationDelay: "2s" }}
            >
              <p className="text-xs text-text-secondary">Accuracy</p>
              <p className="text-sm font-semibold text-accent">97% DNN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
        <span className="text-xs">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
