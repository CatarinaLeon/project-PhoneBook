import styles from "./Section.module.css";
import PropTypes from "prop-types";

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};
