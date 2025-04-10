import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PhotoUpload from './PhotoUpload';
import GroupPhotos from './GroupPhotos';
import CaptionPhotos from './CaptionPhotos';
import JournalUpload from './JournalUpload';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/journal-upload" replace />} />
            <Route path="/journal-upload" element={<JournalUpload />} />
            <Route path="/photo-upload" element={<PhotoUpload />} />
            <Route path="/group-photos" element={<GroupPhotos />} />
            <Route path="/caption-photos" element={<CaptionPhotos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
