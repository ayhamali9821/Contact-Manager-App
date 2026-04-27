import { useState } from "react";
import "./Form.css";



function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();//

    const newContact = {
      name,
      email,
    };

    addContact(newContact);

/////////just for clear
    setName("");
    setEmail("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Add Contact</button>
    </form>
  );

}

export default ContactForm;