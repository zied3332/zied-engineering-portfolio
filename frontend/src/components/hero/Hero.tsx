import "./hero.css";

function Hero() {
  return (
    <section
      id="home"
      className="section hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-section__content">
        <p className="hero-section__label">ZIED_PORTFOLIO.EXE</p>

        <h1 id="hero-heading">Zied Alimi</h1>

        <p className="hero-section__role">
          Full-Stack Developer
          <span aria-hidden="true"> · </span>
          Computer Engineering Student
        </p>

        <div className="hero-section__actions">
          <a
            className="retro-button hero-section__button hero-section__button--primary"
            href="#projects"
          >
            View Projects
          </a>

          <a
            className="retro-button hero-section__button"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div
        className="hero-section__statusbar"
        aria-label="Portfolio status"
      >
        <span>Ready</span>
        <span>Full-Stack Development</span>
        <span>Tunisia</span>
      </div>
    </section>
  );
}

export default Hero;