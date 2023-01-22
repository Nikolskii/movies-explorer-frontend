import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <section className="search-form__form">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
          />
          <button className="search-form__button">Найти</button>
        </section>
        <FilterCheckbox />
      </div>
    </section>
  );
};

export default SearchForm;
