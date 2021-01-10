import React from 'react';
import tickitz from '../assets/images/tickitz.svg';

function LoginSidebar() {
  return (
    <React.Fragment>
      <div className="col-xl-7 col-lg-7 col-sm-12 col-md-12">
        <div className="container">
          <div className="row hero-head-row align-content-center text-center text-md-start">
            <div className="col-xl-12 mb-5 text-center text-md-start">
              <img src={ tickitz } alt="Tickitz" className="img-fluid img-tickitz" />
            </div>
            <div className="col-xl-12 mt-2 mb-2">
              <h1 className="fs-2 text-white">
                Lets build your account
              </h1>
            </div>
            <div className="col-xl-12">
              <p className="text-description fs-5">
                To be a loyal moviegoer and access all of features,
                your details are required.
              </p>
            </div>
            <div className="col-xl-12 mt-4 d-none d-md-block d-xl-block d-lg-block">
              <div className="row">
                <div className="col-md-12">
                  <div className="row hero-progress align-items-center mb-2">
                    <div className="col-md-1 col-lg-1 position-relative me-lg-2 me-xl-0">
                      <span className="vertical-line d-inline-block position-absolute"></span>
                      <span className="bullets bullets-white">1</span>
                    </div>
                    <div className="col-md-11 col-lg-10">
                      <p className="text-white d-inline">
                        Fill your additional details
                      </p>
                    </div>
                  </div>
                  <div className="row hero-progress align-items-center mb-2">
                    <div className="col-md-1 col-lg-1 position-relative me-lg-2 me-xl-0">
                      <span className="vertical-line d-inline-block position-absolute"></span>
                      <span className="bullets bullets-transparent">2</span>
                    </div>
                    <div className="col-md-11 col-lg-10">
                      <p className="text-gray d-inline">
                        Activate your account
                      </p>
                    </div>
                  </div>
                  <div className="row hero-progress align-items-center">
                    <div className="col-md-1 col-lg-1 position-relative me-lg-2 me-xl-0">
                      <span className="bullets bullets-transparent">3</span>
                    </div>
                    <div className="col-md-11 col-lg-10">
                      <p className="text-gray d-inline">
                        Done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginSidebar;