import React from 'react';
import hero4 from '../assets/images/heroes4.png';

function HeroBody() {
  return (
    <React.Fragment>
      <div className="hero-body mt-4 py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-12 me-lg-2 d-flex justify-content-center">
              <div className="card align-items-center justify-content-center">
                <img src={ hero4 } alt="Superman" className="img-movie" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12 mt-4 mt-lg-0">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="fs-4">Spider-Man: Homecoming</h2>
                </div>
                <div className="col-lg-12">
                  <p className="text-muted">Adventure, Action, Sci-Fi</p>
                </div>
                <div className="col-lg-12">
                  <div className="row border-movie">
                    <div className="col-lg-6">
                      <small className="title-release">Release date</small>
                      <br />
                      <small className="subtitle-release">June 28, 2017</small>
                      <br />
                      <br />
                      <small className="title-release">Duration</small>
                      <br />
                      <small className="subtitle-release">2 hours 13 minutes </small>
                    </div>
                    <div className="col-lg-6">
                      <small className="title-release">Directed by</small>
                      <br />
                      <small className="subtitle-release">Jon Watss</small>
                      <br />
                      <br />
                      <small className="title-release">Casts</small>
                      <br />
                      <small className="subtitle-release">Tom Holland, Michael Keaton, Robert Downey Jr., ...</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                  <h2 className="fs-5 synopsis">Synopsis</h2>
                  <p className="fs-6 synopsis-desciption">
                    Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. 
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
