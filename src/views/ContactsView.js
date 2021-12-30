import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsView() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}
