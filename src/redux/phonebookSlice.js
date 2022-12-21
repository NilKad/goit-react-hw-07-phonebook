import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addContact,
  delContact,
} from 'components/API/fetchContacts';

// const setContact = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contactsList: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    [getAllContacts.pending]: state => {
      state.error = false;
      state.isLoading = true;
    },
    [getAllContacts.fulfilled]: (state, { payload }) => {
      state.contactsList = payload;
      state.isLoading = false;
    },
    [getAllContacts.rejected]: state => {
      state.isLoading = false;
      state.error = true;
    },
    [addContact.pending]: state => {
      state.error = false;
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contactsList.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected]: state => {
      state.isLoading = false;
      state.error = true;
    },
    [delContact.pending]: state => {
      state.error = false;
      state.isLoading = true;
    },
    [delContact.fulfilled]: (state, { payload }) => {
      state.contactsList = state.contactsList.filter(
        ({ id }) => id !== payload
      );
      state.isLoading = false;
    },
    [delContact.rejected]: state => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { addContact: add, del } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filterContact',
  initialState: { filter: '' },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
