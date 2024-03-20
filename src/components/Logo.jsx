import { Link } from 'react-router-dom';
import logoImage from '../assets/images/newLogo.png';
const Logo = () => {
  return (
    <Link
      to='/'
      data-testid='logo'
      className='text-xl md:text-2xl font-semibold flex items-center'>
      <img src={logoImage} alt='logo' />
      {/* 🍔 <span className='hidden md:block logo'>FoodHunt</span> */}
    </Link>
  );
};

export default Logo;
