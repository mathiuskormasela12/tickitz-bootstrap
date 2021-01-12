import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  return (
    <React.Fragment>
      <div className="card p-5 me-3">
        <img src={props.img} alt="heroes1" className="img-movie" />
        <p className="card-title mt-3 text-center" style={{ color: '#14142B' }}>
          { props.title }
        </p>
        <p className="card-subtitle text-center" style={{ color: '#A0A3BD' }}>
          { props.subtitle }
        </p>
        <Link to={ `/details/${props.title}/${props.year}`} className="btn btn-outline-primary mt-4">Details</Link>
      </div>
    </React.Fragment>
  );
}

export default MovieCard;