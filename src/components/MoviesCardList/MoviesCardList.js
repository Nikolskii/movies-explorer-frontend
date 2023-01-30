import { useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  onMoreMovies,
  isMoreMoviesButtonVisible,
  checkWindowSize,
  onSaveMovie,
  isCardSaved,
  handleDeleteMovie,
}) => {
  // Проверка и подписка на изменение размера окна
  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        checkWindowSize();
      }, 1000);
    });
  }, []);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__wrapper">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={isCardSaved ? movie._id : movie.id}
            onSaveMovie={onSaveMovie}
            isCardSaved={isCardSaved}
            handleDeleteMovie={handleDeleteMovie}
          />
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
