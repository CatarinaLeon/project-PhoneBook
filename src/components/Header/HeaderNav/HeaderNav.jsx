// import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../../redux/Auth/auth-selectors";
// import { useContext } from "react";
// import ThemeSwitcher from "../../../common/ThemeSwitcher/ThemeSwitcher";
// import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./HeaderNav.module.css";

function HeaderNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.headerNav}>
        {!isLoggedIn ? (
          <NavLink
            to="/"
            exact
            className={s.headerLink}
            activeClassName={s.activeStyle}
            // activeStyle={{ color: "#fb0000ed" }}
          >
            Main
          </NavLink>
        ) : (
          <NavLink
            to="/contacts"
            className={s.headerLink}
            activeClassName={s.activeStyle}
            // activeStyle={{ color: "#fb0000ed" }}
          >
            Contacts
          </NavLink>
        )}
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </div>
    </header>
  );
}

export default HeaderNav;
// export default memo(HeaderNav);
