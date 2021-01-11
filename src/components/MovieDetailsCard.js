import React from 'react';

function HeroMovieDetailsCard(props) {
  return (
    <React.Fragment>
      <div className="col-xl-4 col-lg-6 col-md-6 mb-3">
        <div className="card my-card p-4">
          <div className="card-head card-head-border pb-3">
            <div className="row align-items-center">
              <div className="col-6 d-flex justify-content-center">
                <img src={ props.img } className="imgs" alt="This from props" />
              </div>
              <div className="col-6 text-start">
                <h5 className="fw-normal">{ props.title }</h5>
                <small style={{ color: '#6E7191' }}>
                  { props.street }
                </small>
              </div>
            </div>
          </div>
          <div className="card-body">
            <button type="button" className="btn btn-light btn-card me-2" style={{ color: '#4E4B66' }}>08:30am</button>
            <button type="button" className="btn btn-light btn-card me-2" style={{ color: '#6E7191' }}>10:30pm</button>
            <button type="button" className="btn btn-light btn-card me-2" style={{ color: '#A0A3BD' }}>12:00pm</button>
            <button type="button" className="btn btn-light btn-card" style={{ color: '#A0A3BD' }}>02:00pm</button>
            <br />
            <button type="button" className="btn btn-light btn-card me-2" style={{ color: '#6E7191' }}>08:30am</button>
            <button type="button" className="btn btn-light btn-card me-2" style={{ color: '#A0A3BD' }}>10:30pm</button>
            <button type="button" className="btn btn-light btn-card me-2" style={{ color: '#6E7191' }}>12:00pm</button>
            <div className="row mt-1">
              <div className="col-6">
                <p className="text-muted">Price</p>
              </div>
              <div className="col-6 text-end">
                <p className="text-dark fw-bold">{ props.price }</p>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-6">
                <button className="btn btn-primary px-lg-4 px-2">
                  Book Now
                </button>
              </div>
              <div className="col-6 text-end">
                <button className="btn btn-light px-lg-4 px-2 text-primary btn-cart">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroMovieDetailsCard;
