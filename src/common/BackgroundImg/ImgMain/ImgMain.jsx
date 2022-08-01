import s from "./ImgMain.module.css";
import { useContext } from "react";
import { ThemeContext, themes } from "../../ThemeSwitcher/themeContext";

export const ImgMain = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === themes.light ? s.lightTheme : s.darkTheme}></div>
  );
};
