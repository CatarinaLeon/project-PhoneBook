import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from "./contactsActions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch(getContactsSuccess(data));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch((error) => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, getContacts };

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../services/api";

// const API_ENDPOINT = "contacts";

// const getContacts = createAsyncThunk("contacts/getContactsStatus", () =>
//   api.getData(API_ENDPOINT)
// );

// const addContact = createAsyncThunk("contacts/addContactStatus", (newContact) =>
//   api.saveItem(API_ENDPOINT, newContact)
// );

// const deleteContact = createAsyncThunk("contacts/deleteContactStatus", (id) =>
//   api.deleteItem(API_ENDPOINT, id)
// );

// export { getContacts, addContact, deleteContact };
