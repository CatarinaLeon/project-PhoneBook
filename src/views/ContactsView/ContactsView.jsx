import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ImgCat from "../../common/ImgCat/ImgCat";

export default function ContactsView() {
  return (
    <>
      <h1 style={{ color: "#fb0000ed", marginBottom: 30 }}>Phone book</h1>
      <ImgCat />
      <ContactForm />
      <ContactList />
    </>
  );
}
