import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PhotoUpload from './PhotoUpload';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="app-main">
          <Routes>
            <Route path="/upload" element={<PhotoUpload />} />
            {/* Proper redirect using Navigate component */}
            <Route path="*" element={<Navigate to="/upload" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;