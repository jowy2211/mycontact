import axios from 'axios';
import history from '../history';

export const getAllContact = () => {
  return dispatch => {
    axios
      .get(`https://simple-contact-crud.herokuapp.com/contact`)
      .then((res) => {
        dispatch(addAllContact(res.data));
      })
      .catch(err => {
        dispatch(addContactFailure(err.message));
      });
  };
};

export const getContactById = (id) => {
  return dispatch => {
    axios
      .get(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
      .then((res) => {
        dispatch(getDetailContact(res.data));
      })
      .catch(err => {
        dispatch(addContactFailure(err.message));
      });
  };
};

export const createContact = (formValues) => {
  return dispatch => {
  	dispatch(started());

    axios
      .post(`https://simple-contact-crud.herokuapp.com/contact`, formValues)
      .then((res) => {
        dispatch(addNewContact(res.data));
      })
      .catch(err => {
        dispatch(addContactFailure(err.message));
      });
    history.push('/');
  };
};

export const editContact = (id, formValues) => {
  return dispatch => {
  	dispatch(started());

    axios
      .put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, formValues)
      .then((res) => {
        dispatch(updateContact(res.data));
      })
      .catch(err => {
        dispatch(addContactFailure(err.message));
      });
  	history.push('/');
  };
};

export const deleteContact = (id) => {
  return dispatch => {
  	dispatch(started());

    axios
      .delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
      .then((res) => {
        dispatch(removeContact(id));
      })
      .catch(err => {
        dispatch(addContactFailure(err.message));
      });
    history.push('/');
  };
};

const addAllContact = (contact) => ({
  type: 'ADD_ALL_CONTACT',
  payload: contact
});

const addNewContact = (contact) => ({
	type: 'ADD_NEW_CONTACT',
	payload: contact
});

const getDetailContact = (contact) => ({
	type: 'ADD_DETAIL_CONTACT',
	payload: contact
});

const updateContact = (contact) => ({
	type: 'UPDATE_CONTACT',
	payload: contact
});

const removeContact = (contact) => ({
	type: 'DELETE_CONTACT',
	payload: contact
});

const addContactFailure = error => ({
  type: 'ADD_CONTACT_FAILURE',
  payload: {
    error
  }
});

const started = () => ({
	type: 'GET_STARTED'
});

