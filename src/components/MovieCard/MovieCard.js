import DeleteMovieButton from '../DeleteMovieButton/DeleteMovieButton';
import './MovieCard.css';

const MovieCard = ({
  movie,
  onSaveMovie,
  isListSavedCard,
  handleDeleteMovie,
}) => {
  const movieCardImgSrc = isListSavedCard
    ? movie.image
    : `https://api.nomoreparties.co${movie.image.url}`;

  // const isSavedMovie = savedMovies.filter((m) => m.nameRU === movie.nameRU);

  const handleDelete = ({ movieId }) => {
    handleDeleteMovie({ movieId });
  };

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
          src={movieCardImgSrc}
          alt="Обложка фильма"
        />
      </a>
      {isListSavedCard ? (
        <DeleteMovieButton handleDelete={handleDelete} movieId={movie._id} />
      ) : (
        <button
          className="movie-card__button"
          onClick={() => onSaveMovie({ movie })}
        >
          Сохранить
        </button>
      )}
    </article>
  );
};

export default MovieCard;
