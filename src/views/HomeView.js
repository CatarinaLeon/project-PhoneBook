import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    // display: 'flex',
    alignItems: "center",
    // justifyContent: 'center',
    marginTop: 70,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
  title2: {
    fontWeight: 400,
    fontSize: 36,
    textAlign: "center",
    marginTop: 70,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Создайте свою <br />
      телефонную книгу <br />{" "}
      <span role="img" aria-label="Иконка приветствия">
        📝
      </span>
      <p style={styles.title2}>
        Чтобы воспользоваться нашим сервисом, <br />
        <NavLink to="/register">Зарегистрируйтесь</NavLink> <br /> или{" "}
        <NavLink to="/login">Войдите</NavLink> <br />в ваш аккаунт.
      </p>
    </h1>
  </div>
);

export default HomeView;
