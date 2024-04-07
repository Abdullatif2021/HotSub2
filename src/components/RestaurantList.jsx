import { Link } from 'react-router-dom';
import RestaurantCard, { withTopRatedLabel } from './RestaurantCard';
import ShimmerCard from './ShimmerCard';
import { useEffect, useState } from 'react';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
const RestaurantList = ({ isLoading, restaurants }) => {
  console.log('errrrrr', { isLoading, restaurants });
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);
  const lang = useSelector(selectdLang);
  useEffect(() => {
    console.log({ lang });
  }, [lang]);
  const [selectedLang, setLanguage] = useState('EN');
  const [is_loading, setIs_loading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIs_loading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  return (
    <div className='container-max'>
      <h1 className='my-4 mt-8 font-bold text-2xl text-zinc-700'>
        {selectedLang === 'EN' ? 'Our Delicious meals' : 'Nos délicieux repas'}
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {is_loading ? (
          Array.from({ length: 16 }).map((_, i) => <ShimmerCard key={i} />)
        ) : restaurants && restaurants?.length !== 0 ? (
          restaurants.map((restaurant, i) => (
            <Link
              to={`/restaurants/${restaurant.id}`}
              className='hover:scale-95 transition ease-in-out duration-300 relative z-10 item-background'
              key={i}>
              {restaurant.rate >= 4.2 ? (
                <RestaurantCardTopRated restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurant found!</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
