import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const contactsInitial = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitial,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactReduce = persistReducer(
  persistConfig,
  contactSlice.reducer
);
