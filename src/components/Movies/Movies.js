import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};

export default Movies;
