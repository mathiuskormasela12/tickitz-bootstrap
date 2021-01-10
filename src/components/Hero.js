import React from 'react';
import img from '../assets/images/hero-img.png';


function Hero() {
  return (
    <React.Fragment>
      <div className="hero-body">
        <div className="container">
          <div className="row py-lg-5 py-3">
            <div className="col-lg-6 d-flex justify-content-lg-center flex-column text-center text-lg-start mb-4 mb-lg-0">
              <h4 className="fw-normal fs-5" style={{color: "#A0A3BD"}}>
                Nearest Cinema, Newest Movie,
              </h4>
              <h2 className="text-primary display-4 fw-normal">
                Find out now!
              </h2>
            </div>
            <div className="col-lg-6 vh-lg-100 d-flex align-items-lg-center justify-content-center">
              <img src={ img } alt="Hero Images" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;