import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ImgCat from "../../common/BackgroundImg/ImgCat/ImgCat";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import s from "./ContactsView.module.css";
import { SecondLevelTitle } from "../../common/SecondLevelTitle/SecondLevelTitle";

export default function ContactsView() {
  return (
    <>
      <h1 className={s.title}>Phone book</h1>
      <ImgCat />
      <ContactForm />
      <SecondLevelTitle message="Contacts" />
      <SearchFilter />
      <ContactList />
    </>
  );
}
