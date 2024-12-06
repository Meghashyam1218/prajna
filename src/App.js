import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Navigation
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero scrollToSection={scrollToSection} />
      <Works />
      <About />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;