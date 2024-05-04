import Banner from './Banner';
import 'keen-slider/keen-slider.min.css';

import ShimmerBanner from './shimmers/ShimmerBanner';
import { useKeenSlider } from 'keen-slider/react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';

const BannerList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timerDone, setTimerDone] = useState(true);
  const [selectedLang, setLanguage] = useState('EN');
  const lang = useSelector(selectdLang);

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  useEffect(() => {
    setTimeout(() => {
      setTimerDone(false);
    }, 2000);
  }, []);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free',
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      '(max-width: 480px)': {
        slides: { perView: 1, spacing: 10 },
      },
      '(min-width: 480px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 768px)': {
        slides: { perView: 1, spacing: 0 },
      },
    },
    created(slider) {
      setTimeout(
        setInterval(() => {
          slider.next();
        }, 200000)
      ); // Change 2000 to whatever interval you want in milliseconds
    },
    duration: 3000, // Duration of the slide transition in milliseconds. Increase for slower transitions.
    easing: 'ease-in-out',
  });

  const test = [
    {
      id: 1,
    },
    // {
    //   id: 2,
    // },
    // {
    //   id: 3,
    // },
    // {
    //   id: 4,
    // },
    // {
    //   id: 5,
    // },
  ];

  return (
    <div className='container-max '>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl text-zinc-700'>
          {selectedLang === 'EN'
            ? 'Best offers for you'
            : 'Meilleures offres pour vous'}
        </h1>

        {/* {instanceRef.current && (
          <div className='flex gap-2 items-center'>
            <button
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
              className='bg-gray-100 p-2 rounded-full disabled:text-gray-300'>
              <ArrowLongLeftIcon className='w-4 h-4' />{' '}
            </button>
            <button
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
              onClick={() => instanceRef.current?.next()}
              className='bg-gray-100 p-2 rounded-full disabled:text-gray-300'>
              <ArrowLongRightIcon className='w-4 h-4' />{' '}
            </button>
          </div>
        )} */}
      </div>

      {timerDone ? (
        <div className='flex gap-4 md:gap-8 mb-8'>
          {Array.from({ length: 3 }).map((_, i) => (
            <ShimmerBanner key={i} />
          ))}
        </div>
      ) : (
        <div ref={sliderRef} className='keen-slider h-[145px] md:h-[270px]'>
          {test.map((banner) => (
            <Banner banner={banner} key={banner.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default BannerList;
