// SECTIONS
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import About from './Sections/About';
import Curators from './Sections/Curators';
import FaqAccardion from './Sections/FaqAccardion';
import Footer from './Sections/Footer';
import Home from './Sections/Home';
import Info from './Sections/Info';
import Price from './Sections/Price';

function App() {
  
useEffect(() => {
  AOS.init();
}, [])

  return (
    <>
      <Home />
      <About />
      <Info />
      <Price />
      <Curators />
      <FaqAccardion />
      <Footer />
    </>
  );
}

export default App;
