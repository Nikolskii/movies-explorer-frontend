import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className="page">
      <Header />
      {/* <Main /> */}
      <Movies />
      {/* <Profile /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
