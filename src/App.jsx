/* eslint-disable react/no-unescaped-entities */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<h1>Cette page n'existe pas</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
