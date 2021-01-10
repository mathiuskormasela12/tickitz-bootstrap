import React from 'react';
import img from '../assets/images/tickitz2.svg';
import ebu from '../assets/images/ebu.png';
import cine from '../assets/images/cine.png';
import hiflix from '../assets/images/hiflix.png';
import facebook from '../assets/images/fb.svg';
import instagram from '../assets/images/ig.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/yt.svg';


function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={ img } alt="Tickitz" className="img-fluid" />
                    </div>
                    <div className="col-md-12 mt-2">
                      <p className="fs-6" style={{ color: '#6E7191' }}>
                        Stop waiting in line. Buy tickets
                        conveniently, watch movies quietly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <ul className="list-unstyled">
                    <li className="text-dark fs-5 mb-3 fw-bold">Explore</li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>Cinemas</li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>Movie Lists</li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>My Ticket</li>
                    <li className="explore-items" style={{ color: '#4E4B66' }}>Notification</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="list-unstyled">
                    <li className="text-dark fs-5 mb-3 fw-bold">Our Sponsor</li>
                    <li className="explore-items mb-4">
                      <img src={ ebu } alt="Our Sponsor" className="img-fluid" />
                    </li>
                    <li className="explore-items mb-4">
                      <img src={ cine } alt="Our Sponsor" className="img-fluid" />
                    </li>
                    <li className="explore-items mb-4">
                      <img src={ hiflix } alt="Our Sponsor" className="img-fluid" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="list-unstyled">
                    <li className="text-dark fs-5 mb-3 fw-bold">Explore</li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>
                      <img src={ facebook } alt="Facebook" className="img-fluid me-2" />
                      Tickitz Cinema id
                    </li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>
                      <img src={ instagram } alt="Instagram" className="img-fluid me-2" />
                      tickitz.id
                    </li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>
                      <img src={ twitter} alt="Twitter" className="img-fluid me-2" />
                      tickitz.id
                    </li>
                    <li className="explore-items mb-2" style={{ color: '#4E4B66' }}>
                      <img src={ youtube } alt="Youtube Channel" className="img-fluid me-2" />
                      Tickitz Cinema id
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center mt-4">
              <p style={{ color: '#4E4B66' }}>&copy; 2020 Tickitz. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;