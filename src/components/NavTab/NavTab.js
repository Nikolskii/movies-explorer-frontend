import './NavTab.css';

const NavTab = () => {
  return (
    <section className="navtab">
      <nav className="navtab__nav">
        <ul className="navtab__links">
          <li className="navtab__links-item">
            <a className="navtab__link" href="#about-project">
              О проекте
            </a>
          </li>
          <li className="navtab__links-item">
            <a className="navtab__link" href="#technologies">
              Технологии
            </a>
          </li>
          <li className="navtab__links-item">
            <a className="navtab__link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavTab;
