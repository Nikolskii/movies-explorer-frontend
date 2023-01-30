import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchMovieResultMessage from '../SearchMovieResultMessage/SearchMovieResultMessage';

const Movies = ({
  moviesSearchQuery,
  onSearchMovies,
  onBurgerMenu,
  isPreloaderVisible,
  isSearchMovieResultMessageVisible,
  searchMovieResultMessage,
  renderedMovies,
  onMoreMovies,
  isMoreMoviesButtonVisible,
  checkWindowSize,
  isToggleShortMoviesActive,
  toggleShortMoviesActive,
  isLoggedIn,
  onSaveMovie,
}) => {
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          onSearchMovies={onSearchMovies}
          moviesSearchQuery={moviesSearchQuery}
          isToggleShortMoviesActive={isToggleShortMoviesActive}
          toggleShortMoviesActive={toggleShortMoviesActive}
        />
        <Preloader isVisible={isPreloaderVisible} />
        <SearchMovieResultMessage
          isVisible={isSearchMovieResultMessageVisible}
          textMessage={searchMovieResultMessage}
        />
        <MoviesCardList
          movies={renderedMovies}
          onMoreMovies={onMoreMovies}
          isMoreMoviesButtonVisible={isMoreMoviesButtonVisible}
          checkWindowSize={checkWindowSize}
          onSaveMovie={onSaveMovie}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
