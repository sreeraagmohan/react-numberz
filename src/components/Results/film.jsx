import React, { PropTypes } from 'react';

const Film = props => (
  <li className="results-item">
    <h3 className="results-title">
      {props.item.name}
      <span className="results-type">{props.item.type}</span>
    </h3>
    <ul className="results-info">
      <li>Released <span>{props.item.release_date}</span> </li>
      <li>Directed by <span>{props.item.director}</span> </li>
      <li>Produced by <span>{props.item.producer}</span> </li>
    </ul>
  </li>
);

Film.propTypes = {
  item: PropTypes.shape({
    director: PropTypes.string,
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    release_date: PropTypes.string,
    type: PropTypes.string.isRequired,
  }),
};

export default Film;
