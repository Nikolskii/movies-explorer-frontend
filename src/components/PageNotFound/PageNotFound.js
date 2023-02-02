import './PageNotFound.css';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <div className="page-not-found__wrapper">
        <h1 className="page-not-found__title">404</h1>
        <h2 className="page-not-found__subtitle">Страница не найдена</h2>
      </div>
      <NavLink className="page-not-found__button" to="/">
        Назад
      </NavLink>
    </section>
  );
};

export default PageNotFound;
