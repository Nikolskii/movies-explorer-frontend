import './MovieCard.css';
import movieCover from '../../images/movie-cover.jpg';

const MovieCard = () => {
  return (
    <article className="movie-card">
      <h2 className="movie-card__title">В погоне за Бенкси</h2>
      <p className="movie-card__duration">27 минут </p>
      <img
        className="movie-card__cover"
        src={movieCover}
        alt="Обложка фильма"
      />
      <button className="movie-card__button">Сохранить</button>
    </article>
  );
};

export default MovieCard;
