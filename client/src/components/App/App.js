import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import ManageEmail from '../ManageEmail.jsx';

function App() {

  return (
    <div className="App">
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <ManageEmail />
      <hr />
    </div>
  )
}

export default App;

