import React, { PropTypes } from 'react';

const Person = props => (
  <li className="results-item">
    <h3 className="results-title">
      {props.item.name}
      <span className="results-type">{props.item.type}</span>
    </h3>
    <ul className="results-info">
      <li>Gender <span>{props.item.gender}</span></li>
      <li>Height <span>{props.item.height}cm</span> </li>
      <li>Weight <span>{props.item.mass}kg</span> </li>
    </ul>
  </li>
);

Person.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Person;
