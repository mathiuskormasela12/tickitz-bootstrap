import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroContent from '../components/HeroContent';
import HeroUpcoming from '../components/HeroUpcoming';
import HeroFoot from '../components/HeroFoot';
import Footer from '../components/Footer';

function Login() {
  return (
    <React.Fragment>
      <div id="home">
        <Navbar />
        <Hero />
        <HeroContent />
        <HeroUpcoming />
        <HeroFoot />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Login;