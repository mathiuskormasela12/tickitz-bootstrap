import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context';

import google from '../assets/images/google.png';
import facebook from '../assets/images/facebook.png';

const { AppContext } = Context;

function RegisterForm() {
  const state = useContext(AppContext);

  return (
    <React.Fragment>
      <div className="col-xl-5 col-lg-5 col-sm-12 col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="fs-4 form-title mb-3">Fill your additional details</h3>
            </div>
            <div className="col-xl-12 mt-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-label">
                    Email 
                  </label>
                  <input type="email" className="form-control input-signup" id="email" placeholder="Write your email" autoComplete="off" />
                </div>
                <div className="mb-4 position-relative">
                  <label htmlFor="password" className="form-label text-label">
                    Password
                  </label>
                  <div className="img-eye" id="eye" onClick={state.showPassword}>
                    <div className={(state.show ? 'd-none' : 'd-inline-block')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A0A3BD" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                    </div>
                    <div className={(state.show ? 'd-inline-block' : 'd-none')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F2EEA" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>
                      </svg>
                    </div>
                  </div>
                  <input type={(state.show) ? 'text' : 'password'} className="form-control input-signup" id="password" placeholder="Write your password" />
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="d-grid gap-2 mt-4">
                  <button type="button" className="btn btn-lg btn-signup">Join for free now</button>
                </div>
              </form>
            </div>
            <div className="col-xl-12 mt-4 forgot-col">
              <p className="text-center">
                Do you already have an account? <Link to="/login" className="text-reset">Log in</Link>
              </p>
            </div>
            <div className="col-xl-12 mt-3">
              <div className="row justify-content-between">
                <div className="col-5 col-md-5">
                  <hr className="hr" />
                </div>
                <div className="col-2 col-md-1 text-center">
                  <p className="text-or">Or</p>
                </div>
                <div className="col-5 col-md-5">
                  <hr className="hr" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 mt-4">
              <div className="row justify-content-between">
                <div className="col-xxl-5 col-xl-5 mb-sm-4 mb-md-3 col-md-12">
                  <button type="button" className="btn btn-google">
                    <img src={ google } alt="Google" className="img-google" />
                    Google
                  </button>
                </div>
                <div className="col-xxl-5 col-xl-5 col-md-12">
                  <button type="button" className="btn btn-facebook">
                    <img src={ facebook } alt="Facebook" className="img-facebook" />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisterForm;