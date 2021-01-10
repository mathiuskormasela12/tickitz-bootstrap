import React from 'react';

function HeroFoot() {
  return (
    <React.Fragment>
      <div className="hero-foot">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-md-12">
              <h3 className="fs-6 fw-normal" style={{ color: '#A0A3BD' }}>Be the vanguard of the</h3>
            </div>
            <div className="col-md-12">
              <h1 className="fs-2 text-primary">Moviegoers</h1>
            </div>
            <div className="col-md-12 mt-4">
              <form className="row g-3 justify-content-center">
                <div className="col-auto">
                  <input type="email" className="form-control py-3" id="email" placeholder="Type your email" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3 px-4 py-3">Join Now</button>
                </div>
              </form>
            </div>
            <div className="col-md-12 d-flex justify-content-center mt-3">
              <p className="text-hero-foot">
                By joining you as a Tickitz member,
                we will always send you the latest updates via email .
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroFoot;
