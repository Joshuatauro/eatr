import React from 'react';
import './App.css';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import About from './About/About'
import Menu from './Menu/Menu';
import Team from './Team/Team';
import Review from './Review/Review';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Team />
      <Review />
    </>
  );
}

export default App;
