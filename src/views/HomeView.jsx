import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    width: 370,
    marginTop: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: 400,
    fontSize: 36,
    textAlign: "center",
    marginTop: 70,
  },
  link: {
    color: "#E84A5F",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>
      Create your phone book{" "}
      <span role="img" aria-label="Welcome icon">
        📝
      </span>
    </h2>
    <p style={styles.subtitle}>
      To use our service,{" "}
      <NavLink to="/register" style={styles.link}>
        Register
      </NavLink>{" "}
      or{" "}
      <NavLink to="/login" style={styles.link}>
        Sign in
      </NavLink>{" "}
      to your account.
    </p>
  </div>
);

export default HomeView;
