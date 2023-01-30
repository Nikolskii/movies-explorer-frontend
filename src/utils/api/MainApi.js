const BASE_URL = 'https://api.nikolsky.nomoredomains.rocks';

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res.statusText);

const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then(checkResponse);
};

const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
};

const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const updateUser = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(checkResponse);
};

const saveMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    }),
  }).then(checkResponse);
};

export { register, login, getUser, updateUser, saveMovie };
