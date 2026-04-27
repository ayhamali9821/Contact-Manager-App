import "./Item.css";

function ContactItem({ contact, index, deleteContact }) {
  return (
    <li className="contact-item">
      <strong>
        {index + 1}. {contact.name}
      </strong>{" "}
      - {contact.email}
      <button className="delete-btn" onClick={() => deleteContact(index)}>
        Delete
      </button>

    </li>
  );
}

export default ContactItem;