import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({ onSearchMovies, moviesSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState(moviesSearchQuery);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSearchMovies(searchQuery);
  };

  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            value={searchQuery}
            onChange={(evt) => setSearchQuery(evt.target.value)}
          />
          <button className="search-form__button">Найти</button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
};

export default SearchForm;
