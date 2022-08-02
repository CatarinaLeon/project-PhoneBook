import s from "./Footer.module.css";
import { ReactComponent as Feart } from "../../images/heart.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      © 2022 | {t("footer.info")}
      <Feart className={s.footerHeart} />
      {t("footer.by")}
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
};
export default Footer;
