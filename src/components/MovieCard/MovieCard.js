import './MovieCard.css';

const MovieCard = ({ movie, onSaveMovie, isCardSaved }) => {
  console.log(isCardSaved);
  console.log(movie.image.url);

  const movieCardImgSrc = isCardSaved
    ? movie.image
    : `https://api.nomoreparties.co${movie.image.url}`;
  console.log(movieCardImgSrc);

  return (
    <article className="movie-card">
      <h2 className="movie-card__title">{movie.nameRU}</h2>
      <p className="movie-card__duration">{`${movie.duration} минут`}</p>
      <a
        className="movie-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie-card__cover"
          // src={`https://api.nomoreparties.co${movie.image.url}`}
          src={movieCardImgSrc}
          alt="Обложка фильма"
        />
      </a>
      <button className="movie-card__button" onClick={() => onSaveMovie(movie)}>
        Сохранить
      </button>
    </article>
  );
};

export default MovieCard;
