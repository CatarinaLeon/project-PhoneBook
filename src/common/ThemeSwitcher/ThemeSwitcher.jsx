import { useContext } from "react";
import { ThemeContext, themes } from "../../common/ThemeSwitcher/themeContext";

import s from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <form className={s.themeBox}>
      <label className={s.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === themes.dark}
        />
        <span className={`${s.slider} ${s.round}`}></span>
      </label>
    </form>
  );
}
