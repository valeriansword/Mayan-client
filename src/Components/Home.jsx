import React,{useState,useEffect, useRef} from 'react'
 import "./Home.css"


import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { prods } from '../Constants/Data';
import { servicesData } from '../Constants/Data';

import { Link } from "react-router-dom";
import Contact from './Contact';
import FloatingWhatsappButton from './FloatingWhatsappButton';


function Home() {
  const settings = {
    dots: true,  // Pagination dots
    infinite: true, // Infinite loop
    speed: 3000,    // Transition speed
    slidesToShow: 1,  // Show one image at a time
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Time between transitions
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]}
   
    const footerRef = useRef(null);
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    

 
  return (
    <div className='bg-gradient-to-b border-b border-gray-400 from-[#ffffff] to-[#dad7cd]'>
      {/* hero section */}
    <div className=' pb-[20px] text-[#3a5a40] pt-[20px]'>
      <h1 className='text-3xl sm:text-6xl lg:text-6xl pb-[20px] font-unbounded font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10'>Great Voyages Begins Here</h1>
      {/* video tag */}
       <div className="flex mt-[20px] justify-center">
       
         <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 max-sm:w-[90%] border border-[#3a5a40] shadow-sm shadow-[#DAD7CD] mx-2 my-4"
        >
          <source src="https://res.cloudinary.com/dduqbr4li/video/upload/w_720/v1727963180/video-3_mulbyt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>  
      <h1 className='text-lg font-bold font-inter text-black text-center mt-10 '>Got any questions or ready to embark </h1>
       <h1 className='text-lg font-bold font-inter text-center text-black'> on your voyage with us?</h1>
        <h1 className="text-lg font-bold font-inter text-center">Drop us a message!</h1>
        <span className='flex justify-center'>
        <button onClick={scrollToFooter} className='ring-2 ring-[#3a5a40] max-sm:w-[90%] text-[#dad7cd] bg-gradient-to-b from-[#3a5a40] to-black py-[5px] w-[250px] px-2 rounded-md mt-[10px]'>Get started</button>
        </span>
       
    </div>
    {/* services and products section */}
    <div className='w-full flex max-sm:flex-col justify-around px-[20px]'>
    <div className="w-1/2 max-w-4xl xl:max-w-2xl 2xl:max-w-3xl py-8 max-sm:w-full min-xl:grow-0 ">
      
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="relative rounded-md">
            <img
              src={service.img}
              alt={service.text}
              className="w-full h-80 2xl:h-100 object-fill max-sm:h-64"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-bold font-unbounded">{service.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      <div className=' flex flex-col justify-center ml-[10px] space-y-[5px] lg:pl-[20px]'>
        <h1 className='text-3xl text-center font-unbounded font-bold max-sm:text-center bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10'>Our Services</h1>
        <p className='text-lg font-normal text-black  font-inter'>At MAYAN EXIM GLOBAL TRANSIT, we offer comprehensive logistics and export-import solutions tailored to your needs. From efficient warehousing to air, sea, and ground transportation, our services ensure your goods are delivered safely and on time, whether locally or globally. With our expertise, we streamline your logistics operations, making your business more efficient and cost-effective.
        </p>
        <Link to="/Services" className='flex justify-center'><button className='ring-2 font-inter ring-[#3a5a40] max-sm:w-full text-[#dad7cd] bg-gradient-to-b from-[#3a5a40] to-black py-[5px] w-[250px] px-2 rounded-md'>Know More</button></Link>
      </div>
      
    </div>
    {/* products */}
    <div className='w-full flex max-sm:flex-col-reverse justify-around px-[20px]'>
    <div className=' flex flex-col justify-center ml-[10px] space-y-[5px] lg:pr-[20px]'>
        <h1 className='text-3xl  bg-clip-text font-unbounded text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 font-bold max-sm:text-center text-center'>Our Products</h1>
        <p className='text-lg font-normal  text-black font-inter '>We provide a diverse range of premium products, carefully sourced and delivered with excellence. From fresh agricultural goods to essential commodities, we guarantee quality and consistency. Our product offerings are tailored to meet the demands of businesses across industries, ensuring reliability in every order.</p>
        <Link to="/Products/" className='flex justify-center'><button className='ring-2 font-inter ring-[#3a5a40] max-sm:w-full text-[#dad7cd] bg-gradient-to-b from-[#3a5a40] to-black py-[5px] w-[250px] px-2 rounded-md'>Know More</button></Link>
      </div>
      
    <div className="w-1/2 max-w-4xl xl:max-w-2xl 2xl:max-w-3xl py-8 max-sm:w-full ">
      
      <Slider {...settings}>
        {prods.map((service, index) => (
          <div key={index} className="relative rounded-md">
            <img
              src={service.img}
              alt={service.text}
              className="w-full h-80 2xl:h-100 min-xl:w-[200px] max-sm:h-64 "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-bold">{service.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>


    
    {/* conatct */}
    <section id="contact" ref={footerRef}>
    <h2 className="text-3xl sm:text-5xl font-bold lg:text-4xl max-sm:mt-[30px] text-center font-unbounded mt-6 bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10">
        INQUIRE NOW
      </h2>
    <Contact /></section>
    
    </div>
  )
}

export default Home
