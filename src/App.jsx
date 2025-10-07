import React from 'react';
import AnimatedIntro from './components/AnimatedIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


const App = () => {
return (
<div className="overflow-x-hidden">
  
  <AnimatedIntro />
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <ContactForm />
  <Footer />
</div>
);
};


export default App;