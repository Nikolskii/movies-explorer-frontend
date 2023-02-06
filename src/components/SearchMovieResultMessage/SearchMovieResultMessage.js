import './SearchMovieResultMessage.css';

const SearchMovieResultMessage = ({ isVisible, textMessage }) => {
  return (
    <h2 className={`result-message ${isVisible && 'result-message_active'}`}>
      {textMessage}
    </h2>
  );
};

export default SearchMovieResultMessage;
