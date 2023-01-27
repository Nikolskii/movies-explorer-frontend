import { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isToggleActive, toggleShortMovies }) => {
  const [toggleChecked, setToggleChecked] = useState();

  const handleToggleChange = () => {
    console.log('вызван тогл');
    toggleShortMovies();
  };

  return (
    <div className="filter-checkbox">
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          checked={toggleChecked}
          onChange={handleToggleChange}
        />
        <span className="switch__slider"></span>
      </label>
      <p className="filter-checkbox__param">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
