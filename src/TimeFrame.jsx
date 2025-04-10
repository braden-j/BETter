import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TopNav from './TopNav';
import './TimeFrame.css';

function TimeFrame() {
  const location = useLocation();
  const groupedPhotos = location.state?.photoGroups || [];
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [currGroup, setCurrGroup] = useState(0);
  
  const timeFrameCaptions = {
    default: "These photos were taken together and represent a special moment."
  };
  
  useEffect(() => {
    if (groupedPhotos.length > 0 && groups.length === 0) {
      setGroups(groupedPhotos);
    }
  }, [location.state, groups.length]);

  // Send back to somewhere else or no where?
  const handleBack = () => {
    const allPhotos = [];
    
    groups.forEach(group => {
      group.photos.forEach(photo => {
        allPhotos.push(photo.src);
      });
    });
    
    navigate('/group-photos', { 
      state: { 
        selectedImages: allPhotos,
        photoGroups: groups 
      } 
    });
  };

  const handleNext = () => {
    if (currGroup < groups.length - 1) {
      setCurrGroup(currGroup + 1);
    }
  };
  
  const handlePrev = () => {
    if (currGroup > 0) {
      setCurrGroup(currGroup - 1);
    }
  };
  
  if (groups.length === 0) {
    return <div className="caption-loading">Loading groups...</div>;
  }
  
  const currentGroup = groups[currGroup];
  const groupMessage = timeFrameCaptions[currentGroup.id] || timeFrameCaptions.default;

  return (
    <div className="timeframe-container">
      <TopNav 
        title="TimeFrame" 
        date="March 23rd"
        onBackClick={handleBack}
      />
      
      <div className="timeframe-header">
        <h2 className="timeframe-title">Greece '25</h2>
        <h3 className="subtitle">March 23rd</h3>
      </div>
      
      <div className="timeframe-content">
        <div className="group-preview">
          <div className="group-photos">
            {currentGroup.photos.map(photo => (
              <div key={photo.id} className="caption-photo-item">
                <img 
                  src={photo.src} 
                  alt="Group photo" 
                  className="caption-photo"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="caption-input-container">
          <div className="caption-input" style={{ height: 'auto', paddingTop: '12px' }}>
            {groupMessage}
          </div>
        </div>
      </div>
      
      <div className="caption-navigation">
        <button 
          className="caption-nav-button back"
          onClick={handlePrev}
          disabled={currGroup === 0}
        >
          Previous
        </button>
        <button 
          className="caption-nav-button next"
          onClick={handleNext}
          disabled={currGroup === groups.length - 1}
        >
            Next
        </button>
      </div>
    </div>
  );
}

export default TimeFrame;