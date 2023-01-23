import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      {/* <SavedMovies /> */}
    </section>
  );
};

export default Movies;
