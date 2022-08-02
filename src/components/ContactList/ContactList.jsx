import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import contactsOperations from "../../redux/contactSlice/contactsOperations";
import contactsSelectors from "../../redux/contactSlice/contactsSelectors";

import Notice from "../../common/Notice/Notice";
import Button from "../../common/Button/Button";
import ImgList from "../../common/BackgroundImg/ImgList/ImgList";
import { useTranslation } from "react-i18next";

import s from "./ContactList.module.css";

const ContactList = () => {
  const { t } = useTranslation();
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
                <Notice message={t("contactList.messageNoName")} />
              </li>
            ) : (
              visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={`${s.listItem} ${s.listItemMessage}`}>
                  <p className={s.listItemText}>{name}</p>
                  <p className={s.listItemTextNumber}>{number} </p>
                  <Button
                    message={t("contactList.btn")}
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
            <Notice message={t("contactList.messageList")} />
          </li>
        )}
      </ul>
      <ImgList />
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
