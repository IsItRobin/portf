import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Archive from './Components/Archive';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Archive />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
