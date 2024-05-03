import React, { useState, useEffect, useRef } from 'react';
import FoodItem from './FoodItem';
import '../assets/food.css';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import cate1 from '../assets/cates/cate (1).png';
import cate2 from '../assets/cates/cate (2).png';
import cate3 from '../assets/cates/cate (3).png';
import cate4 from '../assets/cates/cate (4).png';
import cate5 from '../assets/cates/cate (5).png';
import cate6 from '../assets/cates/cate (6).png';
import cate7 from '../assets/cates/cate (7).png';
import cate8 from '../assets/cates/cate (8).png';
import cate9 from '../assets/cates/cate (9).png';
import cate10 from '../assets/cates/cate (10).png';
import cate11 from '../assets/cates/cate (11).png';
import cate12 from '../assets/cates/cate (12).png';
import cate13 from '../assets/cates/cate (13).png';
import cate14 from '../assets/cates/cate (14).png';
import cate15 from '../assets/cates/cate (15).png';
import cate16 from '../assets/cates/cate (16).png';
import cate17 from '../assets/cates/cate (17).png';
import cate18 from '../assets/cates/cate (18).png';
import cate55 from '../assets/cates/cate (55).png';

const FoodList = ({ foods }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(8); // Default to large screens
  const [selectedLang, setLanguage] = useState('EN');
  const lang = useSelector(selectdLang);
  // test
  const food_list = [
    { img: cate17, width: '100%', flex: '0 0 12.5%' },
    { img: cate16, width: '100%', flex: '0 0 22.5%' },
    { img: cate10, width: '100%', flex: '0 0 8.5%' },
    { img: cate55, width: '100%', flex: '0 0 22.5%' },
    // { img: cate1, width: '100%', flex: '0 0 17.5%' },
    // { img: cate16, width: '100%', flex: '0 0 17.5%' },
    // { img: cate2, width: '100%', flex: '0 0 17.5%' },
    // { img: cate3, width: '100%', flex: '0 0 17.5%' },
    // { img: cate4, width: '100%', flex: '0 0 17.5%' },
    // { img: cate5, width: '100%', flex: '0 0 17.5%' },
    // { img: cate6, width: '100%', flex: '0 0 17.5%' },
    // { img: cate7, width: '100%', flex: '0 0 17.5%' },
    // { img: cate8, width: '100%', flex: '0 0 17.5%' },
    // { img: cate9, width: '66px', flex: '0 0 11.5%' },
    // { img: cate10, width: '66px', flex: '0 0 11.5%' },
    // // { img: cate11, width: '66px', flex: '0 0 17.5%' },
    // { img: cate12, width: '66px', flex: '0 0 11.5%' },
    // // { img: cate13, width: '66px', flex: '0 0 17.5%' },
    // // { img: cate14, width: '66px', flex: '0 0 17.5%' },
    // { img: cate15, width: '66px', flex: '0 0 11.5%' },
    // { img: cate17, width: '106px', flex: '0 0 12.5%' },
    // { img: cate18, width: '106px', flex: '0 0 12.5%' },
  ];
  const [FoodList, setFoodList] = useState(food_list);
  const mobile_food_list = [
    { img: cate17, width: '106px', flex: '0 0 18.5%' },
    { img: cate16, width: '100%', flex: '0 0 30.5%' },
    { img: cate10, width: '66px', flex: '0 0 13.5%' },
    { img: cate55, width: '100%', flex: '0 0 30.5%' },

    // { img: cate1, width: '100%', flex: '0 0 30.5%' },
    // { img: cate2, width: '100%', flex: '0 0 30.5%' },
    // { img: cate3, width: '100%', flex: '0 0 30.5%' },
    // { img: cate4, width: '100%', flex: '0 0 30.5%' },
    // { img: cate5, width: '100%', flex: '0 0 30.5%' },
    // { img: cate6, width: '100%', flex: '0 0 30.5%' },
    // { img: cate7, width: '100%', flex: '0 0 30.5%' },
    { img: cate8, width: '100%', flex: '0 0 30.5%' },
    { img: cate9, width: '66px', flex: '0 0 13.5%' },
    // // { img: cate13, width: '66px', flex: '0 0 17.5%' },
    // { img: cate12, width: '66px', flex: '0 0 13.5%' },
    // // { img: cate13, width: '66px', flex: '0 0 17.5%' },
    // // { img: cate14, width: '66px', flex: '0 0 17.5%' },
    // { img: cate15, width: '66px', flex: '0 0 13.5%' },
    { img: cate18, width: '106px', flex: '0 0 18.5%' },
  ];
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('screenWidth', screenWidth);
    if (screenWidth <= 720 && screenWidth >= 360) {
      // TODO
      console.log('weeeeeeeeeeeee', screenWidth);
      setFoodList(mobile_food_list);
    }
  }, [screenWidth]);
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
        {FoodList.map((food, index) => (
          <div
            className='image-container flex-col'
            key={index}
            style={{ flex: food.flex }}>
            <FoodItem food={food} />
            {/* <h1 className='my-4 mt-8 font-bold text-2xl text-zinc-700'>Subs</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
