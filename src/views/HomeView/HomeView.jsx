import { NavLink } from "react-router-dom";
import { SecondLevelTitle } from "../../common/SecondLevelTitle/SecondLevelTitle";
import { ImgMain } from "../../common/BackgroundImg/ImgMain/ImgMain";

import s from "./HomeView.module.css";

const HomeView = () => (
  <div className={s.homeView}>
    <h2 className={s.homeText}>Create your</h2>
    <SecondLevelTitle message="PHONE BOOK" />
    <p className={s.subtitle}>To use our service</p>
    <NavLink to="/register" className={s.link}>
      Register
    </NavLink>
    <p className={s.subtitle}>or</p>
    <NavLink to="/login" className={s.link}>
      Sign in
    </NavLink>
    <p className={s.subtitle}>to your account</p>
    <ImgMain />
  </div>
);

export default HomeView;
