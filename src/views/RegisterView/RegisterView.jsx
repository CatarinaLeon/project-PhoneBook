import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import authOperations from "../../redux/Auth/auth-operations";

import SecondLevelTitle from "../../common/SecondLevelTitle/SecondLevelTitle";
import Button from "../../common/Button/Button";
import ImgRegister from "../../common/BackgroundImg/ImgRegister/ImgRegister";

import s from "./RegisterView.module.css";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <SecondLevelTitle message={t("header.authNav.reg")} />
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          {t("pages.reg.labelName")}
          <input
            type="text"
            name="name"
            value={name}
            placeholder={t("pages.reg.placeholderName")}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          {t("pages.reg.labelMail")}
          <input
            type="email"
            name="email"
            value={email}
            placeholder={t("pages.reg.placeholderMail")}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          {t("pages.reg.labelPass")}
          <input
            type="password"
            name="password"
            value={password}
            placeholder={t("pages.reg.placeholderPass")}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <Button
          type="submit"
          message={t("pages.reg.btn")}
          className={s.button}
        />
      </form>
      <ImgRegister />
    </>
  );
}
