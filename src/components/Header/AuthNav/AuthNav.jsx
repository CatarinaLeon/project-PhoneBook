import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.navContainer}>
      <NavLink
        to="/register"
        className={s.link}
        activeStyle={{ color: "#fb0000ed" }}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={s.link}
        activeStyle={{ color: "#fb0000ed" }}
      >
        Login
      </NavLink>
    </div>
  );
}
