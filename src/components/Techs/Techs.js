import Subtitle from '../Subtitle/Subtitle';
import './Techs.css';

const Techs = () => {
  return (
    <section className="techs" id="technologies">
      <Subtitle text="Технологии" />
      <div className="techs__column">
        <h3 className="techs__title">7 технологий</h3>
        <h4 className="techs_subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </h4>
        <ul className="techs__items">
          <li className="techs_item">HTML</li>
          <li className="techs_item">CSS</li>
          <li className="techs_item">JS</li>
          <li className="techs_item">React</li>
          <li className="techs_item">Git</li>
          <li className="techs_item">Express.js</li>
          <li className="techs_item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
