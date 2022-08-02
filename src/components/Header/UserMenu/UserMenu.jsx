import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../redux/Auth/auth-selectors";
import authOperations from "../../../redux/Auth/auth-operations";

import s from "./UserMenu.module.css";
import Button from "../../../common/Button/Button";
import { useTranslation } from "react-i18next";

export default function UserMenu() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

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
