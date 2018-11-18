import React, { PropTypes } from 'react';

const Planet = props => (
  <li className="results-item">
    <h3 className="results-title">
      {props.item.name}
      <span className="results-type">{props.item.type}</span>
    </h3>
    <ul className="results-info">
      <li>Terrain <span>{props.item.terrain}</span> </li>
      <li>Gravity <span>{props.item.gravity}</span> </li>
      <li>Population <span>{Number(props.item.population).toLocaleString()}</span> </li>
    </ul>
  </li>
);

Planet.propTypes = {
  item: PropTypes.shape({
    terrain: PropTypes.string,
    gravity: PropTypes.string,
    name: PropTypes.string.isRequired,
    population: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Planet;
