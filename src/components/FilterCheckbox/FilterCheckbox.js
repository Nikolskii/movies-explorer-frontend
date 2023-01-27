import { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isToggleActive, toggleShortMoviesActive }) => {
  const [toggleChecked, setToggleChecked] = useState(isToggleActive);

  const handleToggleChange = () => {
    toggleShortMoviesActive();
    setToggleChecked(!toggleChecked);
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
