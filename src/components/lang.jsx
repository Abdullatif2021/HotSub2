import { Link } from 'react-router-dom';
import logoImage from '../assets/images/newLogo.png';
import '../assets/_hero-section.scss';

const lang = () => {
  return (
    <div
      class='language'
      role='radiogroup'
      aria-labelledby='language-switcher1'>
      <p class='hidden' id='language-switcher1'>
        Choose a language for this website
      </p>
      <div class='language__container--left language__container--fr'>
        <input
          class='language__control'
          type='radio'
          id='language1-1'
          name='language-switch1'
        />
        <label class='language__label' for='language1-1'>
          FR<span class='hidden'> Français</span>
        </label>
      </div>
      <div class='language__container--right language__container--en'>
        <input
          class='language__control'
          type='radio'
          id='language1-2'
          name='language-switch1'
        />
        <label class='language__label' for='language1-2'>
          EN<span class='hidden'> English</span>
        </label>
      </div>
    </div>
  );
};

export default lang;