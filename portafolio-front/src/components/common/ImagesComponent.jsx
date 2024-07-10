import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImagesComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="" alt="Slide 1" />
        <div className="carousel-text1">
          <h3>Participaciones</h3>
          <p>Desk Notes,Design</p>
        </div>
      </div>
      <div>
        <img src="" alt="Slide 2" />
        <div className="carousel-text2">
          <h3>Participacion</h3>
          <p>Desk Notes,Design</p>
        </div>
      </div>
      <div>
        <img src="" alt="Slide 3" />
        <div className="carousel-text3">
          <h3>Reconocimiento</h3>
          <p>Desk Notes,Design</p>
        </div>
      </div>
      <div>
        <img src="" alt="Slide 3" />
        <div className="carousel-text4">
          <h3>Participaciones</h3>
          <p>Desk Notes,Design</p>
        </div>
      </div>
    </Slider>
  );
};

export default ImagesComponent;