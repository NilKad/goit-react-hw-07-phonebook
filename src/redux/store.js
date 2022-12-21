import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    // contacts: persistedContactsReducer,
    contacts: contactsSlice.reducer,
    filterContact: filterSlice.reducer,
  },
});

// export const persistor = persistStore(store);
// export { store };
