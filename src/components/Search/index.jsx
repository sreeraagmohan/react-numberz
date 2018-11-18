import React, { PropTypes } from 'react';
import './search.scss';
import icon from './images/search.svg';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div className="search">
      <div className="search-title">Star Wars Search</div>
      <div className="search-subtitle">Films | Planets | Characters | Starships</div>
      <div className="search-input">
        <div
          className="search-icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <input
          type="text"
          placeholder="Enter a search term"
          onChange={e => onChange(e.target.value)}
          value={value}
          autoFocus
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
