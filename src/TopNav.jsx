import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopNav.css';

function TopNav({ title, date, onBackClick, onSaveExitClick }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  const handleSaveExit = () => {
    if (onSaveExitClick) {
      onSaveExitClick();
    } else {
      console.log('Save & Exit clicked');
    }
  };

  return (
    <div className="top-bar">
      <div className="timeframe">
        <h3>{title}</h3>
        <div className="date">{date}</div>
      </div>
      <div className="nav-buttons">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleSaveExit}>Save & Exit</button>
      </div>
    </div>
  );
}

export default TopNav;
