import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PhotoUpload from './PhotoUpload';
import SelectedPhotos from './SelectedPhotos';
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
            <Route path="/selected-photos" element={<SelectedPhotos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
