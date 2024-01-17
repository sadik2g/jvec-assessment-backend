import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setContacts, deleteContact } from '../redux/contactSlice';
import { logout } from '../redux/authSlice';
import { fetchContacts, deleteContact as apiDeleteContact } from '../api/contactApi';

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAndSetContacts = async () => {
      const data = await fetchContacts(); // Replace with actual API call
      dispatch(setContacts(data.contacts));
    };

    fetchAndSetContacts();
  }, [dispatch]);

  const handleDeleteContact = async (id: string) => {
    await apiDeleteContact(id); // Replace with actual API call
    dispatch(deleteContact(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    // You can redirect the user or perform other actions after logout
  };

  return (
    <div>
      <h2>Contact List</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.firstName} {contact.lastName} - {contact.phoneNumber}
            <button type="button" onClick={() => handleDeleteContact(contact._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
