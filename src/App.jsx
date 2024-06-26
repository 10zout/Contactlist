import ContactList from './components/ContactList.jsx';
import SelectedContact from './components/SelectedContact.jsx';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}  />
      )}
    </>
  );
}



