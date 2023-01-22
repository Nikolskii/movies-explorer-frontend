import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <Preloader />
    </section>
  );
};

export default Movies;
