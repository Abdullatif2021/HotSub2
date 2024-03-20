import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import BannerList from './BannerList';
import FoodList from './FoodList';
import RestaurantList from './RestaurantList';
import Banner from './Banner';
import HeroSection from './HeroSection';
import icon from '../assets/images/icon.png';
import Image from '../assets/images/77.png';

const Body = () => {
  const { banners, foods, restaurants, isLoading } = useRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const serachRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();

    setFilteredRestaurants(
      restaurants.filter((rest) =>
        rest.info.name
          .toLowerCase()
          .includes(serachRef.current.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [isLoading]);
  const test = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];
  const [isHovered, setIsHovered] = useState(true);
  return (
    <div className='bg-white relative py-8 background'>
      {/* banners */}
      <BannerList />

      {/* food list */}
      <FoodList foods={foods} isLoading={isLoading} />
      {/* search bar */}
      <form
        onSubmit={handleSearch}
        className='flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6'>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for Chicken Biriyani'
          className='p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-full'
          ref={serachRef}
        />
        <button
          type='submit'
          className='bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base'>
          <MagnifyingGlassIcon className='w-4 h-4' />{' '}
          <span className='hidden md:block'>Search</span>
        </button>
      </form>

      {/* restaurant list */}

      <RestaurantList isLoading={isLoading} restaurants={filteredRestaurants} />
      <HeroSection />
      <div className='fixed bottom-12 right-12 flex flex-col items-center'>
        {/* Conditional rendering for the menu based on hover state */}
        {isHovered && (
          <div className='flex flex-col items-center gap-2 list bg-[#25D366]'>
            <img width={55} src={icon} alt='location' />
            <img width={55} src={icon} alt='call' />
          </div>
        )}

        {/* WhatsApp button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className=' bottom-12 right-12 bg-[#25D366] p-3 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300'>
          <img width={55} src={Image} alt='helper' />
        </button>
      </div>
    </div>
  );
};
export default Body;
