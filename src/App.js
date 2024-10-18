import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Service from './components/Service';
import About from './components/About';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
       <Service />
      <About />
      <Footer />
    </div>
  )
}
