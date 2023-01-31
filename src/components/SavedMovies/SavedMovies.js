import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Header from '../Header/Header';

const SavedMovies = ({
  onSearchMovies,
  moviesSearchQuery,
  onBurgerMenu,
  savedMovies,
  checkWindowSize,
  isLoggedIn,
  handleDeleteMovie,
  renderedSavedMovies,
  isToggleShortMoviesActive,
  toggleShortMoviesActive,
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
        <MoviesCardList
          movies={renderedSavedMovies}
          savedMovies={savedMovies}
          checkWindowSize={checkWindowSize}
          handleDeleteMovie={handleDeleteMovie}
          isListSavedCard
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
