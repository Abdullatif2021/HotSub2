import React from 'react';
import '../assets/_test-section.scss';
import { useEffect, useState } from 'react';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import star from '../assets/reviews/star.png';
import img_1 from '../assets/clients/img_1.jpg';
import img_2 from '../assets/clients/img_2.jpg';
import client_3 from '../assets/clients/client_3.png';
import client_4 from '../assets/clients/client_4.png';
import client_5 from '../assets/clients/client_5.png';
import client_1 from '../assets/clients/client_1.png';

const testimonials = [
  {
    image: client_4,
    name: 'Sharoon Hernandez',
    username: '@sharoonhernandez',
    comment:
      'Food was amazing and We love to have Halal options in Gatineau! Amazing customer service from Mohamdani!First time here and he took the time to explain the menu. Such a beautiful soul!10/10 will come back.',
    stars: 4,
  },
  {
    image: client_3,
    name: 'George Tabet',
    username: '@george_tabet',
    comment:
      "I heard a lot that a new restaurant in Ottawa was open, and they do a tremendous Syrian sandwich. I tried it, and it's delicious. I recommend it a lot.",
    stars: 5,
  },
  {
    image: client_5,
    name: 'Nicholas Therien',
    username: '@NicholasTherien',
    comment:
      'Sub was amazing. One of the best I ever had. Poutine was very good as well. I highly recommend to anyone looking for a quality sub. Will definitely come back here.',
    stars: 5,
  },
  {
    image: client_1,
    name: 'Farid Berghout',
    username: '@faridber',
    comment:
      "(Very warm welcome, very pleasant and perfect service, the waiter (Mohammed el-amin) was exceptionally kind and very friendly. They offer a loyalty card. Honestly it's perfect and I highly recommend.",
    stars: 5,
  },
  // Add other testimonials similarly
];

function TestimonialBox({ testimonial }) {
  return (
    <div className='testimonial-box'>
      <div className='box-top'>
        <div className='profile'>
          <div className='profile-img'>
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
          <div className='name-user'>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.username}</span>
          </div>
        </div>
        <div className='reviews'>
          {[...Array(5)].map((_, i) => (
            <img className='w-7 h-7' src={star} alt='star' />
          ))}
        </div>
      </div>
      <div className='client-comment'>
        <p>{testimonial.comment}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const lang = useSelector(selectdLang);
  const [is_loading, setIs_loading] = useState(true);

  const [selectedLang, setLanguage] = useState('EN');
  useEffect(() => {
    setIs_loading(true);
    setTimeout(() => {
      setIs_loading(false);
    }, 1000);
  }, [selectedLang]);
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  return (
    <section id='testimonials'>
      <div className='testimonial-heading'>
        <h1 className='my-4 mt-8 font-bold text-2xl text-zinc-700'>
          {selectedLang === 'EN' ? 'Customer Reviews' : 'Avis des clients'}
        </h1>
      </div>
      <div className='testimonial-box-container'>
        {testimonials.map((testimonial, index) => (
          <TestimonialBox key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
