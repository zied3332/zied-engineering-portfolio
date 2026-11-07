import { useState } from "react";
import { handleTabKeyDown } from "../../utils/tabs";


import RetroWindow from "../retro/RetroWindow";

import "./about-section.css";

type PropertiesTab = "general" | "details";

const profileDetails = [
  {
    property: "Full name",
    value: "Zied Alimi",
  },
  {
    property: "Current role",
    value: "Full-Stack Developer",
  },
  {
    property: "Education",
    value: "Computer Engineering at ESPRIT",
  },
  {
    property: "Specialization",
    value: "Full-Stack Development",
  },
  {
    property: "Current work",
    value: "Full-Stack Development Internship",
  },
  {
    property: "Experience",
    value: "Freelance projects with real clients",
  },
  {
    property: "Location",
    value: "Tunisia",
  },
  {
    property: "Availability",
    value: "Selected freelance projects and collaborations",
  },
];

function AboutSection() {
  const [activeTab, setActiveTab] =
    useState<PropertiesTab>("general");

  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-section__heading">
        <span className="about-section__label">
          01 — Personal Information
        </span>

        <h2 id="about-heading">About Me</h2>

        <p>
          A quick introduction, my current work, and my
          direction as a Full-Stack Developer.
        </p>
      </div>

      <div className="about-section__layout">
        <RetroWindow
          title="Biography"
          className="about-notepad"
        >
          <div className="about-notepad__document">

            <div className="about-notepad__text">
              <p>Hello, my name is Zied Alimi.</p>

              <p>
                I am a Computer Engineering student at ESPRIT
                and a Full-Stack Developer based in Tunisia.
              </p>

              <p>
                I am currently completing a full-stack
                development internship, where I am building a
                real web platform from its public interface to
                its administration dashboard and backend
                services.
              </p>

              <p>
                Alongside my studies, I have worked with
                freelance clients on data extraction,
                automation, and web-related projects. These
                experiences helped me learn how to understand
                practical requirements, communicate clearly,
                and deliver reliable results.
              </p>

              <p>
                My current focus is full-stack development. I
                am continuing to strengthen my frontend,
                backend, database, and software engineering
                skills by building complete projects and
                working on real-world problems.
              </p>
            </div>
          </div>

        </RetroWindow>

        <RetroWindow
          title="Profile information"
          className="about-properties"
        >
          <div
            className="about-properties__tabs"
            role="tablist"
            onKeyDown={handleTabKeyDown}
            aria-label="Profile information"
          >
            <button
              id="about-general-tab"
              type="button"
              role="tab"
              className={`about-properties__tab ${
                activeTab === "general"
                  ? "about-properties__tab--active"
                  : ""
              }`}
              aria-selected={activeTab === "general"}
              tabIndex={activeTab === "general" ? 0 : -1}
              aria-controls="about-general-panel"
              onClick={() => setActiveTab("general")}
            >
              General
            </button>

            <button
              id="about-details-tab"
              type="button"
              role="tab"
              className={`about-properties__tab ${
                activeTab === "details"
                  ? "about-properties__tab--active"
                  : ""
              }`}
              aria-selected={activeTab === "details"}
              tabIndex={activeTab === "details" ? 0 : -1}
              aria-controls="about-details-panel"
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
          </div>

          <div className="about-properties__content">
            {activeTab === "general" ? (
              <div
                id="about-general-panel"
                className="about-properties__panel"
                role="tabpanel"
                tabIndex={0}
                aria-labelledby="about-general-tab"
              >
                <div className="about-properties__profile">
<div className="about-properties__identity">
                    <span className="about-properties__profile-label">
                      Profile
                    </span>

                    <h3>Zied Alimi</h3>

                    <p>Full-Stack Developer</p>
                  </div>
                </div>

                <div className="about-properties__divider" />

                <fieldset className="about-properties__group">
                  <legend>Profile information</legend>

                  <dl className="about-properties__list">
                    <div>
                      <dt>Location:</dt>
                      <dd>Tunisia</dd>
                    </div>

                    <div>
                      <dt>Education:</dt>
                      <dd>
                        ESPRIT — Computer Engineering
                      </dd>
                    </div>

                    <div>
                      <dt>Specialization:</dt>
                      <dd>Full-Stack Development</dd>
                    </div>

                    <div>
                      <dt>Status:</dt>
                      <dd>
                        Full-Stack Development Intern
                      </dd>
                    </div>
                  </dl>
                </fieldset>

                <div
                  className="about-properties__status"
                  role="status"
                >
<p>
                    Profile loaded successfully. Currently
                    building a complete full-stack web platform
                    and available for selected freelance
                    projects and collaborations.
                  </p>
                </div>
              </div>
            ) : (
              <div
                id="about-details-panel"
                className="about-properties__panel"
                role="tabpanel"
                aria-labelledby="about-details-tab"
              >
                <div className="about-properties__details-header">
<div>
                    <h3>Engineering Profile</h3>

                    <p>
                      Professional, education, and current work
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
                    {profileDetails.map((detail) => (
                      <div key={detail.property}>
                        <dt>{detail.property}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            <div className="about-properties__actions">
              <a
                className="retro-button about-properties__button"
                href="/Zied-Alimi-CV.pdf"
                download
              >
                Download CV
              </a>

              <a
                className="retro-button about-properties__button"
                href="#contact"
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