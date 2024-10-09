import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Feart } from "../../images/icon-heart.svg";
import s from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  const cdate = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      © {cdate} | {t("footer.info")}
      <Feart className={s.footerHeart} />
      {t("footer.by")}
      <a href="https://github.com/CatarinaLeon" className={s.footerLink}>
        Catarina Leon
      </a>
    </footer>
  );
}
