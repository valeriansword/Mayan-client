import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificate1 from "../assets/certificate-1.jpg";
import certificate2 from "../assets/certificate-2.jpg";
import certificate3 from "../assets/certificate-3.jpg";
import certificate4 from "../assets/certificate-4.jpg";
import certificate5 from "../assets/certificate-5.jpg";
import certificate6 from "../assets/certificate-6.jpg";
import certificate7 from "../assets/certificate-7.jpg";
import certificate8 from "../assets/certificate-8.jpg";
import SelectedCertificate from './SelectedCertificate';
import "./Certificate.css"
import Contact from './Contact';
const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,           // Enable auto-scroll
    autoplaySpeed: 3000,      // Auto-scroll every 3 seconds
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  const servicesData = [
    { img: certificate1 },
    { img: certificate2 },
    { img: certificate3 },
    { img: certificate4 },
    { img: certificate5 },
    { img: certificate6 },
    { img: certificate7 },
    { img: certificate8 },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-gradient-to-b from-[#ffffff] to-[#dad7cd] py-10 border-b border-gray-400'>
      <div className="container mx-auto px-5">
        <h2 className="text-3xl lg:text-6xl font-bold text-center mb-12 bg-clip-text  text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10  font-unbounded">Certificates</h2>

        {/* Auto-scrolling certificates carousel */}
        <div className="w-full flex justify-center">
          <div className="w-3/4 max-w-6xl mx-auto">
            <Slider {...settings}>
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="p-4 cursor-pointer"
                  onClick={() => handleImageClick(service.img)}
                >
                  <img
                    src={service.img}
                    alt={`Certificate ${index + 1}`}
                    className="rounded-lg shadow-md object-cover w-full h-60 max-sm:h-80 hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Zoom Modal */}
        <SelectedCertificate selectedImage={selectedImage} handleClose={handleClose}/>
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold lg:text-4xl max-sm:mt-[30px] text-center font-unbounded mt-[60px] bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10">
        INQUIRE NOW
      </h2>
      <Contact />
    </div>
  );
};

export default Certificates;
