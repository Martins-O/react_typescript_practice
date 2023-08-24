import React from 'react';
import './App.css';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";

function App() {
    const personName = {
        firstName: 'Martins',
        lastName: 'Jojolola'
    }
    const nameList =[
        {
            firstName: 'Martins O',
            lastName: 'Jojolola',
        },
        {
            firstName: 'Saheed',
            lastName: 'Ajayi',
        },
        {
            firstName: 'Michael',
            lastName: 'John',
        },
    ]
  return (
    <div className="App">
      <Greet name='Martins' messageCount={10} isLoggedIn={true}/>
        <Person name={personName}/>
        <PersonList names = {nameList}/>
    </div>
  );
}

export default App;
