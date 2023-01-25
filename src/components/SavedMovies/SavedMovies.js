import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import Header from '../Header/Header';

const SavedMovies = ({ onBurgerMenu }) => {
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
