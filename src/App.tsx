import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import '../src/styles/global.css'
import About from './pages/About/About';


function App() {
  return (
    <div className="App">

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
