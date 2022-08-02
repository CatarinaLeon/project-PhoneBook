import { Suspense } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import authSelectors from "../../../redux/Auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import ThemeSwitcher from "../../../common/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../../../common/LanguageSwitcher/LanguageSwitcher";

import s from "./HeaderNav.module.css";

function HeaderNav() {
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

export default HeaderNav;

// // import { memo } from "react";
// import { Suspense } from "react";
// // import ThemeSwitcher from "../../../common/ThemeSwitcher/ThemeSwitcher";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import authSelectors from "../../../redux/Auth/auth-selectors";
// // import { useContext } from "react";
// // import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

// import UserMenu from "../UserMenu/UserMenu";
// import AuthNav from "../AuthNav/AuthNav";
// import s from "./HeaderNav.module.css";

// function HeaderNav() {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <header className={s.header}>
//       <div className={s.headerNav}>
//         {!isLoggedIn ? (
//           <NavLink
//             to="/"
//             exact
//             className={s.headerLink}
//             activeClassName={s.activeStyle}
//             // activeStyle={{ color: "#fb0000ed" }}
//           >
//             Main
//           </NavLink>
//         ) : (
//           <NavLink
//             to="/contacts"
//             className={s.headerLink}
//             activeClassName={s.activeStyle}
//             // activeStyle={{ color: "#fb0000ed" }}
//           >
//             Contacts
//           </NavLink>
//         )}
//         {!isLoggedIn ? <AuthNav /> : <UserMenu />}
//       </div>
//     </header>
//   );
// }

// export default HeaderNav;
// // export default memo(HeaderNav);
