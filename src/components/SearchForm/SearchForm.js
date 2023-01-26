import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({ onSearchMovies }) => {
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');

  console.log(moviesSearchQuery);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (moviesSearchQuery.length === 0) {
      console.log('Нужно ввести ключевое слово');
      return;
    }

    onSearchMovies();
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
