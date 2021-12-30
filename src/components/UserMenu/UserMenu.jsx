import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/Auth/auth-selectors";
import authOperations from "../../redux/Auth/auth-operations";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    display: "block",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    outline: "none",
    padding: "3px 15px",
    margin: "auto",
    // eslint-disable-next-line no-dupe-keys
    border: "1px solid #06196eab",
    color: "black",
    borderRadius: 5,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Привет, {userEmail}</span>
      <button
        type="submit"
        style={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}
