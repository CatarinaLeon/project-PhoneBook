import { NavLink } from "react-router-dom";
import { SecondLevelTitle } from "../../common/SecondLevelTitle/SecondLevelTitle";
import { ImgMain } from "../../common/BackgroundImg/ImgMain/ImgMain";
import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";
import s from "./HomeView.module.css";
import { useTranslation } from "react-i18next";

export default function HomeView() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
      <h2 className={s.homeText}>{t("pages.homeText")}</h2>
      <SecondLevelTitle message={t("pages.homeTitle")} />
      <p className={s.subtitle}>{t("pages.subtitle")}</p>
      <NavLink to="/register" className={s.link}>
        {t("pages.titleReg")}
      </NavLink>
      <p className={s.subtitle}>{t("pages.subtitleOr")}</p>
      <NavLink to="/login" className={s.link}>
        {t("pages.titleLog")}
      </NavLink>
      <p className={s.subtitle}>{t("pages.subtitleAccount")}</p>
      <ImgMain />
    </div>
  );
}
