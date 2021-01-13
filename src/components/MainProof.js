import React, { Fragment } from 'react';
import tickitz from '../assets/images/tickitz.svg';
import barcode from '../assets/images/barcode.svg';
import download from '../assets/images/download.svg';
import printer from '../assets/images/printer.svg';

function MainProof() {
  return (
    <Fragment>
      <div id="proof">
        <main className="py-5">
          <div className="container">
            <div className="card bg-light py-4">
              <div className="card-body position-relative">
                <h5 className="text-center">
                  Proof of Payment
                </h5>
                <span className="circle bg-light position-absolute"></span>
                <div className="row justify-content-center mt-4">
                  <div className="col-8">
                    <div className="card w-100 border-4 bg-light">
                      <div className="card-body">
                        <div className="row bg-primary card-ticket px-3">
                          <div className="col-8 position-relative d-flex align-items-center">
                            <img className="img-fluid img-card ms-5" src={ tickitz } alt="Tickitz" />
                            <p className="text-light fw-normal text-center position-absolute admit-text">Admit One</p>
                          </div>
                          <div className="col-4 d-flex justify-content-center head-border">
                            <img className="img-fluid img-card" src={ tickitz } alt="Tickitz" />
                          </div>
                        </div>
                        <div className="row border-body px-3">
                          <div className="col-8 my-3">
                            <div className="row">
                              <div className="col-12">
                                <small style={{ color: '#AAAAAA' }}>
                                  Movie
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  Spider-Man: Homecoming
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-4">
                                <small style={{ color: '#AAAAAA' }}>
                                  Date
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  07 July
                                </p>
                              </div>
                              <div className="col-4">
                                <small style={{ color: '#AAAAAA' }}>
                                  Time
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  02:00pm
                                </p>
                              </div>
                              <div className="col-4">
                                <small style={{ color: '#AAAAAA' }}>
                                  Category
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  PG-13
                                </p>
                              </div>
                              <div className="col-4">
                                <small style={{ color: '#AAAAAA' }}>
                                  Count
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  3 pieces
                                </p>
                              </div>
                              <div className="col-4">
                                <small style={{ color: '#AAAAAA' }}>
                                  Seats
                                </small>
                                <p style={{ color: '#14142B' }}>
                                  C4, C5, C6
                                </p>
                              </div>
                              <div className="col-4">
                                <small style={{ color: '#AAAAAA' }}>
                                  Price
                                </small>
                                <p style={{ color: '#14142B' }} className="fs-5">
                                  $30.00
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 d-flex justify-content-center head-border">
                            <img className="img-barcode" src={barcode} alt="Barcode" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-2 ms-2">
                    <button type="button" className="btn btn-outline-proof w-100">
                      <img className="img-fluid me-2" src={download} alt="Download" />
                      Download
                    </button>
                  </div>
                  <div className="col-2">
                    <button type="button" className="btn btn-outline-proof w-100">
                      <img className="img-fluid me-2" src={printer} alt="Printer" />
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default MainProof;