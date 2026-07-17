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
  return (
    <span
      className={`contact-card__graphic contact-card__graphic--${icon}`}
      aria-hidden="true"
    >
      {icon === "linkedin" && "in"}
      {icon === "github" && "GH"}
      {icon === "upwork" && "up"}
    </span>
  );
}

function ContactCard({
  contact,
  isSelected,
  onSelect,
}: ContactCardProps) {
  return (
    <button
      type="button"
      className={
        isSelected
          ? "contact-card contact-card--selected"
          : "contact-card"
      }
      onClick={() => onSelect(contact.id)}
      aria-pressed={isSelected}
      aria-label={`Select ${contact.type} contact`}
    >
      <span className="contact-card__icon">
        <ContactIconGraphic
          icon={contact.icon}
        />
      </span>

      <span className="contact-card__content">
        <strong className="contact-card__title">
          {contact.type}
        </strong>

        <span className="contact-card__subtitle">
          {contact.subtitle}
        </span>
      </span>

      <span
        className="contact-card__selection-arrow"
        aria-hidden="true"
      />
    </button>
  );
}

export default ContactCard;
