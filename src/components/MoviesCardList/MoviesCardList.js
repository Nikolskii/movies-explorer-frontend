import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__wrapper">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
