import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard, { withTopRatedLabel } from './RestaurantCard';
import ShimmerCard from './ShimmerCard';
import { useSelector } from 'react-redux';
import { selectdLang } from '../features/app/appSlice';

const RestaurantList = ({ isLoading, restaurants }) => {
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);
  const lang = useSelector(selectdLang);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [is_loading, setIsLoading] = useState(true);

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectedLang]);

  const getCategoryFromName = (meal) => {
    // Implement your logic here to determine the category from the meal name
    // For example, you might split the name by space and take the first word
    return selectedLang === 'EN' ? meal.en_category : meal.fr_category;
  };

  // Group meals by category
  const categories = restaurants.reduce((acc, meal) => {
    const category = getCategoryFromName(meal);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(meal);
    return acc;
  }, {});

  return (
    <div className='container-max'>
      {Object.entries(categories).map(([category, meals]) => (
        <div key={category}>
          <h2 className='my-4 mt-8 font-bold text-2xl text-zinc-700'>
            {selectedLang === 'EN'
              ? category
              : category === 'Poulet'
              ? 'Chicken'
              : category}{' '}
            {/* Customize category name if needed */}
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
            {is_loading
              ? Array.from({ length: 4 }).map((_, i) => <ShimmerCard key={i} />)
              : meals.map((restaurant, i) => (
                  <Link
                    className='hover:scale-95 transition ease-in-out duration-300 relative z-10 item-background'
                    key={i}>
                    {restaurant.rate >= 4.2 ? (
                      <RestaurantCardTopRated restaurant={restaurant} />
                    ) : (
                      <RestaurantCard restaurant={restaurant} />
                    )}
                  </Link>
                ))}
          </div>
        </div>
      ))}
      {Object.keys(categories).length === 0 && !isLoading && (
        <p>No restaurant found!</p>
      )}
    </div>
  );
};

export default RestaurantList;
