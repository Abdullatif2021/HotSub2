import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import useRestaurants from '../hooks/useRestaurants';
import { GET_RESTAURANTS_URL } from '../utils/constants';
import BannerList from './BannerList';
import FoodList from './FoodList';
import RestaurantList from './RestaurantList';
import Banner from './Banner';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import icon from '../assets/images/icon.png';
import icon1 from '../assets/images/77.png';
import call from '../assets/images/call.png';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import { meals } from '../store/meals';
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
  const lang = useSelector(selectdLang);
  useEffect(() => {
    console.log({ lang });
  }, [lang]);
  const [selectedLang, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [isLoading]);

  const latitude = 45.426714694644396;
  const longitude = -75.71570931534453;
  const [isHovered, setIsHovered] = useState(false);
  const handleCall = () => {
    // Ensure the phoneNumber is in the correct format and URL encoded if necessary
    const formattedNumber = encodeURIComponent('+1 819-777-7171');
    // Use window.location to navigate
    window.location.href = `tel:${formattedNumber}`;
  };
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
          placeholder={
            selectedLang === 'EN' ? 'Search for Meals' : 'Rechercher des repas'
          }
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

      <RestaurantList isLoading={isLoading} restaurants={meals} />
      <Testimonials />
      <HeroSection />
      <div className='fixed bottom-12 right-12 flex flex-col items-center z-50'>
        {/* Conditional rendering for the menu based on hover state */}
        {isHovered && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target='_blank'>
            <button
              onClick={() => setIsHovered(!isHovered)}
              className=' bottom-12 mb-1 right-12 bg-[#df5f61] p-3 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#df5f61] transition-colors duration-300'>
              <img width={48} src={icon} alt='helper' />
            </button>
          </a>
        )}

        {/* WhatsApp button */}
        <button
          onClick={() => setIsHovered(!isHovered)}
          className=' bottom-12 right-12 bg-[#df5f61] p-4 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#df5f61] transition-colors duration-300'>
          {isHovered ? (
            <img width={35} onClick={handleCall} src={call} alt='helper' />
          ) : (
            <img width={48} src={icon1} alt='helper' />
          )}
        </button>
      </div>
    </div>
  );
};
export default Body;
