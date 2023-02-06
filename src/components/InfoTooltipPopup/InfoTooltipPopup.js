import './InfoTooltipPopup.css';
import onResponseSuccessImg from '../../images/info-tooltip-success.svg';
import onResponseUnsuccessImg from '../../images/info-tooltip-unsuccess.svg';

const InfoTooltipPopup = ({
  isOpen,
  isResponseSuccess,
  onClose,
  titleText,
}) => {
  return (
    <section
      className={`info-tooltip-popup ${isOpen && 'info-tooltip-popup_opened'}`}
    >
      <div className="info-tooltip-popup__container">
        <img
          className="info-tooltip-popup__img"
          src={
            isResponseSuccess ? onResponseSuccessImg : onResponseUnsuccessImg
          }
          alt="Изображение информационного попапа"
        />
        <h2 className="info-tooltip-popup__title">{titleText}</h2>
        <button
          className="info-tooltip-popup__button"
          type="button"
          onClick={onClose}
        />
      </div>
    </section>
  );
};

export default InfoTooltipPopup;
