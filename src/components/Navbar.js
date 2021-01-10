import React from 'react';
import { Link } from 'react-router-dom';

import tickitz from '../assets/images/tickitz2.svg';

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={ tickitz } alt="Tickitz Logo" className="img-fluid" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ms-lg-5 ms-2">
                <Link className="nav-link active" aria-current="page" to="/">Movies</Link>
              </li>
              <li className="nav-item ms-lg-5 ms-2">
                <Link className="nav-link" to="/cinema">Cinemas</Link>
              </li>
              <li className="nav-item ms-lg-5 ms-2">
                <Link className="nav-link" to="#" tabIndex="-1">Buy Ticket</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown m-lg-0 ms-lg-5 ms-2">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Jakarta
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Surabaya
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item m-lg-0 ms-lg-5 mb-3 mb-lg-0 ms-2 d-none d-lg-block search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </li>
              <li className="nav-item mt-3 mt-lg-0 ms-lg-5 ms-2">
                <Link to="/register" className="btn btn-primary btn px-4">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;