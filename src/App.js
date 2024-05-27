// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [visits, setVisits] = useState(0);

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
            {/* Pass incrementVisits function to Home component */}
            <Route path="/" element={<Home bannerId="B00896049 " visits={visits} setVisits={setVisits} />} />
            {/* Pass visits prop directly to About and Contact components */}
            <Route path="/about" element={<About visits={visits} />} />
            <Route path="/contact" element={<Contact visits={visits} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
