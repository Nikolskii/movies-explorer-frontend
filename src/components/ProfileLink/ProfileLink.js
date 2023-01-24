import './ProfileLink.css';
import profileIcon from '../../images/profile.svg';

const ProfileLink = () => {
  return (
    <div className="profile-link">
      <img className="profile-icon" src={profileIcon} alt="Иконка профиля" />
    </div>
  );
};

export default ProfileLink;
