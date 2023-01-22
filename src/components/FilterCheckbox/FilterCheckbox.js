import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className="filter-checkbox">
      <label className="switch">
        <input className="filter-checkbox__switch-input" type="checkbox" />
        <span className="slider"></span>
      </label>
      <p className="filter-checkbox__param">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
