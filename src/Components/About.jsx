import React from 'react'
import Contact from './Contact'

function About() {
  return (
    <div className='bg-gradient-to-b border-b border-gray-400 from-[#ffffff] to-[#dad7cd] text-[#3a5a40] pt-[50px] pb-[50px] p-4  '>
        <h1 className='text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 sm:text-6xl font-bold mb-[50px] text-center '>About Us</h1>
        <div className='space-y-4 text-black md:px-[40px] font-inter'>
        <p className='text-3xl font-bold md:text-justify max-sm:text-balance max-sm:text-2xl tracking-tight'>At MAYAN EXIM GLOBAL TRANSIT, we are dedicated to delivering exceptional logistics and export-import solutions tailored to your business needs. With a strong presence in warehousing, air and sea delivery, ground shipping, and local logistics, we offer end-to-end services that ensure your goods are handled with the utmost care and efficiency. Our team of experienced professionals is committed to providing seamless operations, whether for domestic logistics or global transit.</p>
        <p className='md:text-justify text-xl font-semibold tracking-tight'>We specialize in offering comprehensive shipping and export-import services, ensuring that your goods reach their destination on time and in perfect condition. Our advanced warehousing facilities, along with a robust network of air, sea, and ground transportation, enable us to provide reliable and flexible solutions, no matter the size or complexity of your shipment.In addition to our logistics expertise, we offer a diverse range of high-quality products. From global trade in essential goods to managing the movement of your valuable products, we are your trusted partner. With our deep industry knowledge and strategic approach, we help businesses expand their reach and meet their growing demands.</p>
        <p className='md:text-justify text-xl font-normal tracking-tight'>At MAYAN EXIM GLOBAL TRANSIT, our mission is simple: to provide unparalleled service that drives success for our clients. Our commitment to innovation, reliability, and customer satisfaction is the foundation of our business, allowing us to build lasting partnerships across industries and borders. Whether you're looking for a reliable logistics partner or a supplier of premium products, we are here to support your business at every step of the way.</p>
        </div>

        <div className='text-3xl font-bold max-sm:text-2xl flex mt-[30px] space-x-4 font-unbounded px-[40px]' >
        <a
        href="https://wa.me/917200590064"
        target="_blank"
        rel="noopener noreferrer"
      ><p className=' bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] to-black'>Whatsapp</p></a>
          <a href="mailto:mayanexim@gmail.com" target="new"><p className=' bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] to-black'>Email</p></a>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-4xl text-center font-bold font-unbounded mt-10 text-black">
        Lets get to know each other.       
      </h2>
      <h1 className="text-3xl  sm:text-5xl lg:text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 font-unbounded  text-[#3a5a40]">
      Get in Touch</h1>

        <Contact />
    </div>
  )
}

export default About
