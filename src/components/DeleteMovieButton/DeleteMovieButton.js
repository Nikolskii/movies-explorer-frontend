import './DeleteMovieButton.css';

const DeleteMovieButton = ({ onDeleteMovie }) => {
  return <button className="delete-card-button" onClick={onDeleteMovie} />;
};

export default DeleteMovieButton;
