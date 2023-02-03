import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import constants from '../../utils/constants/constants';

const MoviesCardList = ({
  movies,
  onMoreMovies,
  // checkWindowSize,
  onSaveMovie,
  isListSavedCard,
  handleDeleteMovie,
  savedMovies,
  filteredMovies,
}) => {
  const [renderedMovies, setRenderedMovies] = useState([]);

  const [quantityRenderedMovies, setQuantityRenderedMovies] = useState(null);

  const [quantityMoreRenderedMovies, setQuantityMoreRenderedMovies] =
    useState(null);

  const [isMoreMoviesButtonVisible, setIsMoreMoviesButtonVisible] =
    useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth > constants.windowSize.MEDIUM_SIZE) {
      setQuantityRenderedMovies(12);
      setQuantityMoreRenderedMovies(3);
      return;
    }

    if (
      window.innerWidth <= constants.windowSize.MEDIUM_SIZE &&
      window.innerWidth > constants.windowSize.SMALL_SIZE
    ) {
      setQuantityRenderedMovies(8);
      setQuantityMoreRenderedMovies(2);
      return;
    }

    setQuantityRenderedMovies(5);
    setQuantityMoreRenderedMovies(1);
  };

  // Проверка и подписка на изменение размера окна
  useEffect(() => {
    checkWindowSize();

    window.addEventListener('resize', () => {
      setTimeout(() => {
        checkWindowSize();
      }, 1000);
    });
  }, []);

  // Функция рендера карточек кино
  const renderMovies = ({ movies }) => {
    const initialRenderedMovies = movies.slice(0, quantityRenderedMovies);
    setRenderedMovies(initialRenderedMovies);

    initialRenderedMovies.length === movies.length
      ? setIsMoreMoviesButtonVisible(false)
      : setIsMoreMoviesButtonVisible(true);
  };

  // Функция рендера дополнительных карточек кино
  const renderMoreMovies = ({ filteredMovies }) => {
    const moreMovies = filteredMovies.slice(
      renderedMovies.length,
      renderedMovies.length + quantityMoreRenderedMovies,
    );

    const moreRenderedMovies = renderedMovies.concat(moreMovies);
    setRenderedMovies(moreRenderedMovies);

    if (filteredMovies.length === moreRenderedMovies.length) {
      setIsMoreMoviesButtonVisible(false);
    }
  };

  useEffect(() => {
    renderMovies({ movies: filteredMovies });
  }, [quantityRenderedMovies, filteredMovies]);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__wrapper">
        {renderedMovies.map((movie) => (
          <MovieCard
            movie={movie}
            savedMovies={savedMovies}
            key={isListSavedCard ? movie._id : movie.id}
            onSaveMovie={onSaveMovie}
            isListSavedCard={isListSavedCard}
            handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </div>
      <button
        className={`movies-card-list__button ${
          !isMoreMoviesButtonVisible && 'movies-card-list__button_hidden'
        }`}
        onClick={() => renderMoreMovies({ filteredMovies })}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
