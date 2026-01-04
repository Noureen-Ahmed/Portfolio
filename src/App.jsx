import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Noureen Ahmed | Frontend Developer";
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
