import './Header.css';
import logo from '../../images/logo.svg';
import pattern from '../../images/bg-pattern-1.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='equalizer logo' className='logo' />
      <h1 className='header__title'>We make your music sound extraordinary.</h1>
      <p className='header__text'>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
      <img src={pattern} alt='decorative pattern' className='header__pattern' />
    </header>
  );
};

export default Header;
