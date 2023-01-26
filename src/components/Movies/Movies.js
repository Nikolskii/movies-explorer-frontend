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
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
