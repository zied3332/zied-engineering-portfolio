import { useState } from "react";
import RetroWindow from "../retro/RetroWindow";
import { personalInfo } from "../../data/personal";
import "./about-section.css";

type AboutTab = "general" | "details";

function AboutSection() {
  const [activeTab, setActiveTab] =
    useState<AboutTab>("general");

  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-section-title"
    >
      <header className="about-section__heading">
        <span className="about-section__label">
          01 — Personal Information
        </span>

        <h2 id="about-section-title">
          About Me
        </h2>

        <p>
          A quick introduction, current engineering
          direction, and professional profile.
        </p>
      </header>

      <div className="about-section__layout">
        <RetroWindow
          title="ABOUT_ME.TXT - Notepad"
          className="about-notepad"
        >
          <nav
            className="about-notepad__menu"
            aria-label="Notepad menu"
          >
            <button type="button">
              <span>F</span>ile
            </button>

            <button type="button">
              <span>E</span>dit
            </button>

            <button type="button">
              <span>S</span>earch
            </button>

            <button type="button">
              <span>H</span>elp
            </button>
          </nav>

          <article className="about-notepad__document">
            <div className="about-notepad__document-header">
              <span
                className="about-notepad__file-icon"
                aria-hidden="true"
              />

              <div>
                <strong>ABOUT_ME.TXT</strong>
                <span>Plain Text Document</span>
              </div>
            </div>

            <div className="about-notepad__text">
              {personalInfo.introduction.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                )
              )}

              <p className="about-notepad__command">
                <span>
                  C:\PORTFOLIO\ABOUT&gt;
                </span>

                <span
                  className="about-notepad__cursor"
                  aria-hidden="true"
                />
              </p>
            </div>
          </article>

          <footer className="about-notepad__statusbar">
            <span>Ln 18, Col 1</span>
            <span>100%</span>
            <span>Windows (CRLF)</span>
            <span>UTF-8</span>
          </footer>
        </RetroWindow>

        <RetroWindow
          title="System Properties"
          className="about-properties"
        >
          <div
            className="about-properties__tabs"
            role="tablist"
            aria-label="Profile information"
          >
            <button
              type="button"
              role="tab"
              aria-selected={
                activeTab === "general"
              }
              className={
                activeTab === "general"
                  ? "about-properties__tab about-properties__tab--active"
                  : "about-properties__tab"
              }
              onClick={() =>
                setActiveTab("general")
              }
            >
              General
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={
                activeTab === "details"
              }
              className={
                activeTab === "details"
                  ? "about-properties__tab about-properties__tab--active"
                  : "about-properties__tab"
              }
              onClick={() =>
                setActiveTab("details")
              }
            >
              Details
            </button>
          </div>

          <div className="about-properties__content">
            {activeTab === "general" && (
              <div
                className="about-properties__panel"
                role="tabpanel"
              >
                <div className="about-properties__profile">
                  <div
                    className="about-properties__avatar"
                    aria-hidden="true"
                  >
                    <span>ZA</span>
                  </div>

                  <div className="about-properties__identity">
                    <span className="about-properties__profile-label">
                      Registered profile
                    </span>

                    <h3>{personalInfo.name}</h3>

                    <p>{personalInfo.role}</p>
                  </div>
                </div>

                <div
                  className="about-properties__divider"
                  aria-hidden="true"
                />

                <fieldset className="about-properties__group">
                  <legend>
                    System information
                  </legend>

                  <dl className="about-properties__list">
                    <div>
                      <dt>Location:</dt>
                      <dd>
                        {personalInfo.location}
                      </dd>
                    </div>

                    <div>
                      <dt>Education:</dt>
                      <dd>
                        {
                          personalInfo.details
                            .education
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>Track:</dt>
                      <dd>
                        {
                          personalInfo.details
                            .track
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>Status:</dt>
                      <dd>
                        {
                          personalInfo.details
                            .availability
                        }
                      </dd>
                    </div>
                  </dl>
                </fieldset>

                <div className="about-properties__status">
                  <span
                    className="about-properties__status-icon"
                    aria-hidden="true"
                  />

                  <p>
                    Profile loaded successfully.
                    Available for software,
                    automation, and engineering
                    opportunities.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "details" && (
              <div
                className="about-properties__panel"
                role="tabpanel"
              >
                <div className="about-properties__details-header">
                  <span
                    className="about-properties__details-icon"
                    aria-hidden="true"
                  />

                  <div>
                    <h3>
                      Engineering Profile
                    </h3>

                    <p>
                      Extended system and career
                      information.
                    </p>
                  </div>
                </div>

                <div className="about-properties__details-table">
                  <div className="about-properties__details-heading">
                    <span>Property</span>
                    <span>Value</span>
                  </div>

                  <dl>
                    <div>
                      <dt>Full name</dt>
                      <dd>
                        {personalInfo.name}
                      </dd>
                    </div>

                    <div>
                      <dt>Current role</dt>
                      <dd>
                        {personalInfo.role}
                      </dd>
                    </div>

                    <div>
                      <dt>Languages</dt>
                      <dd>
                        {
                          personalInfo.details
                            .languages
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>Main focus</dt>
                      <dd>
                        {
                          personalInfo.details
                            .focus
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>Availability</dt>
                      <dd>
                        {
                          personalInfo.details
                            .availability
                        }
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            <footer className="about-properties__actions">
              <a
                href={personalInfo.links.resume}
                className="retro-button about-properties__button"
                download
              >
                Download CV
              </a>

              <a
                href={personalInfo.links.email}
                className="retro-button about-properties__button"
              >
                Contact Me
              </a>
            </footer>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
}

export default AboutSection;