import React from 'react';
import { useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';
import './SelectedPhotos.css';

function SelectedPhotos() {
  const location = useLocation();
  const selectedImages = location.state?.selectedImages || [];

  return (
    <div className="selected-photos-container">
      <div className="top-bar">
            <div className="timeframe">
              <h3>TimeFrame</h3>
              <div className="date">March 23rd</div>
            </div>
            <div className="nav-buttons">
              <button>Back</button>
              <button>Save & Exit</button>
            </div>
          </div>

      <h2 className="title">Selected</h2>
      <div className="image-gallery">
        {selectedImages.length === 0 ? (
          <p>No photos selected.</p>
        ) : (
          selectedImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Selected photo ${index + 1}`} className="gallery-image" />
            </div>
          ))
        )}
      </div>

      <BottomNav 
        onNextClick={() => console.log('Next clicked')}
        nextLabel="Next"
        showUtilityButtons={true}
      />
    </div>
  );
}

export default SelectedPhotos;
