import { useState } from 'react';
import exampleImage1 from './assets/Screenshot 2025-04-07 092724.png';
import exampleImage2 from './assets/Screenshot 2025-04-07 092743.png';
import exampleImage3 from './assets/Screenshot 2025-04-07 092755.png';
import exampleImage4 from './assets/Screenshot 2025-04-07 092808.png';
import exampleImage5 from './assets/Screenshot 2025-04-07 092832.png';
import exampleImage6 from './assets/Screenshot 2025-04-07 092844.png';
import exampleImage7 from './assets/Screenshot 2025-04-09 143804.png';
import exampleImage8 from './assets/Screenshot 2025-04-09 143830.png';
import exampleImage9 from './assets/Screenshot 2025-04-09 143916.png';
import './PhotoUpload.css';

function PhotoUpload() {
    const [selectedImages, setSelectedImages] = useState([]);
    const images = [exampleImage1, exampleImage2, exampleImage3, exampleImage4, exampleImage5, exampleImage6, exampleImage7, exampleImage8, exampleImage9];
  
    const handleImageClick = (image) => {
      if (selectedImages.includes(image)) {
        setSelectedImages(selectedImages.filter(img => img !== image));
      } else {
        setSelectedImages([...selectedImages, image]);
      }
    };
  
    return (
      <div className="photo-upload-container">
        <div className="content-area">
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
    
          <h2 className="title">Any photos to add?</h2>
          
          <div className="image-gallery">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`gallery-item ${selectedImages.includes(image) ? 'selected' : ''}`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-image"
                />
                {selectedImages.includes(image) && (
                  <div className="selected-indicator">✓</div>
                )}
              </div>
            ))}
          </div>
        </div>
  
        <div className="bottom-bar">
          <div className="bottom-buttons">
            <button aria-label="Gallery">📚</button>
            <button aria-label="Edit">✏️</button>
          </div>
          <button className="next-btn">Next <span aria-hidden="true">➡️</span></button>
        </div>
      </div>
    );
  }
  
  export default PhotoUpload;