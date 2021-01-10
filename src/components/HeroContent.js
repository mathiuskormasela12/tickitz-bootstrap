import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import hero1 from '../assets/images/heroes1.png';
import hero2 from '../assets/images/heroes2.png';
import hero3 from '../assets/images/heroes3.png';
import hero4 from '../assets/images/heroes4.png';

function HeroContent() {
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
            <Card img={hero1} />
            <Card img={hero2} />
            <Card img={hero3} />
            <Card img={hero4} />
            <Card img={hero1} />
            <Card img={hero2} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroContent;
