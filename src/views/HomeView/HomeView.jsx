import s from "./HomeView.module.css";
import { NavLink } from "react-router-dom";
import { SecondLevelTitle } from "../../common/SecondLevelTitle/SecondLevelTitle";

const HomeView = () => (
  <div className={s.homeView}>
    <SecondLevelTitle message="Create your phone book" />
    {/* <span role="img" aria-label="Welcome icon">
        📝
      </span> */}
    <p className={s.subtitle}>To use our service</p>
    <NavLink to="/register" className={s.link}>
      Register
    </NavLink>
    <p className={s.subtitle}>or</p>
    <NavLink to="/login" className={s.link}>
      Sign in
    </NavLink>
    <p className={s.subtitle}>to your account. </p>
  </div>
);

export default HomeView;
