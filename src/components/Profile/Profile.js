import Header from '../Header/Header';
import './Profile.css';

const Profile = ({ onBurgerMenu }) => {
  return (
    <>
      <Header onBurgerMenu={onBurgerMenu} />
      <main className="profile">
        <h1 className="profile__title">Привет, Денис!</h1>
        <form className="profile-form">
          <fieldset className="profile-form__fieldset">
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile-form__input"
                type="text"
                id="name"
                placeholder="Денис"
              />
            </div>
            <div className="profile-form__field">
              <label className="profile-form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile-form__input"
                type="text"
                id="email"
                placeholder="denis-nikolski@ya.ru"
              />
            </div>
          </fieldset>
          <button className="profile_form__button">Редактировать</button>
        </form>
        <button className="profile__button">Выйти из аккаунта</button>
      </main>
    </>
  );
};

export default Profile;
