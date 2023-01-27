import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenuPopup from '../BurgerMenuPopup/BurgerMenuPopup';
import getMovies from '../../utils/api/MoviesApi';
import InfoTooltipPopup from '../InfoTooltipPopup/InfoTooltipPopup';
import constants from '../../utils/constants/constants';

const App = () => {
  // Текст запроса поиска кино
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');

  // Массив карточек кино
  const [movies, setMovies] = useState([]);

  // Массив карточек для рендера
  const [renderedMovies, setRenderedMovies] = useState([]);

  // Состояние и текст сообщения о неудачном поиске кино
  const [searchMovieResultMessage, setSearchMovieResultMessage] = useState('');
  const [
    isSearchMovieResultMessageVisible,
    setIsSearchMovieResultMessageVisible,
  ] = useState(false);

  // Свойство и состояние информационного попапа
  const [isSearchResponseSuccess, setIsSearchResponseSuccess] = useState(null);
  const [infoTooltipText, setInfoTooltipText] = useState('');

  // Состояние прелоадера
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);

  // Состояние попапов
  const [isBurgerMenuPopupOpen, setIsBurgerMenuPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  // Состояние кнопку загрузки дополнительных карточек
  const [isMoreMoviesButtonVisible, setIsMoreMoviesButtonVisible] =
    useState(false);

  // Обработчики состояния попапов
  const handleBurgerMenuClick = () => setIsBurgerMenuPopupOpen(true);

  // Функция закрытия всех попапов
  const closeAllPopups = () => {
    setIsBurgerMenuPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  };

  // Обработчик submit формы поиска фильмов
  const handleSearchMovies = async (searchQuery) => {
    if (searchQuery.length === 0) {
      setIsInfoTooltipPopupOpen(true);
      setIsSearchResponseSuccess(false);
      setInfoTooltipText(constants.messages.requirementKeyword);
      return;
    }

    setMoviesSearchQuery(searchQuery);
    setIsPreloaderVisible(true);

    try {
      const movies = await getMovies();
      setMovies(movies);

      renderMovies(movies);
    } catch (err) {
      setIsSearchMovieResultMessageVisible(true);
      setSearchMovieResultMessage(constants.messages.serverError);
      console.error(err.message);
    } finally {
      setIsPreloaderVisible(false);
    }
  };

  // Ширина окна
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Количество карточек кино для рендера
  const [quantityRenderedMovies, setQuantityRenderedMovies] = useState(null);

  // Количество дополнительных карточек кино для рендера
  const [quantityMoreRenderedMovies, setQuantityMoreRenderedMovies] =
    useState(null);

  // Подписка на изменение размера окна
  useEffect(() => {
    checkWindowSize();
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const checkWindowSize = () => {
    if (windowWidth > constants.windowSize.LARGE_SIZE) {
      setQuantityRenderedMovies(12);
      setQuantityMoreRenderedMovies(3);
      return;
    }

    if (windowWidth > constants.windowSize.MEDIUM_SIZE) {
      setQuantityRenderedMovies(8);
      setQuantityMoreRenderedMovies(2);
      return;
    }

    if (windowWidth < constants.windowSize.MEDIUM_SIZE) {
      setQuantityRenderedMovies(5);
      setQuantityMoreRenderedMovies(1);
      return;
    }
  };

  // Функция рендера карточек кино
  const renderMovies = (movies) => {
    setIsMoreMoviesButtonVisible(true);
    const initialRenderedMovies = movies.slice(0, quantityRenderedMovies);
    setRenderedMovies(initialRenderedMovies);
  };

  // Функция рендера дополнительных карточек кино
  const renderMoreMovies = () => {
    const moreMovies = movies.slice(
      renderedMovies.length,
      renderedMovies.length + quantityMoreRenderedMovies,
    );
    const moreRenderedMovies = renderedMovies.concat(moreMovies);
    setRenderedMovies(moreRenderedMovies);
    if (movies.length === moreRenderedMovies.length) {
      setIsMoreMoviesButtonVisible(false);
    }
  };

  return (
    <div className="page">
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              onSearchMovies={handleSearchMovies}
              onBurgerMenu={handleBurgerMenuClick}
              isPreloaderVisible={isPreloaderVisible}
              isSearchMovieResultMessageVisible={
                isSearchMovieResultMessageVisible
              }
              searchMovieResultMessage={searchMovieResultMessage}
              renderedMovies={renderedMovies}
              onMoreMovies={renderMoreMovies}
              isMoreMoviesButtonVisible={isMoreMoviesButtonVisible}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies onBurgerMenu={handleBurgerMenuClick} />}
        />
        <Route
          path="/profile"
          element={<Profile onBurgerMenu={handleBurgerMenuClick} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <BurgerMenuPopup
        isOpen={isBurgerMenuPopupOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltipPopup
        isOpen={isInfoTooltipPopupOpen}
        isResponseSuccess={isSearchResponseSuccess}
        onClose={closeAllPopups}
        titleText={infoTooltipText}
      />
    </div>
  );
};

export default App;
