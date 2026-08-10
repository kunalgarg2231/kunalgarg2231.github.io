export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="eyebrow reveal">Get In Touch</div>
        <h2 className="section-title reveal">Contact</h2>

        <div className="contact-panel reveal">
          <div className="meta-grid">
            <div className="meta-item">
              <div className="meta-key">Phone</div>
              <a
                className="meta-val cell-hover"
                href="tel:+919023805708"
                style={{ display: "inline-block" }}
              >
                +91 90238 05708
              </a>
            </div>
            <div className="meta-item">
              <div className="meta-key">Email</div>
              <a
                className="meta-val cell-hover"
                href="mailto:kunalgarg2231@gmail.com"
                style={{ display: "inline-block" }}
              >
                kunalgarg2231@gmail.com
              </a>
            </div>
            <div className="meta-item">
              <div className="meta-key">LinkedIn</div>
              <a
                className="meta-val cell-hover"
                href="https://linkedin.com/in/kunalgarg13"
                target="_blank"
                rel="noopener"
                style={{ display: "inline-block" }}
              >
                linkedin.com/in/kunalgarg13
              </a>
            </div>
            <div className="meta-item">
              <div className="meta-key">Location</div>
              <div className="meta-val">Gurugram, India</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">KUNAL GARG © 2026</div>
        <div className="disclaimer">
          This profile is prepared for informational purposes only and does not
          constitute an offer, recommendation, or solicitation of any kind.
        </div>
      </footer>
    </>
  );
}
