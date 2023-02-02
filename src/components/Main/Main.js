import './Main.css';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import AboutProject from '../AboutProject/AboutProject';

const Main = ({ isLoggedIn, onBurgerMenu }) => {
  return (
    <>
      <Header
        place="main"
        isLoggedIn={isLoggedIn}
        onBurgerMenu={onBurgerMenu}
      />
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
