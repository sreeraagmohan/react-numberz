import React, { PropTypes } from 'react';

const Species = props => (
  <li className="results-item">
    <h3 className="results-title">
      {props.item.name}
      <span className="results-type">{props.item.type}</span>
    </h3>
    <ul className="results-info">
      <li>Designation <span>{props.item.designation}</span> </li>
      <li>Classification <span>{props.item.classification}</span> </li>
      <li>Language <span>{props.item.language}</span> </li>
    </ul>
  </li>
);

Species.propTypes = {
  item: PropTypes.shape({
    designation: PropTypes.string,
    name: PropTypes.string.isRequired,
    classification: PropTypes.string,
    language: PropTypes.string,
    type: PropTypes.string.isRequired,
  }),
};

export default Species;
