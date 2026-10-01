"use client";

import { useEffect, useState } from "react";
import Ticker from "./Ticker";

export const navLinks = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.classList.add("menu-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={close} aria-label="Kunal Garg, back to top">
          <span className="brand-mono" aria-hidden="true">KG</span>
          <span className="brand-text">
            <span className="brand-name">Kunal Garg</span>
            <span className="brand-role">Financial Analyst</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary btn-sm nav-cta" href="kunal-garg-resume.pdf" download>
          Resume
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <Ticker />

      <button
        type="button"
        className="menu-backdrop"
        aria-hidden="true"
        tabIndex={-1}
        onClick={close}
      />
      <div id="mobile-menu" className="mobile-menu">
        <nav aria-label="Mobile">
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} className="mobile-link" onClick={close}>
              <span className="mobile-idx">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary mobile-cta" href="kunal-garg-resume.pdf" download onClick={close}>
          Download Resume
        </a>
      </div>
    </header>
  );
}
