const RESUME_PDF = "/manu-mathew-jiss-resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="accent-line" />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="section-heading mb-2">Résumé</h2>
            <p className="section-subheading mb-0">
              Embedded preview below. Download a copy anytime for offline use.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href={RESUME_PDF}
              download
              className="btn-outline text-xs px-4 py-2.5 justify-center inline-flex gap-2"
            >
              Download Résumé
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-4 py-2.5 justify-center inline-flex gap-2 border border-border-subtle rounded-lg hover:border-accent/30"
            >
              Open in new tab
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="glass-card p-2 sm:p-3 overflow-hidden">
          <iframe
            title="Manu Mathew Jiss résumé (PDF preview)"
            src={RESUME_PDF}
            className="w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[850px] rounded-xl border border-border-subtle bg-[#111]"
          />
        </div>

        <p className="text-xs text-text-muted mt-4 text-center md:text-left max-w-xl">
          The preview uses your browser&apos;s built-in PDF viewer. On smaller screens, opening the file in a
          new tab often gives a clearer view.
        </p>
      </div>
    </section>
  );
}
