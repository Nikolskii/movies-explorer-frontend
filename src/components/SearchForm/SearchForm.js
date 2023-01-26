import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({ onSearchMovies }) => {
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSearchMovies(moviesSearchQuery);
  };

  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            value={moviesSearchQuery}
            onChange={(evt) => setMoviesSearchQuery(evt.target.value)}
          />
          <button className="search-form__button">Найти</button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
};

export default SearchForm;
