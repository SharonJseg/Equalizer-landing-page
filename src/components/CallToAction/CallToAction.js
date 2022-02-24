import './CallToAction.css';
import iosIcn from '../../images/icon-apple.svg';
import androidIcn from '../../images/icon-android.svg';

const CallToAction = () => {
  return (
    <div className='call-to-action'>
      <h2 className='call-to-action__header'>Premium EQ</h2>
      <p className='call-to-action__text'>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <p className='call-to-action__price'>
        <span>$4</span> / month
      </p>
      <button className='call-to-action__button ios'>
        <img src={iosIcn} alt='ios icon' className='ios__icon' />
        iOS Download
      </button>
      <button className='call-to-action__button andriod'>
        <img src={androidIcn} alt='ios icon' className='ios__icon' />
        Android Download
      </button>
    </div>
  );
};

export default CallToAction;
