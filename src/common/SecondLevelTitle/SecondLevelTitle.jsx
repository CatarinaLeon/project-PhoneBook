import PropTypes from "prop-types";
import s from "./SecondLevelTitle.module.css";

export const SecondLevelTitle = ({ message, className }) => {
  return <h2 className={`${s.title} ${className}`}>{message}</h2>;
};

SecondLevelTitle.propTypes = {
  message: PropTypes.string.isRequired,
};
