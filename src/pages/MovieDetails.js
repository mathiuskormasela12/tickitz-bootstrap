import React from 'react';

import Navbar from '../components/Navbar';
import HeroBody from '../components/HeroBody';
import HeroContentMovieDetails from '../components/HeroContentMovieDetails';
import Footer from '../components/Footer';

function MovieDetails() {
  return (
    <React.Fragment>
      <div id="movie-details">
        <Navbar />
        <HeroBody />
        <HeroContentMovieDetails />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MovieDetails;