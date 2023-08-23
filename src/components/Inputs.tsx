import React, { useState } from 'react';

interface InputsProps {
  notes: Array<{ date: string, distance: number }>;
  changeNotes: React.Dispatch<React.SetStateAction<Array<{ date: string, distance: number }>>>;
}

const Inputs: React.FC<InputsProps> = ({ notes, changeNotes })=> {
  const [inputDate, setDate] = useState('');
  const [inputDistance, setDistance] = useState('');
  const [border, setBorderColor] = useState('');
  const regx = /^[0-9]{2}(.)[0-9]{2}(.)[0-9]{2}$/;

  const getInputData = () => {
    if (regx.test(inputDate)) {
      setBorderColor("");
      if (inputDate && inputDistance) {
        const index: number = notes.findIndex(obj => obj.date === inputDate);
        if (index > -1) {
          const updatedNotes = [...notes];
          updatedNotes[index] = {
            ...updatedNotes[index],
            distance: updatedNotes[index].distance + Number(inputDistance)
          };
          changeNotes(updatedNotes);
        } else {
          changeNotes([...notes, { date: inputDate, distance: Number(inputDistance) }]);
        }
        setDate("");
        setDistance("");
      }
    } else {
      setBorderColor("red");
    }
  };
  

  return (
    <div className="inputContainer">
      <div className='inputs'> 
        <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
        <input 
          id="date" 
          value={inputDate} 
          onChange={(e) => setDate(e.target.value)} 
          style={{ border: `1px solid ${border}` }} 
        />
      </div>
      <div className='inputs'>
        <label htmlFor="distance">Пройдено км</label>
        <input 
          type="number" 
          id="distance" 
          value={inputDistance} 
          onChange={(e) => setDistance(e.target.value)} 
        />
      </div>
      <button className='okButton' type='button' onClick={getInputData}>Ok</button>
    </div>
  );
  
}

export default Inputs;