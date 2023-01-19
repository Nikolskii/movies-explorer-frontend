import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
};

export default Main;
