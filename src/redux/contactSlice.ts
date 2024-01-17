import { createSlice } from '@reduxjs/toolkit';

interface Contact {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

interface ContactsState {
    contacts: Contact[];
}

const initialState: ContactsState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action) => {
            // Implement setting contacts logic
        },
        addContact: (state, action) => {
            // Implement adding contact logic
        },
        updateContact: (state, action) => {
            // Implement updating contact logic
        },
        deleteContact: (state, action) => {
            // Implement deleting contact logic
        },
    },
});

export const { setContacts, addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
