import PropTypes from "prop-types";

export default function Notice({ message }) {
  return <h3>{message}</h3>;
}

Notice.propTypes = {
  message: PropTypes.string.isRequired,
};
