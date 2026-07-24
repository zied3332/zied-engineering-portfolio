import { useEffect, useState } from "react";
import "./navbar.css";
import appIcon from "../../assets/icons/app-icon.png";
const navigationItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const timer = window.setInterval(updateClock, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => section !== null);

      const scrollPosition = window.scrollY + 140;

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a
          className="navbar__brand"
          href="#home"
          onClick={() => handleNavigationClick("home")}
        >
          <img
  src={appIcon}
  alt="Portfolio application icon"
  className="navbar__brand-icon"
/>
          <span>Zied Portfolio</span>
        </a>

        <button
          type="button"
          className={`navbar__menu-button ${
            isMenuOpen ? "navbar__menu-button--active" : ""
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navbar__navigation ${
            isMenuOpen ? "navbar__navigation--open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                activeSection === item.id
                  ? "navbar__navigation-link--active"
                  : ""
              }
              onClick={() => handleNavigationClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__clock" aria-label="Current time">
          {currentTime}
        </div>
      </div>
    </header>
  );
}

export default Navbar;