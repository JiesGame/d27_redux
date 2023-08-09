/* eslint-disable react/no-unescaped-entities */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<h1>Cette page n'existe pas</h1>} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
