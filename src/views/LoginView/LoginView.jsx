import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import authOperations from "../../redux/Auth/auth-operations";

import SecondLevelTitle from "../../common/SecondLevelTitle/SecondLevelTitle";
import Button from "../../common/Button/Button";
import ImgLogin from "../../common/BackgroundImg/ImgLogin/ImgLogin";

import s from "./LoginView.module.css";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <SecondLevelTitle message={t("header.authNav.log")} />
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          {t("pages.log.labelMail")}
          <input
            type="email"
            name="email"
            value={email}
            placeholder={t("pages.log.placeholderMail")}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          {t("pages.log.labelPass")}

          <input
            type="password"
            name="password"
            value={password}
            placeholder={t("pages.log.placeholderPass")}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <Button
          type="submit"
          message={t("pages.log.btn")}
          className={s.button}
        />
      </form>
      <ImgLogin />
    </>
  );
}
