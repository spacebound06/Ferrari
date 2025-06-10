import React from 'react';
import Slider from 'react-slick';
import './MyCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: 'https://cdn.ferrari.com/cms/network/media/img/resize/683c833769d8110020d985f6-2025-spain-gp-cs-race-home-l?width=1440&height=900',
    title: 'Spanish Grand Prix',
    headline: 'RACE RECAP: CHARLES THIRD, LEWIS SIXTH',
    buttonText: 'READ MORE',
    link: 'https://www.ferrari.com/en-EN/formula1/articles/spanish-grand-prix-2025-race-report',
  },
  {
    image: 'https://cdn.ferrari.com/cms/network/media/img/resize/683c68046fab3f002076f135-2025-spain-gp-leclerc-race-home-l?width=1440&height=900',
    title: 'Spanish Grand Prix',
    headline: 'LECLERC TAKES CONTROL EARLY IN RACE',
    buttonText: 'FULL STORY',
    link: 'https://www.ferrari.com/en-EN/formula1/articles/spanish-grand-prix-2025-race',
  },
  {
    image: 'https://cdn.ferrari.com/cms/network/media/img/resize/683b3aab96e9190021f57b62-2025-spain-gp-quali-report-home-land?width=1440&height=900',
    title: 'Qualifying Report',
    headline: 'FERRARI FRONT ROW LOCKOUT IN SPAIN',
    buttonText: 'SEE QUALI RESULTS',
    link: 'https://www.ferrari.com/en-EN/formula1/articles/spanish-grand-prix-2025-qualifying-report',
  },
];

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${index}`} className="carousel-image" />
            <div className="carousel-overlay">
              <p className="carousel-subtitle">{slide.title}</p>
              <h2 className="carousel-headline">{slide.headline}</h2>
              <a href={slide.link} className="carousel-button">
                {slide.buttonText} <span className="arrow">➜</span>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
