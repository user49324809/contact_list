import React, { useState } from "react";

const ContactItem = ({ contact, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const handleUpdate = () => {
    onUpdate({ ...contact, name, phone });
    setEditing(false);
  };

  return (
    <div className="contact-item">
      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleUpdate}>💾</button>
</>
      ) : (
        <>
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
          <button onClick={() => setEditing(true)}>✏️</button>
          <button onClick={() => onDelete(contact.id)}>🗑️</button>
        </>
      )}
    </div>
  );
};

export default ContactItem;