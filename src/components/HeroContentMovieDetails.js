import React from 'react';
import MovieDetailsCard from './MovieDetailsCard';
import location from '../assets/images/location.svg';
import ebu from '../assets/images/ebu.png';

function HeroContentMovieDetails() {
  return (
    <React.Fragment>
      <div className="hero-content py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2 className="fs-4 showtime-title">Showtimes and Tickets</h2>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 mb-3 mb-lg-0">
                  <div className="input-field">
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="input-field position-relative">
                    <img src={ location } className="location" />
                    <select className="form-select" aria-label="Default select example">
                      <option value="Jakarta">Jakarta</option>
                      <option value="Surabaya">Surabaya</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="row">
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
                <MovieDetailsCard img={ ebu } street="Whatever street No.12, South Purwokerto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroContentMovieDetails;
