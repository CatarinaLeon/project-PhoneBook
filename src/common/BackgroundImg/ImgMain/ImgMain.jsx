import { useContext } from "react";
import { ThemeContext, themes } from "../../ThemeSwitcher/themeContext";
import s from "./ImgMain.module.css";

export default function ImgMain() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}></div>
  );
}
