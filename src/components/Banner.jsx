import { CDN_URL } from '../utils/constants';
import '../assets/food.css';

const Banner = ({ banner }) => {
  const test = {
    1: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg',
    2: 'https://static.toiimg.com/thumb/imgsize-23456,msid-68217715,width-600,resizemode-4/68217715.jpg',
    3: 'https://www.gopaisa.com/blog/wp-content/uploads/2016/10/Screenshot_5.jpg',
  };

  return (
    <div className='keen-slider__slide'>
      <img className='block w-full images' src={test[banner.id]} alt='' />
    </div>
  );
};

export default Banner;
