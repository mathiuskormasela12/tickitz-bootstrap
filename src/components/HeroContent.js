import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function HeroContent() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const { data: result } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=naruto') ;
        setMovies(result.Search);
      } catch(err) {
        console.log(err);
      }
    }
    getAllMovies();
  }, []);

  return (
    <React.Fragment>
      <div className="hero-content bg-info py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-6">
              <h3 className="fs-5 fw-normal text-primary title-hero-content">
                Now Showing
              </h3>
            </div>
            <div className="col-md-6 col-6 text-end">
              <Link to="/" className="text-primary text-decoration-none">View All</Link>
            </div>
          </div>
          <div className="d-flex mt-5 movie-wrap">
            { movies.map((item, index) => (
              <Card img={item.Poster} key={ index } />
            )) }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroContent;
