import { useState } from "react";
import ContactForm from "./Components/Form";
import ContactList from "./Components/List";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="app-container">
      <h1>Contact Manager App</h1>

      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
