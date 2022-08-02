import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  const { t } = useTranslation();
  return (
    <div className={s.navContainer}>
      <NavLink
        to="/register"
        className={s.link}
        activeStyle={{ color: "#fb0000ed" }}
      >
        {t("header.authNav.reg")}
      </NavLink>
      <NavLink
        to="/login"
        className={s.link}
        activeStyle={{ color: "#fb0000ed" }}
      >
        {t("header.authNav.log")}
      </NavLink>
    </div>
  );
}
