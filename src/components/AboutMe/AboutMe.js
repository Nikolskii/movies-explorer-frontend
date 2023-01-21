import Subtitle from '../Subtitle/Subtitle';
import photo from '../../images/avatar.jpg';

import './AboutMe.css';
const AboutMe = () => {
  return (
    <section className="about-me">
      <Subtitle text="Студент" />
      <div className="about-me__wrapper">
        <div className="about-info">
          <h3 className="about-me__title">Денис</h3>
          <h4 className="about-me__subtitle">Фронтенд-разработчик, 29 лет</h4>
          <p className="about-me__paragraph">
            Я родился и живу в Калининграде, закончил факультет экономики БФУ
            им. Канта. У меня есть жена и кошка. Я люблю слушать музыку, а ещё
            увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании ОАО "РЖД". После того, как прошёл курс по веб-разработке,
            начал заниматься поиском новой работы.
          </p>
          <a className="about-me__link" href="https://github.com/Nikolskii">
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография" />
      </div>
    </section>
  );
};

export default AboutMe;
