import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import contactsOperations from "../../redux/contactSlice/contactsOperations";
import contactsSelectors from "../../redux/contactSlice/contactsSelectors";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) =>
    contactsSelectors.getAllContacts(state)
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  return (
    <div className={s.contactform}>
      <form onSubmit={handleSubmit}>
        <label className={s.contactLabel}>
          Name :
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            className={s.contactInput1}
          />
        </label>
        <label htmlFor="" className={s.contactLabel}>
          Number :
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            className={s.contactInput}
          />
        </label>
        <button type="submit" className={s.contactBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
export default ContactForm;
