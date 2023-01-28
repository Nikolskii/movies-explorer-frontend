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
import { register } from '../../utils/api/MainApi';

const App = () => {
  // Текст запроса поиска кино
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');

  const [isToggleShortMoviesActive, setIsToggleShortMoviesActive] =
    useState(false);

  // Массив всех карточек кино
  const [movies, setMovies] = useState([]);

  // Массив отфильтрованных карточек кино
  const [filteredMovies, setFilteredMovies] = useState([]);

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

    setIsSearchMovieResultMessageVisible(false);
    setSearchMovieResultMessage(null);
    setRenderedMovies([]);
    setMoviesSearchQuery(searchQuery);
    setIsPreloaderVisible(true);

    try {
      const movies = await getMovies();
      setMovies(movies);
      const filteredMovies = filterMovies(movies, searchQuery);
      setFilteredMovies(filteredMovies);
      renderMovies(filteredMovies);
    } catch (err) {
      setIsSearchMovieResultMessageVisible(true);
      setSearchMovieResultMessage(constants.messages.serverError);
      console.error(err.message);
    } finally {
      setIsPreloaderVisible(false);
    }
  };

  // Функция фильтра карточек кино по названию
  const filterMovies = (
    movies,
    searchQuery,
    isToggleActive = isToggleShortMoviesActive,
  ) => {
    setIsSearchMovieResultMessageVisible(false);
    let filteredMovies;
    filteredMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // if (isToggleShortMoviesActive) {
    if (isToggleActive) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    if (filteredMovies.length === 0 && movies.length !== 0) {
      setIsSearchMovieResultMessageVisible(true);
      setSearchMovieResultMessage(constants.messages.notFound);
    }

    setRenderedMovies(filteredMovies);
    setFilteredMovies(filteredMovies);
    return filteredMovies;
  };

  // Обработчик переключателя короткометражных кино

  const toggleShortMoviesActive = () => {
    setIsToggleShortMoviesActive(!isToggleShortMoviesActive);
    const isToggleActive = !isToggleShortMoviesActive;
    filterMovies(movies, moviesSearchQuery, isToggleActive);
  };

  // Количество карточек кино для рендера
  const [quantityRenderedMovies, setQuantityRenderedMovies] = useState(null);

  // Количество карточек кино дополнительного для рендера
  const [quantityMoreRenderedMovies, setQuantityMoreRenderedMovies] =
    useState(null);

  // Проверка размер окна
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

  // Функция рендера карточек кино
  const renderMovies = (movies) => {
    const initialRenderedMovies = movies.slice(0, quantityRenderedMovies);
    setRenderedMovies(initialRenderedMovies);

    initialRenderedMovies.length === movies.length
      ? setIsMoreMoviesButtonVisible(false)
      : setIsMoreMoviesButtonVisible(true);
  };

  // Функция рендера дополнительных карточек кино
  const renderMoreMovies = () => {
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

  // Обработчик регистрации

  const handleRegister = () => {
    console.log('run func reg');
    const name = 'leha';
    const email = 'l@l1.ru';
    const password = '1234';
    register({ name, email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              onSearchMovies={handleSearchMovies}
              isToggleShortMoviesActive={isToggleShortMoviesActive}
              toggleShortMoviesActive={toggleShortMoviesActive}
              onBurgerMenu={handleBurgerMenuClick}
              isPreloaderVisible={isPreloaderVisible}
              isSearchMovieResultMessageVisible={
                isSearchMovieResultMessageVisible
              }
              searchMovieResultMessage={searchMovieResultMessage}
              renderedMovies={renderedMovies}
              onMoreMovies={renderMoreMovies}
              isMoreMoviesButtonVisible={isMoreMoviesButtonVisible}
              checkWindowSize={checkWindowSize}
              moviesSearchQuery={moviesSearchQuery}
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
