import React from 'react';

function Card(props) {
  return (
    <React.Fragment>
      <div className="card p-5 me-3">
        <img src={props.img} alt="heroes1" className="img-movie" />
      </div>
    </React.Fragment>
  );
}

export default Card;