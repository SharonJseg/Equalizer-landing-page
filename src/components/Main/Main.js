import './Main.css';
import appImage from '../../images/illustration-app.png';
import pattern from '../../images/bg-pattern-2.svg';
import CallToAction from '../CallToAction/CallToAction';

const Main = () => {
  return (
    <main className='main'>
      <div className='main__container'>
        <CallToAction />
        <picture>
          <img
            src={appImage}
            alt='illustration of the app'
            className='main__image'
          />
        </picture>
        <picture>
          <img
            src={pattern}
            alt='illustratitve pattern'
            className='main__pattern'
          />
        </picture>
      </div>
    </main>
  );
};

export default Main;
