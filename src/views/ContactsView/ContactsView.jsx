import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import SecondLevelTitle from "../../common/SecondLevelTitle/SecondLevelTitle";
import ImgCat from "../../common/BackgroundImg/ImgCat/ImgCat";

import s from "./ContactsView.module.css";

export default function ContactsView() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={s.title}>{t("phonebook.title")}</h1>
      <ImgCat />
      <ContactForm />
      <SecondLevelTitle message={t("phonebook.subtitle")} />
      <SearchFilter />
      <ContactList />
    </>
  );
}
