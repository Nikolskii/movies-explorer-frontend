import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenuPopup from '../BurgerMenuPopup/BurgerMenuPopup';
import { useState } from 'react';
import getMovies from '../../utils/MoviesApi';

const App = () => {
  // Состояние попапов
  const [isBurgerMenuPopupOpen, setIsBurgerMenuPopupOpen] = useState(false);

  // Обработчики состояния попапов
  const handleBurgerMenuClick = () =>
    setIsBurgerMenuPopupOpen(!isBurgerMenuPopupOpen);

  // Обработчик submit формы поиска фильмов
  const handleSearchMovies = async () => {
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
        onBurgerMenu={handleBurgerMenuClick}
      />
    </div>
  );
};

export default App;
