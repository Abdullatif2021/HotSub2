import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { CDN_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';

const RestaurantCard = ({ restaurant }) => {
  const [selectedLang, setLanguage] = useState('EN');
  const lang = useSelector(selectdLang);
  console.log({ restaurant });
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  return (
    <>
      <div className='overlay-container'>
        <img
          src={restaurant.image}
          alt='restaurant'
          className='relative w-full min-h-[122px] md:min-h-[183px] overflow-hidden aspect-video object-contain block rounded-md'
        />
        <div className='overlay w-full rounded-md p-2 px-3 '>
          <p className='text-xl font-bold flex gap-2 flex-wrap'>
            {selectedLang === 'EN' ? restaurant.en_extra : restaurant.fr_extra}
          </p>
        </div>
      </div>

      <h2 className='text-lg font-semibold mt-2' style={{ color: '#df5f61' }}>
        {' '}
        {selectedLang === 'EN' ? restaurant.en_name : restaurant.fr_name}
      </h2>
      {/* <div className='flex items-center gap-2'>
        <StarIcon className='w-6 h-6 text-orange-400' />{' '}
        <p className='font-semibold text-gray-700 text-sm'>{restaurant.rate}</p>
      </div> */}

      <p className='  text-zinc-600'>
        {selectedLang === 'EN'
          ? restaurant?.en_ingredients?.map((c, i) => (
              <span key={i}>
                {c}
                {i === restaurant.en_ingredients.length - 1 ? '' : ', '}
              </span>
            ))
          : restaurant?.fr_ingredients?.map((c, i) => (
              <span key={i}>
                {c}
                {i === restaurant.fr_ingredients.length - 1 ? '' : ', '}
              </span>
            ))}
      </p>

      <p style={{ color: '#df5f61' }}>$ {restaurant.price}</p>
    </>
  );
};

export default RestaurantCard;

//  HOC for Top Rated Restaurants
export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <p className='absolute z-10 -top-2 -left-2 rounded-md p-2 px-4 bg-zinc-900 text-white text-xs'>
          Top Rated
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
