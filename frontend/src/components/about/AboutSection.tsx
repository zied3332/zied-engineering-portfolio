import RetroWindow from "../retro/RetroWindow";
import { personalInfo } from "../../data/personal";
import "./about-section.css";

function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="about-section__heading">
        <span className="about-section__label">01 — Personal Information</span>
        <h2>About Me</h2>
      </div>

      <div className="about-section__layout">
        <RetroWindow
          title="ABOUT_ME.TXT - Notepad"
          className="about-notepad"
        >
          <div className="about-notepad__menu">
            <button type="button">File</button>
            <button type="button">Edit</button>
            <button type="button">Search</button>
            <button type="button">Help</button>
          </div>

          <article className="about-notepad__document">
            <p className="about-notepad__document-title">
              ABOUT_ME.TXT
            </p>

            {personalInfo.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <p className="about-notepad__cursor-line">
              C:\PORTFOLIO\ABOUT&gt;
              <span className="about-notepad__cursor" />
            </p>
          </article>

          <div className="about-notepad__statusbar">
            <span>Ln 18, Col 1</span>
            <span>100%</span>
            <span>Windows (CRLF)</span>
            <span>UTF-8</span>
          </div>
        </RetroWindow>

        <RetroWindow
          title="ZIED_PROPERTIES.EXE"
          className="about-properties"
        >
          <div className="about-properties__tabs">
            <button type="button" className="about-properties__tab--active">
              General
            </button>
            <button type="button">Details</button>
          </div>

          <div className="about-properties__content">
            <div className="about-properties__profile">
              <div className="about-properties__avatar">
                ZA
              </div>

              <div>
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.role}</p>
              </div>
            </div>

            <div className="about-properties__divider" />

            <dl className="about-properties__list">
              <div>
                <dt>Location</dt>
                <dd>{personalInfo.location}</dd>
              </div>

              <div>
                <dt>Education</dt>
                <dd>{personalInfo.details.education}</dd>
              </div>

              <div>
                <dt>Track</dt>
                <dd>{personalInfo.details.track}</dd>
              </div>

              <div>
                <dt>Languages</dt>
                <dd>{personalInfo.details.languages}</dd>
              </div>

              <div>
                <dt>Focus</dt>
                <dd>{personalInfo.details.focus}</dd>
              </div>

              <div>
                <dt>Availability</dt>
                <dd>{personalInfo.details.availability}</dd>
              </div>
            </dl>

            <div className="about-properties__actions">
              <a
                href={personalInfo.links.resume}
                className="retro-button about-properties__button"
              >
                Download CV
              </a>

              <a
                href={personalInfo.links.email}
                className="retro-button about-properties__button"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
}

export default AboutSection;