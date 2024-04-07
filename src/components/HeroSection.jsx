import CustomImage from './CustomImage';
import '../assets/_hero-section.scss';
import icon from '../assets/images/icon.png';
import { useEffect, useState } from 'react';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import { LocationMarkerIcon } from '@heroicons/react/solid';
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://lh5.googleusercontent.com/p/AF1QipMqQPb0ZQclq3rr8kEcsVhzEI6TrhawSDqOQqBD=w750-h1235-p-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipOMYViMeCf0TilA4OE1WUTsPtAZNsOAPb0auHal=w750-h1235-p-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNpNqWEoeifoiFl61Iw_J0B07hl3ACaNkk-VTVZ=w750-h813-p-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipPPDG1mvb5CjRWq8HgVAoHbvGBftJLbY_ioPZUi=w750-h813-p-k-no',
  ];
  const lang = useSelector(selectdLang);
  useEffect(() => {
    console.log({ lang });
  }, [lang]);
  const [selectedLang, setLanguage] = useState('EN');

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 30 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);
  const latitude = 45.426714694644396;
  const longitude = -75.71570931534453;
  return (
    <div className='section hero container-max flex flex-col md:flex-row gap-4'>
      <div className='typography flex-1'>
        <h1 className='title'>
          {selectedLang === 'EN' ? 'Who We Are?' : 'Qui nous sommes?'}
        </h1>
        <p className='info'>
          {selectedLang === 'EN'
            ? 'Hot Sub is a place where you can please your soul and tummy with delicious food recipes of all cuisines. Our service is absolutely free. So start exploring now.'
            : 'Hot Sub est un endroit où vous pouvez faire plaisir à votre âme et à votre ventre avec de délicieuses recettes culinaires de toutes les cuisines. Notre service est absolument gratuit. Alors commencez à explorer maintenant.'}
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          target='_blank'
          rel='noopener noreferrer'
          className='btn w-full md:w-3/5 lg:w-3/5'>
          <img width='40' height='40' src={icon} alt='location' />{' '}
          {selectedLang === 'EN' ? 'explore now' : 'explorer maintenant'}
        </a>
      </div>
      <div className='gallery flex-1'>
        <CustomImage
          key={currentImageIndex}
          imgSrc={images[currentImageIndex]}
          pt={'90%'}
        />
      </div>
    </div>
  );
};
export default HeroSection;
