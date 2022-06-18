import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MapPage from './Page/MapView';
import About from './Page/About';

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
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;