import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} /> */}
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
          <Route path="projects/*" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

