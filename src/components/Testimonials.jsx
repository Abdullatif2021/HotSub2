import React from 'react';
import '../assets/_test-section.scss';
import { useEffect, useState } from 'react';
import { selectdLang } from '../features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import star from '../assets/reviews/star.png';
import img_1 from '../assets/clients/img_1.jpg';
import img_2 from '../assets/clients/img_2.jpg';
import img_3 from '../assets/clients/img_3.jpg';
import img_4 from '../assets/clients/img_4.jpg';

const testimonials = [
  {
    image: img_1,
    name: 'Touseeq Ijaz',
    username: '@touseeqijazweb',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.',
    stars: 4,
  },
  {
    image: img_2,
    name: 'J.K Rowling',
    username: '@jkrowling',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.',
    stars: 5,
  },
  {
    image: img_3,
    name: 'J.K Rowling',
    username: '@jkrowling',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.',
    stars: 5,
  },
  {
    image: img_4,
    name: 'J.K Rowling',
    username: '@jkrowling',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.',
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
