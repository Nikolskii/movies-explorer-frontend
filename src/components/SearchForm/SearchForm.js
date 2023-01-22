import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form">
      <section className="search-form__form">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button">Найти</button>
      </section>
    </section>
  );
};

export default SearchForm;
