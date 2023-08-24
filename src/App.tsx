import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Line from "./components/Line";
import './App.css';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Array<{ date: string; distance: number }>>([]);

  const deleteRecord = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }  

  return (
    <div className="app">
      <Inputs 
      notes={notes}
      changeNotes={setNotes}/>
      <div className='header'>
          <span>Дата(ДД-ММ-ГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
      </div>
      <div className='container'>     
        <ul>
          {notes.map((obj, index) => (
            <li key={index}>         
              <Line 
                onDelete = {() => deleteRecord(index)}
                date={obj.date} 
                km={obj.distance}
              />
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
