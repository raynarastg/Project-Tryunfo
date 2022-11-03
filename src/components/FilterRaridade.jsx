import PropTypes from 'prop-types';
import React from 'react';

class FilterRaridade extends React.Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <label htmlFor="select">
        <select
          type="select"
          data-testid="rare-filter"
          id="select"
          name="rareFilter"
          onChange={ onInputChange }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

FilterRaridade.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default FilterRaridade;
