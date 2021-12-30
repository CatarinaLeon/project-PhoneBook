import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/Auth/auth-operations";

const styles = {
  form: {
    width: 320,
    margin: "auto",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  button: {
    display: "block",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    outline: "none",
    padding: "8px 24px",
    margin: "auto",
    backgroundColor: "#06196eab",
    color: "white",
    borderRadius: 5,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" style={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
