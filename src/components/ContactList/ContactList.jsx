import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import contactsOperations from "../../redux/contactSlice/contactsOperations";
import contactsSelectors from "../../redux/contactSlice/contactsSelectors";
import SearchFilter from "../SearchFilter/SearchFilter";
import Notice from "../Notice/Notice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const allContacts = useSelector((state) =>
    contactsSelectors.getAllContacts(state)
  );

  const visibleContacts = useSelector((state) =>
    contactsSelectors.getVisibleContacts(state)
  );
  // const handleDeleteBtn = (event) => {
  //   const { name } = event.target;
  //   onClick(name);
  // };
  return (
    <div>
      <h2>Contacts</h2>
      {allContacts.length > 0 ? (
        <Fragment>
          <SearchFilter />
          <ul className={s.list}>
            {visibleContacts.length === 0 ? (
              <li className={s.itemCont}>
                <h4>Контакт с таким именем не найден</h4>
              </li>
            ) : (
              visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                  <p className={s.text}>{name} :</p>
                  <p className={s.text}>{number} </p>

                  <button
                    type="button"
                    name={id}
                    onClick={() =>
                      dispatch(contactsOperations.deleteContact(id))
                    }
                    className={s.btn}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </Fragment>
      ) : (
        <Notice message="Список контактов пустой" />
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
