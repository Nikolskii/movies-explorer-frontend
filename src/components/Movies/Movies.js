import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
    </section>
  );
};

export default Movies;
