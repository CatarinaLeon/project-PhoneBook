import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../../redux/contactSlice/contactsOperations";
import contactsSelectors from "../../redux/contactSlice/contactsSelectors";

import Notice from "../../common/Notice/Notice";
import Button from "../../common/Button/Button";

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

  return (
    <>
      <ul className={s.list}>
        {allContacts.length > 0 ? (
          <>
            {visibleContacts.length === 0 ? (
              <li className={`${s.listItem} ${s.listItemMessage}`}>
                <Notice message="No contact found with this name" />
              </li>
            ) : (
              visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={`${s.listItem} ${s.listItemMessage}`}>
                  <p className={s.listItemText}>{name}</p>
                  <p className={s.listItemTextNumber}>{number} </p>
                  <Button
                    message="Delete"
                    name={id}
                    onClick={() =>
                      dispatch(contactsOperations.deleteContact(id))
                    }
                  />
                </li>
              ))
            )}
          </>
        ) : (
          <li className={`${s.listItem} ${s.listItemMessage}`}>
            <Notice message="Contact list is empty" />
          </li>
        )}
      </ul>
    </>
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
