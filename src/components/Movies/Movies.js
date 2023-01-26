import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Movies = ({ onSearchMovies, onBurgerMenu }) => {
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} />
      <main className="movies">
        <SearchForm onSearchMovies={onSearchMovies} />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
