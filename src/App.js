import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [visits, setVisits] = useState(() => {
    // Initialize state from local storage
    const savedVisits = localStorage.getItem('visits');
    return savedVisits !== null ? parseInt(savedVisits, 10) : 0;
  });

  useEffect(() => {
    // Save the visits count to local storage whenever it changes
    localStorage.setItem('visits', visits);
  }, [visits]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} />
            <Route path="/about" element={<About visits={visits} />} />
            <Route path="/contact" element={<Contact visits={visits} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
