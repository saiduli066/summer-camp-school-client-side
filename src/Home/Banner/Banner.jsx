 /* eslint-disable no-unused-vars */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImg1 from '../../assets/banners/language-learn-transformed.jpeg';
import sliderImg2 from '../../assets/banners/istockphoto-1399155965-1024x1024-transformed.jpeg';
import sliderImg3 from '../../assets/banners/istockphoto-1131625839-1024x1024-transformed.jpeg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={sliderImg1} alt="Slider 1" className="w-full" />
      </div>
      <div>
        <img src={sliderImg2} alt="Slider 2" className="w-full" />
      </div>
      <div>
        <img src={sliderImg3} alt="Slider 3" className="w-full" />
      </div>
    </Slider>
  );
};

export default Banner;
