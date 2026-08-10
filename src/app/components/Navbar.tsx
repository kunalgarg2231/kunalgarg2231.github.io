export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="nav-mark">
          KUNAL GARG <span>·</span> <span>FINANCIAL ANALYST</span>
        </div>
        <nav className="nav-links">
          <a href="#summary" className="cell-hover">
            Summary
          </a>
          <a href="#experience" className="cell-hover">
            Experience
          </a>
          <a href="#projects" className="cell-hover">
            Projects
          </a>
          <a href="#skills" className="cell-hover">
            Skills
          </a>
          <a href="#education" className="cell-hover">
            Education
          </a>
          <a href="#certificates" className="cell-hover">
            Certificates
          </a>
          <a href="#contact" className="cell-hover">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
