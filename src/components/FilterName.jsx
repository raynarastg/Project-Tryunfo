import PropTypes from 'prop-types';
import React from 'react';

class FilterName extends React.Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <label htmlFor="filterName" className="labelFilter">
        Filtrar por nome:
        <input
          type="text"
          data-testid="name-filter"
          className="filterName"
          name="nameFilter"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

FilterName.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default FilterName;
