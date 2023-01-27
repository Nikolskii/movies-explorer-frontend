import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchMovieResultMessage from '../SearchMovieResultMessage/SearchMovieResultMessage';

const Movies = ({
  onSearchMovies,
  onBurgerMenu,
  isPreloaderVisible,
  isSearchMovieResultMessageVisible,
  searchMovieResultMessage,
  renderedMovies,
  onMoreMovies,
  isMoreMoviesButtonVisible,
}) => {
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} />
      <main className="movies">
        <SearchForm onSearchMovies={onSearchMovies} />
        <Preloader isVisible={isPreloaderVisible} />
        <SearchMovieResultMessage
          isVisible={isSearchMovieResultMessageVisible}
          textMessage={searchMovieResultMessage}
        />
        <MoviesCardList
          renderedMovies={renderedMovies}
          onMoreMovies={onMoreMovies}
          isMoreMoviesButtonVisible={isMoreMoviesButtonVisible}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
