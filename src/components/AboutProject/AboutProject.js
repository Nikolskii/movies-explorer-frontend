import Subtitle from '../Subtitle/Subtitle';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about" id="about-project">
      <Subtitle text="О проекте" />
      <div className="about__two-columns">
        <article className="about__column">
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <h4 className="about__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h4>
        </article>
        <article className="about__column">
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <h4 className="about__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h4>
        </article>
      </div>
      <section className="about__timeline">
        <p className="about__timeline-weeks about__timeline-weeks_akcent">
          1 неделя
        </p>
        <p className="about__timeline-weeks">4 недели</p>
        <p className="about__timeline-direction">Back-end</p>
        <p className="about__timeline-direction">Front-end</p>
      </section>
    </section>
  );
};

export default AboutProject;
