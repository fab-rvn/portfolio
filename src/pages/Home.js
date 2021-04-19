import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/data';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleNavbar} />
      <Navbar toggle={toggleNavbar} />
      <Hero />
      <Info {...homeObjOne} />
      <Portfolio />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
