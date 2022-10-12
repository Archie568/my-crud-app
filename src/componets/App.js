import React from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'


function App() {

  const contacts = [
    {
      id: "1",
      name: "Dipesh",
      email: "malvin@gmail.com"
    },
    {
      id: "2",
      name: "Clement",
      email: "clement@gmail.com"
    }
    , {
      id: "3",
      name: "kruger",
      email: "malvin@gmail.com"
    },
  ]

  return (
    <div className="App ui container">
     <Header />
     <AddContact />
     <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
