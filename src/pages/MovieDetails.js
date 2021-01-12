import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroBody from '../components/HeroBody';
import HeroContentMovieDetails from '../components/HeroContentMovieDetails';
import Footer from '../components/Footer';
import axios from 'axios';

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { title, year } = useParams();
  
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data: result } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&t=' + title +'&y=' + year);
        setMovie(result);
      } catch(err) {
        console.log(err);
      }
    }
    getMovie();
  });

  return (
    <React.Fragment>
      <div id="movie-details">
        <Navbar />
        <HeroBody title={ title } poster={ movie.Poster } genre={ movie.Genre } release={ movie.Released } duration={ movie.Runtime } direct={ movie.Director } casts={ movie.Actors } plot={ movie.Plot } />
        <HeroContentMovieDetails />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MovieDetails;