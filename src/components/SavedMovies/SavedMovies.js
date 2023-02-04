import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchMovieResultMessage from '../SearchMovieResultMessage/SearchMovieResultMessage';
import { Children, useEffect, useState } from 'react';

const SavedMovies = ({
  onSearchMovies,
  moviesSearchQuery,
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
  onResetFilteredSavedMovies,
}) => {
  const [renderedSavedMovies, setRenderedSavedMovies] = useState([]);

  useEffect(() => {
    setRenderedSavedMovies(filteredSavedMovies);
  }, [filteredSavedMovies, savedMovies]);

  useEffect(() => {
    return () => {
      console.log('run unmount');
      onResetFilteredSavedMovies({ mov: savedMovies });
    };
  }, [savedMovies]);

  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm
          onSearchMovies={onSearchSavedMovies}
          // moviesSearchQuery={moviesSearchQuery}
          isToggleShortMoviesActive={isToggleShortMoviesActive}
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
