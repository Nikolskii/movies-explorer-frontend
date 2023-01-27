import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  renderedMovies,
  onMoreMovies,
  isMoreMoviesButtonVisible,
}) => {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__wrapper">
        {renderedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <button
        className={`movies-card-list__button ${
          !isMoreMoviesButtonVisible && 'movies-card-list__button_hidden'
        }`}
        onClick={onMoreMovies}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
