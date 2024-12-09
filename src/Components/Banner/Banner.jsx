import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Empowering Ideas",
      description: "Join us in empowering innovative ideas that can change the world.",
      image: "https://i.ibb.co/NTc2jnz/Whats-App-Image-2024-12-08-at-19-53-28-a0133da1.jpg",
    },
    {
      title: "Building Futures",
      description: "Help us build a better future for everyone by supporting meaningful campaigns.",
      image: "https://i.ibb.co/z4m6j8p/Whats-App-Image-2024-12-08-at-19-53-29-e8799c7c.jpg",
    },
    {
      title: "Making an Impact",
      description: "Your contributions make a significant impact. Let's create change together.",
      image: "https://i.ibb.co/qC0xkkd/Whats-App-Image-2024-12-08-at-19-53-29-98cb2ad4.jpg",
    },
  ];

  return (
    <div className="container mx-auto my-8 bg-white dark:bg-gray-800 rounded-lg">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-20">
            <img src={slide.image} alt={slide.title} className="w-full h-auto rounded-lg shadow-md" />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{slide.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
