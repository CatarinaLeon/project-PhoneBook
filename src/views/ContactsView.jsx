import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";

export default function ContactsView() {
  return (
    <Section>
      <Container>
        <h1>Phone book</h1>
        <ContactForm />
        <ContactList />
      </Container>
    </Section>
  );
};
