import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchMovieResultMessage from '../SearchMovieResultMessage/SearchMovieResultMessage';

const SavedMovies = ({
  onBurgerMenu,
  savedMovies,
  isLoggedIn,
  handleDeleteMovie,
  isToggleShortMoviesActive,
  toggleShortMoviesActive,
  isErrorVisible,
  searchMovieResultMessage,
  onSearchSavedMovies,
  filteredSavedMovies,
  resetErrorVisible,
}) => {
  const [renderedSavedMovies, setRenderedSavedMovies] = useState([]);
  const [isToggleActive, setIsToggleActive] = useState(false);

  useEffect(() => {
    isToggleShortMoviesActive && setIsToggleActive(true);
    setRenderedSavedMovies(savedMovies);

    if (filteredSavedMovies !== savedMovies) {
      setRenderedSavedMovies(filteredSavedMovies);
    }
  }, [savedMovies, filteredSavedMovies, isToggleShortMoviesActive]);

  useEffect(() => {
    return setRenderedSavedMovies(savedMovies);
  }, []);

  useEffect(() => {
    return resetErrorVisible();
  }, []);

  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          onSearchMovies={onSearchSavedMovies}
          isToggleShortMoviesActive={isToggleActive}
          toggleShortMoviesActive={toggleShortMoviesActive}
        />
        <SearchMovieResultMessage
          isVisible={isErrorVisible}
          textMessage={searchMovieResultMessage}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          handleDeleteMovie={handleDeleteMovie}
          renderedSavedMovies={renderedSavedMovies}
          isSavedCardList
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
