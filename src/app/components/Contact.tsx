import SectionHeader from "./SectionHeader";

const icons = {
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

const contacts = [
  { key: "Phone", val: "+91 90238 05708", href: "tel:+919023805708", icon: icons.phone },
  { key: "Email", val: <>kunalgarg2231<wbr />@gmail.com</>, href: "mailto:kunalgarg2231@gmail.com", icon: icons.email },
  {
    key: "LinkedIn",
    val: <>linkedin.com/<wbr />in/kunalgarg13</>,
    href: "https://linkedin.com/in/kunalgarg13",
    external: true,
    icon: icons.linkedin,
  },
  { key: "Location", val: "Gurugram, India", icon: icons.location },
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <section id="contact">
        <SectionHeader index="07" eyebrow="Get In Touch" title="Contact" />

        <div className="contact-panel reveal">
          <div className="contact-media" aria-hidden="true">
            <img src="images/contact-gurugram.jpg" alt="" loading="lazy" />
          </div>

          <div className="contact-intro">
            <h3>
              Let&apos;s talk valuation, research, and <em>FP&amp;A.</em>
            </h3>
            <p>
              Interested in analyst roles across investment banking, equity
              research, and corporate finance. Based in Gurugram and happy to
              connect.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light" href="mailto:kunalgarg2231@gmail.com">
                Email Kunal
              </a>
              <a className="btn btn-outline-light" href="kunal-garg-resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>

          <ul className="contact-list">
            {contacts.map((c) => {
              const inner = (
                <>
                  <span className="contact-icon">
                    <Icon>{c.icon}</Icon>
                  </span>
                  <span className="contact-text">
                    <span className="contact-key">{c.key}</span>
                    <span className="contact-val">{c.val}</span>
                  </span>
                  {c.href && <span className="contact-arrow" aria-hidden="true">↗</span>}
                </>
              );
              return (
                <li key={c.key}>
                  {c.href ? (
                    <a
                      className="contact-item"
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="contact-item">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-mark">
              <strong>KUNAL GARG</strong> © 2026
            </div>
            <div className="disclaimer">
              This profile is prepared for informational purposes only and does
              not constitute an offer, recommendation, or solicitation of any
              kind. Photography via{" "}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                Unsplash
              </a>
              .
            </div>
          </div>
          <a className="back-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
