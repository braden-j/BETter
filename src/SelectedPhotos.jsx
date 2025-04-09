import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import TopNav from './TopNav';
import './SelectedPhotos.css';

function SelectedPhotos() {
  const location = useLocation();
  const selectedImages = location.state?.selectedImages || [];
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/photo-upload');
  };

  return (
    <div className="selected-photos-container">

      <TopNav 
            title="TimeFrame" 
            date="March 23rd"
            onBackClick={handleBack}
        />

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
