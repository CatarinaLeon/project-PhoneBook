import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import authSelectors from "../../../redux/Auth/auth-selectors";
import authOperations from "../../../redux/Auth/auth-operations";
import Button from "../../../common/Button/Button";

import s from "./UserMenu.module.css";

export default function UserMenu() {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <span className={s.name}>
        {t("header.userMenu.welcome")}, {userEmail}
      </span>
      <Button
        message={t("header.userMenu.btn")}
        type="submit"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </div>
  );
}
