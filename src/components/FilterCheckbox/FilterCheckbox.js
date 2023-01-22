import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className="filter-checkbox">
      <label className="switch">
        <input className="switch__input" type="checkbox" />
        <span className="switch__slider"></span>
      </label>
      <p className="filter-checkbox__param">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
