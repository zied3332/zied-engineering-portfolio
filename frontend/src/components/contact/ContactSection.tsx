import { useMemo, useState } from "react";

import RetroWindow from "../retro/RetroWindow";
import ContactCard from "./ContactCard";

import {
  contactRecords,
  type ContactRecord,
} from "../../data/contact";

import profileUserIcon from "../../assets/icons/profile-user.png";

import "./contact-section.css";

type ContactStatus =
  | "Ready"
  | "Contact copied"
  | "Copy failed"
  | "Opening contact";

function ContactSection() {
  const visibleContacts = useMemo(
    () =>
      contactRecords.filter(
        (contact) => contact.icon !== "upwork"
      ),
    []
  );

  const [selectedContactId, setSelectedContactId] = useState(
    visibleContacts[0]?.id ?? 0
  );

  const [contactStatus, setContactStatus] =
    useState<ContactStatus>("Ready");

  const selectedContact = useMemo(
    () =>
      visibleContacts.find(
        (contact) => contact.id === selectedContactId
      ) ?? visibleContacts[0],
    [selectedContactId, visibleContacts]
  );

  const handleSelectContact = (contactId: number) => {
    setSelectedContactId(contactId);
    setContactStatus("Ready");
  };

  const getContactValue = (
    contact: ContactRecord
  ): string | undefined => {
    if (contact.action?.type === "copy") {
      return contact.action.value;
    }

    return contact.details[0]?.value;
  };

  const handleCopyContact = async (
    contact: ContactRecord
  ) => {
    const value = getContactValue(contact);

    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setContactStatus("Contact copied");
    } catch {
      setContactStatus("Copy failed");
    }
  };

  const handleOpenContact = (
    contact: ContactRecord
  ) => {
    if (!contact.action) {
      return;
    }

    if (contact.action.type === "copy") {
      void handleCopyContact(contact);
      return;
    }

    setContactStatus("Opening contact");

    window.open(
      contact.action.href,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <header className="contact-section__heading">
        <span className="contact-section__label">
          05 — Communication
        </span>

        <h2 id="contact-heading">Contact</h2>

        <p>
          Get in touch for internships, development projects,
          collaborations, or engineering opportunities.
        </p>
      </header>

      <RetroWindow
        title="Contact Directory - Zied Alimi"
        className="contact-directory"
      >
        <nav
          className="contact-directory__menu"
          aria-label="Contact directory menu"
        >
          <button type="button">
            <span>F</span>ile
          </button>

          <button type="button">
            <span>V</span>iew
          </button>

          <button type="button">
            <span>H</span>elp
          </button>
        </nav>

        <div className="contact-directory__intro">
          <span
            className="contact-directory__profile-icon"
            aria-hidden="true"
          >
            <img src={profileUserIcon} alt="" />
          </span>

          <div>
            <strong>Zied Alimi</strong>

            <span>
              Full-Stack Developer · Computer Engineering Student
            </span>
          </div>
        </div>

        <div className="contact-directory__workspace">
          <aside
            className="contact-directory__list-panel"
            aria-labelledby="contact-list-heading"
          >
            <header className="contact-directory__panel-header">
              <div>
                <h3 id="contact-list-heading">
                  Contact Methods
                </h3>

                <span>
                  {visibleContacts.length} available contacts
                </span>
              </div>
            </header>

            <div className="contact-directory__contact-list">
              {visibleContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  isSelected={
                    selectedContact?.id === contact.id
                  }
                  onSelect={handleSelectContact}
                />
              ))}
            </div>
          </aside>

          <main
            className="contact-directory__details-panel"
            aria-live="polite"
          >
            {selectedContact ? (
              <>
                <header className="contact-directory__details-header">
                  <div>
                    <span>Selected contact</span>

                    <h3>{selectedContact.title}</h3>

                    <p>{selectedContact.description}</p>
                  </div>
                </header>

                <div className="contact-directory__details-content">
                  <dl className="contact-directory__properties">
                    {selectedContact.details.map((detail) => (
                      <div key={detail.label}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <fieldset className="contact-directory__availability">
                    <legend>Availability</legend>

                    <p>
                      Open to internships, full-stack development
                      projects, collaborations, and engineering
                      opportunities.
                    </p>
                  </fieldset>
                </div>

                <footer className="contact-directory__actions">
                  <button
                    type="button"
                    className="retro-button"
                    onClick={() =>
                      void handleCopyContact(selectedContact)
                    }
                  >
                    Copy
                  </button>

                  {selectedContact.action && (
                    <button
                      type="button"
                      className="retro-button contact-directory__primary-action"
                      onClick={() =>
                        handleOpenContact(selectedContact)
                      }
                    >
                      {selectedContact.action.label}
                    </button>
                  )}
                </footer>
              </>
            ) : (
              <div className="contact-directory__empty">
                No contact method selected.
              </div>
            )}
          </main>
        </div>

        <footer
          className="contact-directory__statusbar"
          role="status"
        >
          <span>
            {visibleContacts.length} contact methods
          </span>

          <span>{contactStatus}</span>

          <span>
            Selected: {selectedContact?.type ?? "None"}
          </span>
        </footer>
      </RetroWindow>
    </section>
  );
}

export default ContactSection;