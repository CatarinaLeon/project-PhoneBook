import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/Auth/auth-selectors";
import authOperations from "../../redux/Auth/auth-operations";

import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <span className={s.name}>Hi, {userEmail}</span>
      <button
        type="submit"
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
}
