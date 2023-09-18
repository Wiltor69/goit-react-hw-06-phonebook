import { configureStore } from '@reduxjs/toolkit';
import { contactReduce } from './contactSlice';
import { filterReduce } from './filterSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactReduce,
    filter: filterReduce,
  },
});

export const persistor = persistStore(store);
