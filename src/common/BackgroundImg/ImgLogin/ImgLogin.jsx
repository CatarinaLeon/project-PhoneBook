import s from "./ImgLodin.module.css";
import { useContext } from "react";
import { ThemeContext, themes } from "../../ThemeSwitcher/themeContext";

export default function ImgLogin() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}></div>
  );
}
