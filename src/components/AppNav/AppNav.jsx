import { Suspense } from "react";
import ThemeSwitcher from "../../common/ThemeSwitcher/ThemeSwitcher";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/Auth/auth-selectors";
import UserMenu from "../Header/UserMenu/UserMenu";
import AuthNav from "../Header/AuthNav/AuthNav";
import s from "./AppNav.module.css";
import LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function AppNav() {
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

export default AppNav;
