import css from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ContactListItem } from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
// import { del } from 'redux/phonebookSlice';
import { delContact, getAllContacts } from 'components/API/fetchContacts';

// import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filterContact.filter);
  const dispatch = useDispatch();

  const contactList = contacts.filter(f => {
    return f.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const deletePhonebookID = id => {
    dispatch(delContact(id));
  };

  return (
    contactList.length > 0 && (
      <ul className={css.contactsList}>
        {contactList.map(el => {
          return (
            <ContactListItem
              key={el.id}
              element={el}
              // onDeletePhonebookID={deletePhonebookID}
            >
              <button
                type="button"
                className={css.button}
                onClick={() => deletePhonebookID(el.id)}
              >
                Delete
              </button>
            </ContactListItem>
          );
        })}
      </ul>
    )
  );
};
