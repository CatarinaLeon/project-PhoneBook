import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import authSelectors from "../../redux/Auth/auth-selectors";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
    padding: "5px 80px",
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
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
        <NavLink
          to="/"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Главная
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Контакты
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
export default memo(AppBar);
