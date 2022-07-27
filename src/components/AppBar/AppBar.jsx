import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/Auth/auth-selectors";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "./AuthNav";

const styles = {
  header: {
    width: 600,
    padding: "5px 80px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #06196eab",
    borderRadius: 5,
  },
  link: {
    padding: 12,
    display: "inline-block",
    textDecoration: "none",
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <nav>
        {!isLoggedIn ? (
          <NavLink
            to="/"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Main
          </NavLink>
        ) : (
          <NavLink
            to="/contacts"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Contacts
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default memo(AppBar);
