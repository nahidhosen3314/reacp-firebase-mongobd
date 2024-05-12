import ImageOne from '../assets/PropertyOne.jpg';
import ImageTwo from '../assets/PropertyTow.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Hero = () => {

    const settings = {
        dots: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };

    return (
        <Slider {...settings}>
        <div>
          <img src={ImageOne} alt="" />
        </div>
        <div>
          <img src={ImageTwo} alt="" />
        </div>
        <div>
          <img src={ImageOne} alt="" />
        </div>
      </Slider>
    );
};

export default Hero;