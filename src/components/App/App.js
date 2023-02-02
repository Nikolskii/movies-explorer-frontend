import './App.css';
import {
  register,
  login,
  getUser,
  updateUser,
  saveMovie,
  getMovies,
  deleteMovie,
} from '../../utils/api/MainApi';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import { useEffect, useState } from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import constants from '../../utils/constants/constants';
import getInitialMovies from '../../utils/api/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import BurgerMenuPopup from '../BurgerMenuPopup/BurgerMenuPopup';
import CurrentUserContext from '../../context/CurrentUserContext';
import InfoTooltipPopup from '../InfoTooltipPopup/InfoTooltipPopup';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Данные пользователя
  const [currentUser, setCurrentUser] = useState('');

  // Состояние авторизации пользователя
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Текст запроса поиска кино
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');

  // Состояние переключателя короткометражного кино
  const [isToggleShortMoviesActive, setIsToggleShortMoviesActive] =
    useState(false);

  // Все карточки кино beatfilm-movies
  const [movies, setMovies] = useState([]);

  // Отфильтрованные карточки кино
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Карточки кино для рендера
  const [renderedMovies, setRenderedMovies] = useState([]);

  // Сохраненные карточки кино
  const [savedMovies, setSavedMovies] = useState([]);

  // Сохраненные карточки кино для рендера
  const [renderedSavedMovies, setRenderedSavedMovies] = useState([]);

  // Состояние и текст сообщения о неудачном поиске кино
  const [searchMovieResultMessage, setSearchMovieResultMessage] = useState('');
  const [
    isSearchMovieResultMessageVisible,
    setIsSearchMovieResultMessageVisible,
  ] = useState(false);

  // Текст ошибки формы регистрации
  const [registerFormErrorText, setRegisterFormErrorText] = useState('');

  // Текст ошибки формы авторизации
  const [loginFormErrorText, setLoginFormErrorText] = useState('');

  // Текст кнопки формы регистрации
  const [registerButtonText, setRegisterButtonText] =
    useState('Зарегистрироваться');

  // Текст кнопки формы авторизации
  const [loginButtonText, setLoginButtonText] = useState('Войти');

  // Текст кнопки формы редактирования профиля
  const [updateUserButtonText, setUpdateUserButtonText] =
    useState('Редактировать');

  // Состояние и текст информационного попапа
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

  // Обработчики состояния попапа BurgerMenu
  const handleBurgerMenuClick = () => setIsBurgerMenuPopupOpen(true);

  // Функция закрытия всех попапов
  const closeAllPopups = () => {
    setIsBurgerMenuPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  };

  // Обработчик submit формы поиска кино
  const handleSearchMovies = async (searchQuery) => {
    if (searchQuery.length === 0) {
      setIsInfoTooltipPopupOpen(true);
      setIsSearchResponseSuccess(false);
      setInfoTooltipText(constants.messages.requirementKeyword);
      setMoviesSearchQuery(searchQuery);
      return;
    }

    setIsSearchMovieResultMessageVisible(false);
    setSearchMovieResultMessage(null);
    setRenderedMovies([]);
    setMoviesSearchQuery(searchQuery);
    setIsPreloaderVisible(true);

    try {
      const movies = await getInitialMovies();
      setMovies(movies);
      const filteredMovies = filterMovies({ movies, searchQuery });
      setFilteredMovies(filteredMovies);
      setRenderedMovies(filteredMovies);
      renderMovies(filteredMovies);
    } catch (error) {
      setIsSearchMovieResultMessageVisible(true);
      setSearchMovieResultMessage(constants.messages.serverError);
      console.error(error.message);
    } finally {
      setIsPreloaderVisible(false);
    }
  };

  // Обработчик submit формы поиска сохраненного кино
  const handleSearchSavedMovies = (searchQuery) => {
    if (searchQuery.length === 0) {
      setIsInfoTooltipPopupOpen(true);
      setIsSearchResponseSuccess(false);
      setInfoTooltipText(constants.messages.requirementKeyword);
      return;
    }

    setIsSearchMovieResultMessageVisible(false);
    setSearchMovieResultMessage(null);
    setMoviesSearchQuery(searchQuery);
    setIsSearchMovieResultMessageVisible(false);

    const filteredMovies = filterMovies({
      movies: savedMovies,
      searchQuery,
    });

    setRenderedSavedMovies(filteredMovies);
  };

  // Функция фильтра карточек кино
  const filterMovies = ({
    movies,
    searchQuery,
    isToggleActive = isToggleShortMoviesActive,
  }) => {
    setIsSearchMovieResultMessageVisible(false);
    let filteredMovies;

    filteredMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (isToggleActive) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    if (filteredMovies.length === 0 && movies.length !== 0) {
      setIsSearchMovieResultMessageVisible(true);
      setSearchMovieResultMessage(constants.messages.notFound);
    }
    return filteredMovies;
  };

  // Обработчик переключателя короткометражного кино
  const toggleShortMoviesActive = () => {
    setIsToggleShortMoviesActive(!isToggleShortMoviesActive);

    const filteredMovies = filterMovies({
      movies,
      searchQuery: moviesSearchQuery,
      isToggleActive: !isToggleShortMoviesActive,
    });

    setFilteredMovies(filteredMovies);
    renderMovies(filteredMovies);
  };

  // Обработчик переключателя сохраненного короткометражного кино
  const toggleSavedShortMoviesActive = () => {
    setIsToggleShortMoviesActive(!isToggleShortMoviesActive);

    const filteredMovies = filterMovies({
      movies: savedMovies,
      searchQuery: moviesSearchQuery,
      isToggleActive: !isToggleShortMoviesActive,
    });

    setRenderedSavedMovies(filteredMovies);
  };

  // Количество карточек кино для рендера
  const [quantityRenderedMovies, setQuantityRenderedMovies] = useState(null);

  // Количество карточек кино для дополнительного рендера
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

  // Обработчик submit формы регистрации
  const handleRegister = async ({ name, email, password }) => {
    setRegisterButtonText('Регистрация...');
    setRegisterFormErrorText('');

    try {
      await register({ name, email, password });
      const data = await login({ email, password });

      if (data.token) {
        localStorage.setItem('token', data.token);
        checkToken('/movies');
      }
    } catch (error) {
      console.error(error);

      if (error === 'Conflict') {
        setRegisterFormErrorText(constants.messages.emailIsBusy);
        return;
      }
      setRegisterFormErrorText(constants.messages.registerError);
    } finally {
      setRegisterButtonText('Зарегистрироваться');
    }
  };

  // Обработчик submit формы авторизации
  const handleLogin = async ({ email, password }) => {
    setLoginButtonText('Вход...');
    setLoginFormErrorText('');

    try {
      const data = await login({ email, password });

      if (data.token) {
        localStorage.setItem('token', data.token);
        checkToken('/movies');
      }
    } catch (error) {
      console.error(error);

      if (error === 'Unauthorized') {
        setLoginFormErrorText(constants.messages.incorrectData);
        return;
      }
      setLoginFormErrorText(constants.messages.authError);
    } finally {
      setLoginButtonText('Войти');
    }
  };

  // Обработчик submit формы редактирования профиля
  const handleUpdateUser = async ({ name, email }) => {
    setUpdateUserButtonText('Редактирование...');

    try {
      const user = await updateUser({ name, email });
      setCurrentUser(user);
      setIsInfoTooltipPopupOpen(true);
      setIsSearchResponseSuccess(true);
      setInfoTooltipText(constants.messages.successfulUpdate);
    } catch (error) {
      console.error(error);
      setIsInfoTooltipPopupOpen(true);
      setIsSearchResponseSuccess(false);

      if (error === 'Conflict') {
        setInfoTooltipText(constants.messages.emailIsBusy);
        return;
      }
      setInfoTooltipText(constants.messages.updateError);
    } finally {
      setUpdateUserButtonText('Редактировать');
    }
  };

  // Проверка токена
  const checkToken = async (path) => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const user = await getUser(token);
        setCurrentUser(user);
        setIsLoggedIn(true);
        path ? navigate(path) : navigate(pathname);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Обработчик выхода
  const handleSignout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Обработчик сохранения карточки кино
  const handleSaveMovie = async ({ movie }) => {
    try {
      const savedMovie = await saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });

      setSavedMovies([...savedMovies, savedMovie]);
      setRenderedSavedMovies([...renderedSavedMovies, savedMovie]);
    } catch (error) {
      console.error(error);
    }
  };

  // Обработчик получения сохраненной карточки кино
  const getSavedMovies = async () => {
    try {
      const movies = await getMovies();
      setSavedMovies(movies);
      setRenderedSavedMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  // Обработчик удаления карточки кино
  const handleDeleteMovie = async ({ movieId }) => {
    try {
      await deleteMovie({ movieId });

      setSavedMovies((savedMovies) =>
        savedMovies.filter((movie) => movie._id !== movieId),
      );

      setRenderedSavedMovies((renderedMovies) =>
        renderedMovies.filter((movie) => movie._id !== movieId),
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Проверка токена
  useEffect(() => {
    checkToken();
  }, []);

  // Получение карточек сохраненного кино
  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                formErrorText={registerFormErrorText}
                registerButtonText={registerButtonText}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={handleLogin}
                formErrorText={loginFormErrorText}
                loginButtonText={loginButtonText}
              />
            }
          />
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onBurgerMenu={handleBurgerMenuClick}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
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
                  isLoggedIn={isLoggedIn}
                  onSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  onSearchMovies={handleSearchSavedMovies}
                  moviesSearchQuery={moviesSearchQuery}
                  onBurgerMenu={handleBurgerMenuClick}
                  savedMovies={savedMovies}
                  renderedSavedMovies={renderedSavedMovies}
                  checkWindowSize={checkWindowSize}
                  isLoggedIn={isLoggedIn}
                  handleDeleteMovie={handleDeleteMovie}
                  isToggleShortMoviesActive={isToggleShortMoviesActive}
                  toggleShortMoviesActive={toggleSavedShortMoviesActive}
                  isSearchMovieResultMessageVisible={
                    isSearchMovieResultMessageVisible
                  }
                  searchMovieResultMessage={searchMovieResultMessage}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  onBurgerMenu={handleBurgerMenuClick}
                  isLoggedIn={isLoggedIn}
                  onUpdateUser={handleUpdateUser}
                  onSignout={handleSignout}
                  updateUserButtonText={updateUserButtonText}
                />
              </ProtectedRoute>
            }
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
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
