import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenuPopup from '../BurgerMenuPopup/BurgerMenuPopup';
import getMovies from '../../utils/MoviesApi';
import InfoTooltipPopup from '../InfoTooltipPopup/InfoTooltipPopup';

const App = () => {
  const [moviesSearchQuery, setMoviesSearchQuery] = useState('');
  const [isSearchResponseSuccess, setIsSearchResponseSuccess] = useState(null);
  const [infoTooltipText, setInfoTooltipText] = useState('');

  // Состояние попапов
  const [isBurgerMenuPopupOpen, setIsBurgerMenuPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

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
      setInfoTooltipText('Нужно ввести ключевое слово');
      return;
    }
    try {
      const movies = await getMovies();
      console.log(movies);
    } catch (err) {
      console.error(err.message);
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
