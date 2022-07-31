import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../../redux/Auth/auth-selectors";
import authOperations from "../../../redux/Auth/auth-operations";

import s from "./UserMenu.module.css";
import Button from "../../../common/Button/Button";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <span className={s.name}>Hi, {userEmail}</span>
      <Button
        message="Exit"
        type="submit"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </div>
  );
}
