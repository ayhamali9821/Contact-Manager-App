import ContactItem from "./Item";
import "./List.css";


function ContactList({ contacts, deleteContact }) {
  return (
    <div  className="contacts-box">
      <h2>Contacts:</h2>

      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              index={index}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;