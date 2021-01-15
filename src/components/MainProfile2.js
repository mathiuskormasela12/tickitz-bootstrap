import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/images/user.png';
import star from '../assets/images/star.png';

function MainProfile() {
  return (
    <Fragment>
      <div id="profile" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="card pt-4 pb-5">
                <div className="row px-4">
                  <div className="col-6">
                    <p style={{ color: '4E4B66'}}>INFO</p>
                  </div>
                  <div className="col-6 text-end">
                    <span className="dot bg-primary ms-1"></span>
                    <span className="dot bg-primary ms-1"></span>
                    <span className="dot bg-primary ms-1"></span>
                  </div>
                </div>
                <div className="row border-bottom mb-3">
                  <div className="col-12 text-center">
                    <img src={user} alt="user" className="img-user" />
                    <p className="fs-5" style={{ color: '#14142B'}}>Jonas El Rodriguez</p>
                    <p className="mt-1" style={{ color: '#4E4B66'}}>Moviegoers</p>
                  </div>
                </div>
                <div className="row mt-5 px-4">
                  <div className="col-12">
                    <p style={{ color: '#4E4B66'}}>Loyalty Points</p>
                  </div>
                  <div className="col-12">
                    <div className="card card-primary pt-4 pt-3 px-3 position-relative">
                      <span className="circle-white circle-1"></span>
                      <span className="circle-white circle-2"></span>
                      <img className="star position-absolute" src={star} />
                      <p className="text-white">Moviegoers</p>
                      <p className="text-white fs-2">
                        32
                        <span className="fs-6 ms-2">points</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mt-5">
                    <p style={{ color: '#4E4B66'}}>180 points become a master</p>
                  </div>
                  <div className="col-12 mt-2">
                  <div class="progress">
                    <div class="progress-bar bg-primary" style={{width: '50%', borderRadius: '8px'}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card bg-light w-100 h-100">
                <div className="row border-bottom py-4 px-5 mb-2">
                  <div className="col-4">
                    <Link to="/profile" className="text-decoration-none links" style={{ color: '#14142B'}}>
                      Account Settings
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/profile/history" className="text-decoration-none links" style={{ color: '#14142B'}}>
                      Order History
                    </Link>
                  </div>
                </div>
                <div className="row border-bottom mt-5 py-1 px-5">
                  <div className="col-12">
                    <p>Details Information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MainProfile;