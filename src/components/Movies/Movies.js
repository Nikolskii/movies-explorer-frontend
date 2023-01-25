import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Movies = ({ onBurgerMenu }) => {
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} />
      <section className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
