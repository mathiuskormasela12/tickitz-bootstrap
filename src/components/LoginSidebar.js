import React from 'react';
import tickitz from '../assets/images/tickitz.svg';

function LoginSidebar() {
  return (
    <React.Fragment>
      <div className="col-xl-7 col-lg-6 col-sm-12 col-md-12">
        <div className="row align-content-center justify-content-center">
          <div className="col-xl-12 text-center">
            <img src={tickitz} alt="Tickitz" className="img-fluid img-tickitz" />
          </div>
          <div className="col-xl-12 text-center">
            <h2 className="text-white">
              wait, watch, wow!
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginSidebar;