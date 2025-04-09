import React from 'react';
import './BottomNav.css';

function BottomNav({ onNextClick, nextLabel, showUtilityButtons = true }) {
  return (
    <div className="bottom-bar">
      {showUtilityButtons && (
        <div className="bottom-buttons">
          <button aria-label="Gallery">📚</button>
          <button aria-label="Edit">✏️</button>
        </div>
      )}
      <button 
        className="next-btn" 
        onClick={onNextClick}
      >
        {nextLabel || 'Next'} <span aria-hidden="true">➡️</span>
      </button>
    </div>
  );
}

export default BottomNav;