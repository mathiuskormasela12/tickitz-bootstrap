import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function HeroUpcoming() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const { data: result } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a7d4f0c1&s=avengers') ;
        setMovies(result.Search);
        // console.log(result.Search)
      } catch(err) {
        console.log(err);
      }
    }
    getAllMovies();
  }, []);
  // console.log(movies)
  return (
    <React.Fragment>
      <div className="hero-upcoming bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-7">
              <h3 className="fs-5 fw-normal" style={{ color: "#14142B" }}>
                Upcoming Movies
              </h3>
            </div>
            <div className="col-md-6 col-5 text-end">
              <a href="/" className="text-primary text-decoration-none">View All</a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 d-flex overflow-scroll">
              <button type="button" className="btn btn-primary me-3">September</button>
              <button type="button" className="btn btn-outline-primary me-3">October</button>
              <button type="button" className="btn btn-outline-primary me-3">November</button>
              <button type="button" className="btn btn-outline-primary me-3">December</button>
              <button type="button" className="btn btn-outline-primary me-3">January</button>
              <button type="button" className="btn btn-outline-primary me-3">February</button>
              <button type="button" className="btn btn-outline-primary me-3">March</button>
              <button type="button" className="btn btn-outline-primary me-3">April</button>
              <button type="button" className="btn btn-outline-primary me-3">May</button>
              <button type="button" className="btn btn-outline-primary me-3">June</button>
              <button type="button" className="btn btn-outline-primary me-3">July</button>
              <button type="button" className="btn btn-outline-primary me-3">August</button>       
            </div>
          </div>
          <div className="d-flex mt-5 movie-wrap-upcoming">
            { movies.map((item, index) => (
              <React.Fragment key={index}>
                <MovieCard img={item.Poster} title={ item.Title } subtitle={ item.Type } year={ item.Year } />
              </React.Fragment>
            )) }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroUpcoming;