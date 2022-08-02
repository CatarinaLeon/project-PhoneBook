import { useContext } from "react";
import { ThemeContext, themes } from "../../ThemeSwitcher/themeContext";
import s from "./ImgList.module.css";

export default function ImgList() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={theme === themes.light ? s.lightTheme : s.darkTheme}
      ></div>
    </>
  );
}
