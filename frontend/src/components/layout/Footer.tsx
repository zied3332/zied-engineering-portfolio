import { personalInfo } from "../../data/personal";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__main">
          <div className="footer__identity">
            <span className="footer__icon">Z</span>

            <div>
              <strong>{personalInfo.name}</strong>
              <span>Portfolio.exe</span>
            </div>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href={personalInfo.links.email}>
              Email
            </a>

            <a href={personalInfo.links.resume}>
              CV
            </a>
          </nav>
        </div>

        <div className="footer__statusbar">
          <span>© {currentYear} Zied Alimi</span>
          <span>React + TypeScript</span>
          <span>System status: Available</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;