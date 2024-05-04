import { CDN_URL } from '../utils/constants';
import React, { useState, useEffect, useRef } from 'react';
import '../assets/food.css';
import slider1 from '../assets/slider/slider (1).jpg';
import slider2 from '../assets/slider/slider (2).jpg';
import slider3 from '../assets/slider/slider (3).jpg';
import slider0 from '../assets/slider/slider (0).png';
import slider4 from '../assets/slider/new.jpg';

import slider9 from '../assets/slider/slider (9).jpg';
import slider10 from '../assets/slider/slider (14).jpg';
const Banner = ({ banner }) => {
  const test = {
    1: slider4,
    // 2: slider2,
    // 3: slider3,
    // 4: slider9,
    // 5: slider10,
  };
  const mobile_test = {
    1: slider0,
    // 2: slider2,
    // 3: slider3,
    // 4: slider9,
    // 5: slider10,
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [FoodList, setFoodList] = useState(test);

  useEffect(() => {
    console.log('screenWidth', screenWidth);
    if (screenWidth <= 720 && screenWidth >= 360) {
      // TODO
      console.log(
        'weeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeeee',
        screenWidth
      );
      setFoodList(mobile_test);
    }
  }, [screenWidth]);

  return (
    <div className='keen-slider__slide'>
      <img className='block w-full images' src={FoodList[banner.id]} alt='' />
    </div>
  );
};

export default Banner;
