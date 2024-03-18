import '../assets/_hero-section.scss';

const CustomImage = ({ imgSrc, pt }) => {
  return (
    <div className='custom-image'>
      <img src={imgSrc} alt='' />
    </div>
  );
};

export default CustomImage;
