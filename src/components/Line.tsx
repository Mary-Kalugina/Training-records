import React from 'react';

interface LineProps {
  date: string;
  km: number;
  onDelete: () => void;
}

const Line: React.FC<LineProps> = ({ date, km, onDelete }) => {
  return (
    <div className="line">
      <div className="date">{date}</div>
      <div className="km">{km}</div>
      <div className="buttons">
        <button className="edit">Edit</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Line;
