import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MapPage from './Page/MapView';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Utama*/}
        <Route exact path='/' element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;