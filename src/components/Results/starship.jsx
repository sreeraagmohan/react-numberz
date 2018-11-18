import React, { PropTypes } from 'react';

const Starship = props => (
  <li className="results-item">
    <h3 className="results-title">
      {props.item.name}
      <span className="results-type">{props.item.type}</span>
    </h3>
    <ul className="results-info">
      <li>Model <span>{props.item.model}</span> </li>
      <li>Manufacturer <span>{props.item.manufacturer}</span> </li>
      <li>Hyperdrive Rating <span>{props.item.hyperdrive_rating}</span> </li>
    </ul>
  </li>
);

Starship.propTypes = {
  item: PropTypes.shape({
    model: PropTypes.string,
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string,
    hyperdrive_rating: PropTypes.string,
    type: PropTypes.string.isRequired,
  }),
};

export default Starship;
