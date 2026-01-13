import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Traits from './Pages/Traits';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="Aboutme">
  <About />
</section>

<section id="Skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="contact">
  <Traits />
</section>

      
    </div>
  );
}

export default App;
