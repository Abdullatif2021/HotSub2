import { CDN_URL } from '../utils/constants';
import '../assets/food.css';
import slider1 from '../assets/slider/slider (1).jpg';
import slider2 from '../assets/slider/slider (2).jpg';
import slider3 from '../assets/slider/slider (3).jpg';

import slider9 from '../assets/slider/slider (9).jpg';
import slider10 from '../assets/slider/slider (14).jpg';
const Banner = ({ banner }) => {
  const test = {
    1: slider1,
    2: slider2,
    3: slider3,
    4: slider9,
    5: slider10,
  };

  return (
    <div className='keen-slider__slide'>
      <img className='block w-full images' src={test[banner.id]} alt='' />
    </div>
  );
};

export default Banner;
