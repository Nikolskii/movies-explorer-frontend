const BASE_URL = 'https://api.nikolsky.nomoredomains.rocks';

const checkResponse = (res) =>
  // res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);
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

export { register };
