import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('apod');

  return (
    <Router>
      {/* Full-page flex container */}
      <div className="d-flex flex-column min-vh-100" style={{ background: '#353935' }}>
        {/* Top Navigation */}
        <Navbar setActiveSection={setActiveSection} />

        {/* Main Content */}
        <main className="flex-fill">
          <Home activeSection={activeSection} />
        </main>

        {/* Footer always sticks to bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
