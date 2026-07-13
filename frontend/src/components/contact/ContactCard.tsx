import type {
  ContactIcon,
  ContactRecord,
} from "../../data/contact";

type ContactCardProps = {
  contact: ContactRecord;
  isSelected: boolean;
  onSelect: (contactId: number) => void;
};

function ContactIconGraphic({
  icon,
}: {
  icon: ContactIcon;
}) {
  switch (icon) {
    case "email":
      return <span aria-hidden="true">✉</span>;

    case "linkedin":
      return <span aria-hidden="true">in</span>;

    case "github":
      return <span aria-hidden="true">GH</span>;

    case "upwork":
      return <span aria-hidden="true">UP</span>;

    case "location":
      return <span aria-hidden="true">⌖</span>;

    default:
      return <span aria-hidden="true">■</span>;
  }
}

function ContactCard({
  contact,
  isSelected,
  onSelect,
}: ContactCardProps) {
  return (
    <button
      type="button"
      className={`contact-card ${
        isSelected ? "contact-card--selected" : ""
      }`}
      onClick={() => onSelect(contact.id)}
      aria-pressed={isSelected}
      aria-label={`Open ${contact.type} contact record`}
    >
      <span className="contact-card__icon">
        <ContactIconGraphic icon={contact.icon} />
      </span>

      <span className="contact-card__content">
        <span className="contact-card__title">
          {contact.type}
        </span>

        <span className="contact-card__subtitle">
          {contact.subtitle}
        </span>
      </span>
    </button>
  );
}

export default ContactCard;