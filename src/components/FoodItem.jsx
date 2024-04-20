import { CDN_URL } from '../utils/constants';

const FoodItem = ({ food }) => {
  return (
    <div className='w-full keen-slider__slide'>
      <img
        src={food.img}
        style={{ width: food.width }}
        className='w-full pointer-events-none imagessss'
        alt=''
      />
    </div>
  );
};
export default FoodItem;
