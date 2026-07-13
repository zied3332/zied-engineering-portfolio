import {
  useState,
  type FormEvent,
} from "react";
import RetroWindow from "../retro/RetroWindow";
import ContactCard from "./ContactCard";
import {
  contactRecords,
  type ContactRecord,
} from "../../data/contact";
import "./contact-section.css";

const toolbarItems = [
  {
    id: "new",
    label: "New",
    icon: "✦",
  },
  {
    id: "send",
    label: "Send",
    icon: "✉",
  },
  {
    id: "copy",
    label: "Copy",
    icon: "▣",
  },
  {
    id: "print",
    label: "Print",
    icon: "▤",
  },
  {
    id: "properties",
    label: "Properties",
    icon: "☷",
  },
] as const;

function ContactSection() {
  const [selectedContactId, setSelectedContactId] = useState(
    contactRecords[0].id,
  );
  const [copyStatus, setCopyStatus] = useState(
    "Ready",
  );
  const [formStatus, setFormStatus] = useState(
    "Message form ready",
  );

  const selectedContact =
    contactRecords.find(
      (contact) => contact.id === selectedContactId,
    ) ?? contactRecords[0];

  const handleCopyText = async (
    value: string,
    successMessage: string,
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(successMessage);
    } catch {
      setCopyStatus(
        "Copy failed. Please copy the value manually.",
      );
    }
  };

  const handleContactAction = (
    contact: ContactRecord,
  ) => {
    if (!contact.action) {
      return;
    }

    if (contact.action.type === "copy") {
      void handleCopyText(
        contact.action.value,
        "Email copied to clipboard",
      );

      return;
    }

    window.open(
      contact.action.href,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleToolbarAction = (
    action: (typeof toolbarItems)[number]["id"],
  ) => {
    switch (action) {
      case "new":
        document
          .getElementById("contact-message-form")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        break;

      case "send":
        document
          .getElementById("contact-message-form")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        break;

      case "copy": {
        const copyValue =
          selectedContact.action?.type === "copy"
            ? selectedContact.action.value
            : selectedContact.details[0]?.value;

        if (copyValue) {
          void handleCopyText(
            copyValue,
            `${selectedContact.type} information copied`,
          );
        }

        break;
      }

      case "print":
        window.print();
        break;

      case "properties":
        document
          .getElementById("contact-record-properties")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

    const emailSubject = encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`,
    );

    const emailBody = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    );

    setFormStatus("Opening default email application");

    window.location.href =
      `mailto:ziedalimi2244@gmail.com` +
      `?subject=${emailSubject}` +
      `&body=${emailBody}`;
  };

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-section-title"
    >
      <div className="contact-section__container">
        <header className="contact-section__heading">
          <p className="contact-section__eyebrow">
            05 — Get In Touch
          </p>

          <h2 id="contact-section-title">
            Contact
          </h2>

          <p className="contact-section__description">
            Open a contact record or send a message about
            software projects, freelance work, internships,
            and engineering opportunities.
          </p>
        </header>

        <div className="contact-section__window">
          <RetroWindow title="CONTACT_MANAGER.EXE - Zied Alimi">
            <div className="contact-manager">
              <nav
                className="contact-manager__menu"
                aria-label="Contact manager menu"
              >
                {["File", "Edit", "View", "Tools", "Help"].map(
                  (menuItem) => (
                    <button
                      key={menuItem}
                      type="button"
                      className="contact-manager__menu-button"
                    >
                      {menuItem}
                    </button>
                  ),
                )}
              </nav>

              <div
                className="contact-manager__toolbar"
                role="toolbar"
                aria-label="Contact manager controls"
              >
                {toolbarItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="contact-manager__toolbar-button"
                    onClick={() =>
                      handleToolbarAction(item.id)
                    }
                    aria-label={item.label}
                  >
                    <span
                      className="contact-manager__toolbar-icon"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="contact-manager__address-bar">
                <span className="contact-manager__address-label">
                  Address
                </span>

                <div className="contact-manager__address-field">
                  <span aria-hidden="true">📁</span>

                  <span>
                    C:\Users\Zied\Contacts
                  </span>
                </div>
              </div>

              <div className="contact-manager__workspace">
                <aside
                  className="contact-manager__sidebar"
                  aria-labelledby="contact-record-list-title"
                >
                  <div className="contact-manager__sidebar-title">
                    <span aria-hidden="true">▦</span>

                    <h3 id="contact-record-list-title">
                      Contact List
                    </h3>
                  </div>

                  <div className="contact-manager__contact-list">
                    {contactRecords.map((contact) => (
                      <ContactCard
                        key={contact.id}
                        contact={contact}
                        isSelected={
                          selectedContact.id === contact.id
                        }
                        onSelect={setSelectedContactId}
                      />
                    ))}
                  </div>

                  <div className="contact-manager__sidebar-summary">
                    <strong>
                      {contactRecords.length} records
                    </strong>

                    <span>
                      Professional contact directory
                    </span>
                  </div>
                </aside>

                <main className="contact-manager__main">
                  <section
                    id="contact-record-properties"
                    className="contact-properties"
                    aria-live="polite"
                    aria-labelledby="selected-contact-title"
                  >
                    <div className="contact-properties__titlebar">
                      <span>
                        Contact Record Properties
                      </span>

                      <span>Read Only</span>
                    </div>

                    <div className="contact-properties__heading">
                      <div
                        className="contact-properties__large-icon"
                        aria-hidden="true"
                      >
                        <span>
                          {selectedContact.type === "Email" && "✉"}
                          {selectedContact.type ===
                            "LinkedIn" && "in"}
                          {selectedContact.type ===
                            "GitHub" && "GH"}
                          {selectedContact.type ===
                            "Upwork" && "UP"}
                          {selectedContact.type ===
                            "Location" && "⌖"}
                        </span>
                      </div>

                      <div>
                        <p className="contact-properties__file-name">
                          {selectedContact.fileName}
                        </p>

                        <h3 id="selected-contact-title">
                          {selectedContact.title}
                        </h3>

                        <p>
                          {selectedContact.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="contact-properties__divider" />

                    <div className="contact-properties__content">
                      <div className="contact-properties__group">
                        <h4>Description</h4>

                        <div className="contact-properties__document">
                          <p>
                            {selectedContact.description}
                          </p>
                        </div>
                      </div>

                      <div className="contact-properties__group">
                        <h4>Record Information</h4>

                        <dl className="contact-properties__details">
                          {selectedContact.details.map(
                            (detail) => (
                              <div
                                key={detail.label}
                                className="contact-properties__detail-row"
                              >
                                <dt>{detail.label}</dt>
                                <dd>{detail.value}</dd>
                              </div>
                            ),
                          )}
                        </dl>
                      </div>

                      <div className="contact-properties__group">
                        <h4>
                          Availability and Services
                        </h4>

                        <ul className="contact-properties__highlights">
                          {selectedContact.highlights.map(
                            (highlight) => (
                              <li key={highlight}>
                                <span aria-hidden="true">
                                  ✓
                                </span>

                                <span>{highlight}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {selectedContact.action && (
                        <div className="contact-properties__actions">
                          <button
                            type="button"
                            className="retro-button"
                            onClick={() =>
                              handleContactAction(
                                selectedContact,
                              )
                            }
                          >
                            {selectedContact.action.label}
                          </button>
                        </div>
                      )}
                    </div>
                  </section>

                  <section
                    id="contact-message-form"
                    className="contact-form-panel"
                    aria-labelledby="contact-form-title"
                  >
                    <div className="contact-form-panel__titlebar">
                      <span aria-hidden="true">✉</span>

                      <h3 id="contact-form-title">
                        Send New Message
                      </h3>
                    </div>

                    <form
                      className="contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="contact-form__row">
                        <label htmlFor="contact-name">
                          Name
                        </label>

                        <input
                          id="contact-name"
                          name="name"
                          className="retro-input"
                          type="text"
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="contact-form__row">
                        <label htmlFor="contact-email">
                          Email
                        </label>

                        <input
                          id="contact-email"
                          name="email"
                          className="retro-input"
                          type="email"
                          autoComplete="email"
                          required
                        />
                      </div>

                      <div className="contact-form__row">
                        <label htmlFor="contact-subject">
                          Subject
                        </label>

                        <input
                          id="contact-subject"
                          name="subject"
                          className="retro-input"
                          type="text"
                          required
                        />
                      </div>

                      <div className="contact-form__row">
                        <label htmlFor="contact-message">
                          Message
                        </label>

                        <textarea
                          id="contact-message"
                          name="message"
                          className="retro-textarea"
                          required
                        />
                      </div>

                      <div className="contact-form__footer">
                        <span>{formStatus}</span>

                        <button
                          type="submit"
                          className="retro-button contact-form__submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </section>
                </main>
              </div>

              <footer className="contact-manager__statusbar">
                <span>
                  {contactRecords.length} contact record(s)
                </span>

                <span>{copyStatus}</span>

                <span>
                  Selected: {selectedContact.type}
                </span>
              </footer>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;