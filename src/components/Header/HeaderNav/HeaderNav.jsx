import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import authSelectors from "../../../redux/Auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import ThemeSwitcher from "../../../common/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../../../common/LanguageSwitcher/LanguageSwitcher";

import s from "./HeaderNav.module.css";

export default function HeaderNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { t } = useTranslation();

  return (
    <header className={s.header}>
      <ThemeSwitcher />
      <Suspense fallback={<h2>loadding</h2>}>
        <LanguageSwitcher />
      </Suspense>
      <div className={s.headerNav}>
        {!isLoggedIn ? (
          <NavLink
            to="/"
            exact
            className={s.headerLink}
            activeStyle={{ color: "#fb0000ed" }}
          >
            {t("header.nav.main")}
          </NavLink>
        ) : (
          <NavLink
            to="/contacts"
            className={s.headerLink}
            activeStyle={{ color: "#fb0000ed" }}
          >
            {t("header.nav.contacts")}
          </NavLink>
        )}
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </div>
    </header>
  );
}
