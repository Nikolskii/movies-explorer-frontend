import './Footer.css';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__copyright">
        <p className="footer__date">&copy; {currentDate}</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a
              className="footer__link"
              href="https://github.com/Nikolskii"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
