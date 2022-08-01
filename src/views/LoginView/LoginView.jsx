import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../common/Button/Button";
import { SecondLevelTitle } from "../../common/SecondLevelTitle/SecondLevelTitle";
import authOperations from "../../redux/Auth/auth-operations";
import ImgLogin from "../../common/BackgroundImg/ImgLogin/ImgLogin";

import s from "./LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <SecondLevelTitle message="Login" />
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <Button type="submit" message="Sign In" className={s.button} />
      </form>
      <ImgLogin />
    </>
  );
}
