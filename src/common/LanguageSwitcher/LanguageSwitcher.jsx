import { useTranslation } from "react-i18next";
import ukFlagIcon from "../../images/flag-ukrainian.png";
import enFlagIcon from "../../images/flag-english.png";
import s from "./LanguageSwitcher.module.css";

const languages = {
  en: { icon: enFlagIcon, nativeName: "English" },
  uk: { icon: ukFlagIcon, nativeName: "Українська" },
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(languages).map((lng) => (
        <div key={lng} className={s.btnWrapper}>
          <button
            className={i18n.resolvedLanguage === lng ? s.active : s.button}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            <img
              src={languages[lng].icon}
              alt={languages[lng].nativeName}
              width="50"
            />
          </button>
        </div>
      ))}
    </div>
  );
}
