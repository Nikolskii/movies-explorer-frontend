import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies }) => {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__wrapper">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <button className="movies-card-list__button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
