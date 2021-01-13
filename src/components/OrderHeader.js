import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cine from '../assets/images/cine.png'

function OrderHeader() {
  const history = useHistory();
  const seatNum = [1, 2, 3, 4, 5, 6, 7];
  const seatNumRight = ['8', '9', '10', '11', '12', '13', '14'];
  const seatAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const soldSeat = ['A2', 'C3', 'F4', 'E2', 'F1', 'G2', 'G10', 'B13', 'F8', 'G14', 'A12'];

  const [userSeat, setUserSeat] = useState([]);

  const checkout = () => {
    history.push('/payment');
  }

  const changeMovie = () => {
    history.push('/');
  }

  const selectSeat = e => {
    const isSameSeat = userSeat.some(item => item === e.target.value);

    if(!isSameSeat) {
      setUserSeat(currentState => ([
        ...currentState,
        e.target.value
      ]));
    } else {
      setUserSeat(currentState => {
        currentState = currentState.map((item, index) => {
          if(item === e.target.value) {
            return '';
          } else {
            return item
          }
        });
        return [
          ...currentState
        ];
      });
    }
    
  }

  return (
    <Fragment>
      <section id="order-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <header>
                <h3 className="fs-5 mb-4">Movie Selected</h3>
                <div className="card">
                  <div className="card-header">
                    <h4 className="fs-5 fw-normal order-title">
                      Spider-Man: Homecoming
                    </h4>
                    <button className="btn btn-order">
                      Change movie
                    </button>
                  </div>
                </div>
              </header>
              <main className="mt-5">
                <h3 className="fs-5 mb-4">Choose Your Seat</h3>
                <div className="card">
                  <div className="container">
                    <p className="text-muted text-center">Screen</p>
                    <div className="row justify-content-center mt-4">
                      <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-12 d-flex flex-wrap position-relative">
                        {
                          seatAlphabet.map((row, rowIndex) => (
                            <Fragment key={ rowIndex }>
                              { seatNum.map((col, colIndex) => (
                                <Fragment key={ colIndex }>
                                  {
                                    (soldSeat.some((item) => item === `${row}${col}`)) ? (
                                      <Fragment>
                                        <input type="checkbox" id={row + '-' + col} value={row + col} disabled />
                                        <label htmlFor={row + '-' + col} className='normal'></label>
                                      </Fragment>
                                    ) : (
                                      <Fragment>
                                        <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } />
                                        <label htmlFor={row + '-' + col} className='normal'></label>
                                      </Fragment>
                                    )
                                  }
                                </Fragment>
                              ))}
                            </Fragment>
                          ))
                        }
                        <div className="position-absolute alphabet">
                          {
                            seatAlphabet.map((item, index) => (
                              <Fragment key={ index }>
                                <p>{ item }</p>
                              </Fragment>
                            ))
                          }
                        </div>
                        <div className="position-absolute d-flex numeric">
                          {
                            seatNum.map((item, index) => (
                              <Fragment key={ index }>
                                <p>{ item }</p>
                              </Fragment>
                            ))
                          }
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-5 col-12 mt-5 mt-md-0 mt-lg-0 d-flex flex-wrap position-relative">
                      {
                          seatAlphabet.map((row, rowIndex) => (
                            <Fragment key={ rowIndex }>
                              { seatNumRight.map((col, colIndex) => (
                                <Fragment key={ colIndex }>
                                  {(row === 'F' && Number(col) === 10) ? (
                                    <Fragment>
                                      {
                                        (soldSeat.some((item) => item === `${row}${col}`)) ? (
                                          <Fragment>
                                            <input type="checkbox" id={row + '-' + col} value={row + col} disabled />
                                            <label htmlFor={row + '-' + col} style={{ width: '3.5rem'}} className="love-nest"></label>
                                          </Fragment>
                                        ) : (
                                          <Fragment>
                                            <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } />
                                            <label htmlFor={row + '-' + col} style={{ width: '3.5rem'}} className="love-nest"></label>
                                          </Fragment>
                                        )
                                      }
                                    </Fragment>
                                  ): (row === 'F' && Number(col) === 11) ? null: (
                                    <Fragment>
                                      {
                                        (soldSeat.some((item) => item === `${row}${col}`)) ? (
                                          <Fragment>
                                            <input type="checkbox" id={row + '-' + col} value={row + col} disabled/>
                                            <label htmlFor={row + '-' + col} className="normal"></label>
                                          </Fragment>
                                        ) : (
                                          <Fragment>
                                            <input type="checkbox" id={row + '-' + col} value={row + col} onChange={ selectSeat } />
                                            <label htmlFor={row + '-' + col} className="normal"></label>
                                          </Fragment>
                                        )
                                      }
                                    </Fragment>
                                  )}
                                </Fragment>
                              ))}
                            </Fragment>
                          ))
                        }
                        <div className="position-absolute d-flex numeric">
                          {
                            seatNumRight.map((item, index) => (
                              <Fragment key={ index }>
                                <p>{ item }</p>
                              </Fragment>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-lg-12">
                        <h5 className="fw-normal">Seating key</h5>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <div className="d-lg-flex justify-content-around">
                          <div className="d-flex align-items-center mb-3 mb-lg-0">
                            <p className="text-muted">Available</p>
                          </div>
                          <div className="d-flex align-items-center mb-3 mb-lg-0">
                            <span className="d-inline-block me-3 bg-primary box"></span>
                            <span className="text-muted">Selected</span>
                          </div>
                          <div className="d-flex align-items-center mb-3 mb-lg-0">
                            <span className="d-inline-block me-3 love-nest box"></span>
                            <span className="text-muted">Lover Nest</span>
                          </div>
                          <div className="d-flex align-items-center mb-3 mb-lg-0">
                            <span className="d-inline-block me-3 box" style={{ backgroundColor: ' #6E7191'}}></span>
                            <span className="text-muted">Sold</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer className="mt-5">
                <div className="row no-gutter justify-content-between">
                  <div className="col-lg-5 mb-4 mb-lg-0 text-start">
                    <button type="button" onClick={ changeMovie } className="btn btn-outline-primary btn-footer w-100">
                      Change your movie
                    </button>
                  </div>
                  <div className="col-lg-5 text-end">
                    <button type="button" onClick={ checkout } className="btn btn-primary btn-footer w-100">
                      Checkout now
                    </button>
                  </div>
                </div>
              </footer>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <aside>
                <h3 className="fs-5 mb-4">Order Info</h3>
                <div className="card w-100 h-100 pt-3">
                  <div className="card-body">
                    <div className="container-fluid px-2">
                      <div className="row">
                        <div className="col-lg-12 text-center mb-3">
                          <img className="img-fluid img-movie" alt="Movie" src={ cine }/>
                        </div>
                        <div className="col-lg-12 text-center">
                          <h5 className="fw-normal">
                            CineOne21 Cinema
                          </h5>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-6">
                          <p className="text-muted movie-select">Movie selected</p>
                        </div>
                        <div className="col-6">
                          <p className="movie-select text-end">Spider-Man: Homecoming</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <p className="text-muted movie-select">Tuesday, 07 July 2020</p>
                        </div>
                        <div className="col-6">
                          <p className="movie-select text-end">02:00pm</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <p className="text-muted movie-select">One ticket price</p>
                        </div>
                        <div className="col-6">
                          <p className="movie-select text-end">$10</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <p className="text-muted movie-select">Seat choosed</p>
                        </div>
                        <div className="col-6">
                          <p className="movie-select text-end">{ userSeat.join() }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer pt-4">
                    <div className="row">
                      <div className="col-6">
                        <p className="fw-bold"> 
                          Total Payment
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="text-primary text-end">
                          $30
                        </p>
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

export default OrderHeader;