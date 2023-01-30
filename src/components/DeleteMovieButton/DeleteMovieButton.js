import './DeleteMovieButton.css';

const DeleteMovieButton = ({ handleDelete, movieId }) => {
  return (
    <button
      className="delete-card-button"
      onClick={() => handleDelete({ movieId })}
    />
  );
};

export default DeleteMovieButton;
