import s from "./ImgRegister.module.css";
import { useContext } from "react";
import { ThemeContext, themes } from "../../ThemeSwitcher/themeContext";

export default function ImgRegister() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}></div>
  );
}
