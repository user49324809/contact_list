import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete, onUpdate }) => {
  if (contacts.length === 0) {
    return <p>Нет контактов</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default ContactList;