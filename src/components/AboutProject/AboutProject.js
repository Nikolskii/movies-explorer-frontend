import Subtitle from '../Subtitle/Subtitle';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <Subtitle text="О проекте" />
      <div className="about-project__two-columns">
        <article className="about-project__column">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <h4 className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h4>
        </article>
        <article className="about-project__column">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <h4 className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h4>
        </article>
      </div>
      <section className="about-project__timeline">
        <p className="about-project__timeline-weeks about-project__timeline-weeks_akcent">
          1 неделя
        </p>
        <p className="about-project__timeline-weeks">4 недели</p>
        <p className="about-project__timeline-direction">Back-end</p>
        <p className="about-project__timeline-direction">Front-end</p>
      </section>
    </section>
  );
};

export default AboutProject;
