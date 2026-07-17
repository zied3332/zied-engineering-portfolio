import {
  useMemo,
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

type ComposerStatus =
  | "Message ready"
  | "Opening email application"
  | "Contact copied"
  | "Copy failed";

function ContactSection() {
  const [selectedContactId, setSelectedContactId] = useState(
    contactRecords[0]?.id ?? 0
  );

  const [composerStatus, setComposerStatus] =
    useState<ComposerStatus>("Message ready");

  const selectedContact = useMemo(
    () =>
      contactRecords.find(
        (contact) => contact.id === selectedContactId
      ) ?? contactRecords[0],
    [selectedContactId]
  );

  const emailContact =
    contactRecords.find(
      (contact) => contact.icon === "email"
    ) ?? contactRecords[0];

  const recipientEmail =
    emailContact?.action?.type === "copy"
      ? emailContact.action.value
      : emailContact?.details[0]?.value ??
        "ziedalimi2244@gmail.com";

  const handleSelectContact = (contactId: number) => {
    setSelectedContactId(contactId);
    setComposerStatus("Message ready");
  };

  const handleCopyContact = async (
    contact: ContactRecord
  ) => {
    const value =
      contact.action?.type === "copy"
        ? contact.action.value
        : contact.details[0]?.value;

    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setComposerStatus("Contact copied");
    } catch {
      setComposerStatus("Copy failed");
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

    window.open(
      contact.action.href,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleNewMessage = () => {
    const form =
      document.getElementById("contact-compose-form");

    form?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    const subjectInput =
      document.getElementById("contact-subject");

    if (subjectInput instanceof HTMLInputElement) {
      subjectInput.focus();
    }

    setComposerStatus("Message ready");
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const name = String(
      formData.get("name") ?? ""
    ).trim();

    const email = String(
      formData.get("email") ?? ""
    ).trim();

    const subject = String(
      formData.get("subject") ?? ""
    ).trim();

    const message = String(
      formData.get("message") ?? ""
    ).trim();

    const emailSubject = encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`
    );

    const emailBody = encodeURIComponent(
      [
        `Hello Zied,`,
        "",
        message,
        "",
        `From: ${name}`,
        `Reply email: ${email}`,
      ].join("\n")
    );

    setComposerStatus(
      "Opening email application"
    );

    window.location.href =
      `mailto:${recipientEmail}` +
      `?subject=${emailSubject}` +
      `&body=${emailBody}`;
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

        <h2 id="contact-heading">
          Contact
        </h2>

        <p>
          Send a message about freelance projects,
          internships, software development, or
          engineering opportunities.
        </p>
      </header>

      <RetroWindow
        title="New Message - Outlook Express"
        className="contact-mail"
      >
        <nav
          className="contact-mail__menu"
          aria-label="Message menu"
        >
          <button type="button">
            <span>F</span>ile
          </button>

          <button type="button">
            <span>E</span>dit
          </button>

          <button type="button">
            <span>V</span>iew
          </button>

          <button type="button">
            <span>I</span>nsert
          </button>

          <button type="button">
            <span>H</span>elp
          </button>
        </nav>

        <div
          className="contact-mail__toolbar"
          role="toolbar"
          aria-label="Message controls"
        >
          <button
            type="button"
            className="contact-mail__toolbar-button"
            onClick={handleNewMessage}
          >
            <span
              className="contact-mail__toolbar-icon contact-mail__toolbar-icon--new"
              aria-hidden="true"
            />

            <span>New</span>
          </button>

          <button
            type="submit"
            form="contact-compose-form"
            className="contact-mail__toolbar-button"
          >
            <span
              className="contact-mail__toolbar-icon contact-mail__toolbar-icon--send"
              aria-hidden="true"
            />

            <span>Send</span>
          </button>

          <span
            className="contact-mail__toolbar-separator"
            aria-hidden="true"
          />

          <button
            type="button"
            className="contact-mail__toolbar-button"
            onClick={() =>
              selectedContact &&
              void handleCopyContact(
                selectedContact
              )
            }
          >
            <span
              className="contact-mail__toolbar-icon contact-mail__toolbar-icon--copy"
              aria-hidden="true"
            />

            <span>Copy</span>
          </button>

          <button
            type="button"
            className="contact-mail__toolbar-button"
            onClick={() =>
              selectedContact &&
              handleOpenContact(selectedContact)
            }
            disabled={!selectedContact?.action}
          >
            <span
              className="contact-mail__toolbar-icon contact-mail__toolbar-icon--open"
              aria-hidden="true"
            />

            <span>Open</span>
          </button>
        </div>

        <div className="contact-mail__workspace">
          <aside
            className="contact-mail__address-book"
            aria-labelledby="contact-address-book-title"
          >
            <header className="contact-mail__address-header">
              <span
                className="contact-mail__address-icon"
                aria-hidden="true"
              />

              <div>
                <h3 id="contact-address-book-title">
                  Address Book
                </h3>

                <span>
                  {contactRecords.length} contacts
                </span>
              </div>
            </header>

            <div className="contact-mail__contact-list">
              {contactRecords.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  isSelected={
                    selectedContact?.id ===
                    contact.id
                  }
                  onSelect={handleSelectContact}
                />
              ))}
            </div>

            {selectedContact && (
              <section
                className="contact-mail__selected-contact"
                aria-live="polite"
              >
                <span className="contact-mail__selected-label">
                  Selected contact
                </span>

                <strong>
                  {selectedContact.title}
                </strong>

                <p>
                  {selectedContact.description}
                </p>

                <dl>
                  {selectedContact.details
                    .slice(0, 2)
                    .map((detail) => (
                      <div key={detail.label}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                </dl>

                {selectedContact.action && (
                  <button
                    type="button"
                    className="retro-button"
                    onClick={() =>
                      handleOpenContact(
                        selectedContact
                      )
                    }
                  >
                    {selectedContact.action.label}
                  </button>
                )}
              </section>
            )}
          </aside>

          <main className="contact-mail__composer">
            <div className="contact-mail__message-fields">
              <div className="contact-mail__field-row">
                <label htmlFor="contact-recipient">
                  To:
                </label>

                <div className="contact-mail__recipient-field">
                  <span
                    className="contact-mail__recipient-icon"
                    aria-hidden="true"
                  />

                  <input
                    id="contact-recipient"
                    type="email"
                    value={recipientEmail}
                    readOnly
                    aria-readonly="true"
                  />
                </div>
              </div>

              <div className="contact-mail__field-row">
                <label htmlFor="contact-subject">
                  Subject:
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  form="contact-compose-form"
                  className="retro-input"
                  type="text"
                  placeholder="Project inquiry"
                  required
                />
              </div>
            </div>

            <form
              id="contact-compose-form"
              className="contact-compose"
              onSubmit={handleSubmit}
            >
              <div className="contact-compose__sender-fields">
                <div className="contact-compose__field">
                  <label htmlFor="contact-name">
                    Your name
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

                <div className="contact-compose__field">
                  <label htmlFor="contact-email">
                    Your email
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
              </div>

              <div className="contact-compose__formatbar">
                <select
                  aria-label="Message font"
                  defaultValue="Arial"
                >
                  <option>Arial</option>
                  <option>Times New Roman</option>
                  <option>Courier New</option>
                </select>

                <select
                  aria-label="Message font size"
                  defaultValue="10"
                >
                  <option>8</option>
                  <option>10</option>
                  <option>12</option>
                  <option>14</option>
                </select>

                <button
                  type="button"
                  aria-label="Bold"
                >
                  <strong>B</strong>
                </button>

                <button
                  type="button"
                  aria-label="Italic"
                >
                  <em>I</em>
                </button>

                <button
                  type="button"
                  aria-label="Underline"
                >
                  <u>U</u>
                </button>
              </div>

              <textarea
                id="contact-message"
                name="message"
                className="contact-compose__message"
                placeholder={[
                  "Hello Zied,",
                  "",
                  "I would like to discuss...",
                ].join("\n")}
                required
              />

              <footer className="contact-compose__footer">
                <span>
                  Messages open in your default
                  email application.
                </span>

                <button
                  type="submit"
                  className="retro-button contact-compose__send"
                >
                  Send Message
                </button>
              </footer>
            </form>
          </main>
        </div>

        <footer
          className="contact-mail__statusbar"
          role="status"
        >
          <span>
            {contactRecords.length} contacts
          </span>

          <span>{composerStatus}</span>

          <span>
            Selected:{" "}
            {selectedContact?.type ?? "None"}
          </span>
        </footer>
      </RetroWindow>
    </section>
  );
}

export default ContactSection;
