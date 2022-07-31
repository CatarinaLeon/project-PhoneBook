import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../../redux/Auth/auth-selectors";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./Header.module.css";

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        {!isLoggedIn ? (
          <NavLink
            to="/"
            exact
            className={s.headerLink}
            activeStyle={{ color: "#fb0000ed" }}
          >
            Main
          </NavLink>
        ) : (
          <NavLink
            to="/contacts"
            className={s.headerLink}
            activeStyle={{ color: "#fb0000ed" }}
          >
            Contacts
          </NavLink>
        )}
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </nav>
    </header>
  );
}

export default memo(Header);
