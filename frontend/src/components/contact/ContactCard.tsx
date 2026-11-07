import type { ContactRecord } from "../../data/contact";

type ContactCardProps = {
  contact: ContactRecord;
  isSelected: boolean;
  onSelect: (contactId: number) => void;
};

function ContactCard({ contact, isSelected, onSelect }: ContactCardProps) {
  return (
    <button type="button" className="contact-card" onClick={() => onSelect(contact.id)}
      aria-pressed={isSelected} aria-label={"Select " + contact.type + " contact"}>
      <strong>{contact.type}</strong>
      <span>{contact.subtitle}</span>
    </button>
  );
}

export default ContactCard;
