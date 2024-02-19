
import React from 'react';
import LandingPageRedone from './pages/LandingPageRedone'
import Homepage from './pages/Homepage';
import MapPage from './pages/MapPage';
import Account from './pages/Account';
import CreatePost from './pages/CreatePost'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageRedone />} />
      </Routes>
      <Sidebar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/mapPage" element={<MapPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App
