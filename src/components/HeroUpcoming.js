import React from 'react';

import MovieCard from './MovieCard';
import hero1 from '../assets/images/heroes1.png';
import hero2 from '../assets/images/two.png';
import hero3 from '../assets/images/three.png';
import hero4 from '../assets/images/one.png';

function HeroUpcoming() {
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
            <MovieCard img={hero1} title="Superman" subtitle="Action, Adventure, Sci-Fi" />
            <MovieCard img={hero2} title="The Witches" subtitle="Adventure, Comedy, Family" />
            <MovieCard img={hero3} title="Tenet" subtitle="Action, Sci-Fi" />
            <MovieCard img={hero4} title="Black Widow" subtitle="Action, Adventure, Sci-Fi" />
            <MovieCard img={hero2} title="The Witches" subtitle="Adventure, Comedy, Family" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroUpcoming;