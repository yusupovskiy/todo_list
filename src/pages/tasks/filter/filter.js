import React from 'react';
import PropTypes from 'prop-types';

const FILTERS_BTN = [{
    text: 'All',
    id: 'SHOW_ALL',
  }, {
    text: 'Active',
    id: 'SHOW_COMPLETED',
  }, {
    text: 'Completed',
    id: 'SHOW_ACTIVE'
}];

const Filter = ({ amount, activeFilter, changeFilter }) => {
	return (
    <div className="filter">
      <span className="amount">{`${amount} Tasks left`}</span>
      <div className="btn-group">
        {FILTERS_BTN.map(({ text, id }) => (
          <button
            onClick={() => changeFilter(id)}
            key={id}
            className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
          >{text}</button>
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Filter.defaultProps = {
  changeFilter: () => {},
  amount: 0,
  activeFilter: 'all',
}

export default Filter;