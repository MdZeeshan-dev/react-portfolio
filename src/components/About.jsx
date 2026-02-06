function About() {
  return (
    <section id="about">
      <div className="about-grid">

        {/* LEFT — 2/3 */}
        <div className="about-left">
          <div className="about-header">
            {/* <h3 className="about-name">Zeeshu</h3>
            <p className="about-role">Frontend Developer (React)</p> */}
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-text">
            <p>
              I’m an engineering student focused on frontend development with React.
              I enjoy building clean, responsive user interfaces and understanding
              how things work under the hood instead of just copying code.
            </p>

            <p>
              My current focus is on strengthening my fundamentals — JavaScript,
              React component architecture, state management, and basic performance
              optimization.
            </p>

            <p>
              I am actively working toward becoming job-ready by creating practical
              projects and writing cleaner, more maintainable code every day.
            </p>
          </div>
        </div>

        {/* RIGHT — 1/3 */}
        <div className="about-right">
          <div className="image-ring">
            <img src="WhatsApp Image .jpeg" alt="Zeeshu" />
          </div>

          <a
            href="Md Zeeshan - Resume (1).pdf"
            className="resume-btn large"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>

          <div className="about-actions">
            {/* GitHub */}
            <a
              href="https://github.com/MdZeeshan-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.44 9.78 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.38.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 22.28 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-zeeshan-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C21.5 7.6 24 10.1 24 15.2V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24h-5V8z"/>
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/zeeshan-codex/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M14.8 3.2a1 1 0 010 1.4l-6.9 6.9a3 3 0 000 4.2l3.5 3.5a3 3 0 004.2 0l2.1-2.1a1 1 0 011.4 1.4l-2.1 2.1a5 5 0 01-7.1 0l-3.5-3.5a5 5 0 010-7.1l6.9-6.9a1 1 0 011.4 0z"/>
                <path d="M13 11h8a1 1 0 010 2h-8a1 1 0 010-2z"/>
              </svg>
            </a>

            <span className="availability">Open to work</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
