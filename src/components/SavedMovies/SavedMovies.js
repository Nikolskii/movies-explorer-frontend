import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Header from '../Header/Header';
import { useEffect } from 'react';

const SavedMovies = ({
  onBurgerMenu,
  savedMovies,
  checkWindowSize,
  isLoggedIn,
  getSavedMovies,
  handleDeleteMovie,
}) => {
  useEffect(() => {
    getSavedMovies();
  }, []);
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} isLoggedIn={isLoggedIn} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList
          movies={savedMovies}
          checkWindowSize={checkWindowSize}
          handleDeleteMovie={handleDeleteMovie}
          isCardSaved
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
