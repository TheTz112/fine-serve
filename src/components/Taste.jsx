import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../styles/Taste.css';
import { taste } from '../data';
import { Link } from 'react-router-dom';

const Taste = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="taste-con">
      <h1> TASTE THE WORLD </h1>
      <Slider {...settings}>
        {taste.map((taste) => (
          //   <Link to={`/taste-the-world/${taste._id}`}>
          <div key={taste.slug}>
            <img src={taste.img} alt="" />
            <h3>{taste.title}</h3>
          </div>
          //   </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Taste;
