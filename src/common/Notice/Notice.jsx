import PropTypes from "prop-types";
import s from "./Notice.module.css";

export default function Notice({ message, className }) {
  return <h3 className={`${s.title} ${className}`}>{message}</h3>;
}

Notice.propTypes = {
  message: PropTypes.string.isRequired,
};
