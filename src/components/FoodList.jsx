import React, { useState, useEffect, useRef } from 'react';
import FoodItem from './FoodItem';
import '../assets/food.css';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
const FoodList = ({ foods }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(8); // Default to large screens
  const [selectedLang, setLanguage] = useState('EN');
  const lang = useSelector(selectdLang);

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleSlides(3); // Small screens
      } else if (width >= 640 && width < 1024) {
        setVisibleSlides(6); // Medium screens
      } else {
        setVisibleSlides(8); // Large screens
      }
    };

    window.addEventListener('resize', updateVisibleSlides);
    updateVisibleSlides(); // Initialize on component mount

    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + foods.length) % foods.length
    );
  };

  return (
    <div className='container-max my-6 mt-8'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-4 font-bold text-2xl text-zinc-700'>
          {selectedLang === 'EN' ? 'Discover Our Foods' : 'Découvrez nos plats'}
        </h1>
        {/* <div className='flex gap-2 items-center'>
          <button onClick={goToPrevious} className='action-button'>
            <ArrowLongLeftIcon className='w-4 h-4' />
          </button>
          <button onClick={goToNext} className='action-button'>
            <ArrowLongRightIcon className='w-4 h-4' />
          </button>
        </div> */}
      </div>
      <div
        className='slider-container'
        style={{ display: 'flex', overflowX: 'auto' }}>
        {foods?.card?.card?.imageGridCards?.info.map((food, index) => (
          <div key={food.id} style={{ flex: `0 0 ${100 / visibleSlides}%` }}>
            <FoodItem food={food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
