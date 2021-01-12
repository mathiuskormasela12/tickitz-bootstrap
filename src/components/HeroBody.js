import React from 'react';

function HeroBody(props) {
  return (
    <React.Fragment>
      <div className="hero-body mt-4 py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-12 me-lg-2 d-flex justify-content-center">
              <div className="card align-items-center justify-content-center">
                <img src={ props.poster } alt="Superman" className="img-movie" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12 mt-4 mt-lg-0">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="fs-4">{ props.title }</h2>
                </div>
                <div className="col-lg-12">
                  <p className="text-muted">{ props.genre }</p>
                </div>
                <div className="col-lg-12">
                  <div className="row border-movie">
                    <div className="col-lg-6">
                      <small className="title-release">Release date</small>
                      <br />
                      <small className="subtitle-release">{ props.release }</small>
                      <br />
                      <br />
                      <small className="title-release">Duration</small>
                      <br />
                      <small className="subtitle-release">{ props.duration }</small>
                    </div>
                    <div className="col-lg-6">
                      <small className="title-release">Directed by</small>
                      <br />
                      <small className="subtitle-release">{ props.direct}</small>
                      <br />
                      <br />
                      <small className="title-release">Casts</small>
                      <br />
                      <small className="subtitle-release">{ props.casts }</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                  <h2 className="fs-5 synopsis">Synopsis</h2>
                  <p className="fs-6 synopsis-desciption">
                    { props.plot }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroBody;
