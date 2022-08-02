import s from "./ImgCat.module.css";
import { useContext } from "react";
import { ThemeContext, themes } from "../../ThemeSwitcher/themeContext";

export default function ImgCat() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={theme === themes.light ? s.lightTheme : s.darkTheme}
      ></div>
      <span
        className={theme === themes.light ? s.lightThemeCat : s.darkThemeCat}
      ></span>
    </>
  );
}