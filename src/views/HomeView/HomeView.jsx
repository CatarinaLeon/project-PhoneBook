import { NavLink } from "react-router-dom";
import { SecondLevelTitle } from "../../common/SecondLevelTitle/SecondLevelTitle";
import { ImgMain } from "../../common/BackgroundImg/ImgMain/ImgMain";
import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import s from "./HomeView.module.css";
import React from "react";

export default function HomeView() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <h2 className={s.homeText}>Create your</h2>
      <SecondLevelTitle message="PHONE BOOK" />
      <p className={s.subtitle}>To use our service</p>
      <NavLink to="/register" className={s.link}>
        Register
      </NavLink>
      <p className={s.subtitle}>or</p>
      <NavLink to="/login" className={s.link}>
        Sign in
      </NavLink>
      <p className={s.subtitle}>to your account</p>
      <ImgMain />
    </div>
  );
}
