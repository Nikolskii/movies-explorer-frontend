import './MovieCard.css';

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <article className="movie-card">
      <h2 className="movie-card__title">{movie.nameRU}</h2>
      <p className="movie-card__duration">0 минут </p>
      <img
        className="movie-card__cover"
        src={`https://api.nomoreparties.co${movie.image.url}`}
        alt="Обложка фильма"
      />
      <button className="movie-card__button">Сохранить</button>
    </article>
  );
};

export default MovieCard;
