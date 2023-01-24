import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useState } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <LoggedInContext.Provider value={loggedIn}>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedInContext.Provider>
    </div>
  );
};

export default App;
