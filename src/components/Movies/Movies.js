import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
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
  savedMovies,
  handleDeleteMovie,
  filteredMovies,
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
          filteredMovies={filteredMovies}
          movies={renderedMovies}
          onMoreMovies={onMoreMovies}
          isMoreMoviesButtonVisible={isMoreMoviesButtonVisible}
          checkWindowSize={checkWindowSize}
          onSaveMovie={onSaveMovie}
          savedMovies={savedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
