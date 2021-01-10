import React from 'react';

function ForgotPasswordForm() {

  return (
    <React.Fragment>
      <div className="col-xl-5 col-lg-5 col-sm-12 col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="fs-3 form-title mb-3">
                Fill your complete email
              </h3>
              <p className="fs-5 form-subtitle">
                we'll send a link to your email shortly
              </p>
            </div>
            <div className="col-xl-12 mt-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-label">
                    Email 
                  </label>
                  <input type="email" className="form-control input-active" id="email" placeholder="Write your email" autoComplete="off" />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button type="button" className="btn btn-lg btn-active">Active Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgotPasswordForm;