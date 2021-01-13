import React, { Fragment } from 'react';
import warning from '../assets/images/warning.svg';
import googlepay from '../assets/images/google-pay.svg';
import bri from '../assets/images/bri.svg';
import visa from '../assets/images/visa.svg';
import gopay from '../assets/images/gopay.svg';
import dana from '../assets/images/dana.svg';
import bca from '../assets/images/bca.svg';
import ovo from '../assets/images/ovo.svg';
import paypal from '../assets/images/paypal.svg';


function PaymentHeader() {

  return (
    <Fragment>
      <section id="payment-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <header>
                <h3 className="fs-5 mb-4">Payment Info</h3>
                <div className="card py-3">
                  <div className="row border-bottom py-3">
                    <div className="col-6">
                      <p className="text-muted movie-select m-0">Date & Time</p>
                    </div>
                    <div className="col-6">
                      <p className="movie-select text-end m-0">Tuesday, 07 July 2020 at 02:00pm</p>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-6">
                      <p className="text-muted movie-select m-0">Movie title</p>
                    </div>
                    <div className="col-6">
                      <p className="movie-select text-end m-0">Spider-Man: Homecoming</p>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-6">
                      <p className="text-muted movie-select m-0">Cinema name</p>
                    </div>
                    <div className="col-6">
                      <p className="movie-select text-end m-0">CineOne21 Cinema</p>
                    </div>
                  </div>
                  <div className="row border-bottom py-3">
                    <div className="col-6">
                      <p className="text-muted movie-select m-0">Number of tickets</p>
                    </div>
                    <div className="col-6">
                      <p className="movie-select text-end m-0">3 pieces</p>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-6">
                      <p className="text-muted movie-select m-0">Total payment</p>
                    </div>
                    <div className="col-6">
                      <p className="movie-select text-end m-0">$30,00</p>
                    </div>
                  </div>
                </div>
              </header>
              <main className="mt-5">
                <h3 className="fs-5 mb-4">Choose a Payment Method</h3>
                <div className="card">
                  <div className="card-body">
                    <div className="container">
                      <div className="row payment-row">
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={googlepay} className="card-img-top" alt="Google Pay" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={visa} className="card-img-top" alt="Visa" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={gopay} className="card-img-top" alt="Go pay" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={paypal} className="card-img-top img-paypal" alt="Paypal" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={dana} className="card-img-top" alt="Dana" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={bca} className="card-img-top" alt="BCA" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={bri} className="card-img-top img-bri" alt="BRI" />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="card">
                            <img src={ovo} className="card-img-top" alt="Ovo" />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-5">
                          <hr />
                        </div>
                        <div className="col-2">
                          <p className="text-muted text-center">Or</p>
                        </div>
                        <div className="col-5">
                          <hr />
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-lg-12">
                          <p className="text-muted fs-6 text-center">
                            Pay via cash. <span className="text-primary">See how it work</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer className="mt-5">
                <div className="row no-gutter justify-content-between">
                  <div className="col-lg-5 mb-4 mb-lg-0 text-start">
                    <button type="button" className="btn btn-outline-primary btn-footer w-100">
                      Prvious step
                    </button>
                  </div>
                  <div className="col-lg-5 text-end">
                    <button type="button" className="btn btn-primary btn-footer w-100">
                      Pay your order
                    </button>
                  </div>
                </div>
              </footer>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <aside>
                <h3 className="fs-5 mb-4">Personal Info</h3>
                <div className="card w-100 h-100 pt-3 bg-light">
                  <div className="card-body">
                    <div className="container-fluid px-2">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="fullname" className="form-label text-muted">Full Name</label>
                          <input type="text" className="form-control" id="fullname" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label text-muted">Email</label>
                          <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phonenumber" className="form-label text-muted">Phone Number</label>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="phonenumber">+62</span>
                            <input type="tel" className="form-control" id="phonenumber" />
                          </div>
                        </div>
                      </form>
                      <div className="alert alert-warning mt-4 d-flex align-items-center" role="alert">
                        <img className="img-fluid me-4" src={ warning } alt="Warning" />
                        Fill your data correctly.
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default PaymentHeader;