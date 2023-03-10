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
  isErrorVisible,
  searchMovieResultMessage,
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
          isVisible={isErrorVisible}
          textMessage={searchMovieResultMessage}
        />
        <MoviesCardList
          filteredMovies={filteredMovies}
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
