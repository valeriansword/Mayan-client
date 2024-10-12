import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import logo from "/logo1.png";

import { navItems } from "../Constants/Data";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    
  };

  const footerRef = useRef(null);
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const scrollToPosition = () => {
    window.scrollTo({
      top: 1500,  // Scroll to 500px from the top
      behavior: "smooth",  // Smooth scrolling
    });
  };

  return (
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg bg-white/30 bg-gradient-to-r from-white/20 to-[#dad7cd]/30 border-b border-[#3a5a40] shadow-xl transition duration-500 ease-in-out">
      <div className="lg:container mx-auto relative lg:text-sm">
        <div className="flex-col justify-between items-center">
          <div className="flex items-center justify-between max-sm:flex-col lg:flex-shrink-0">
            <h1 className="text-lg font-bold max-sm:font-normal max-sm:hidden">
              GSTIN:33CFCPV1527C1ZT
            </h1>
            <span className="flex items-center lg:ml-[-30px]">
              <Link to="/" className="flex items-center transition lg:hover:scale-110 inline-block">
                <img
                  className="h-[80px] w-25  translate-y-1 translate-x-4 max-sm:ml-[-30px] drop-shadow-lg"
                  src={logo}
                  alt="Logo"
                />
                <span className="text-2xl lg:text-3xl font-bold tracking-tight font-unbounded text-[#3a5a40]  transform transition duration-500 ease-in-out">
                  Mayan Exim Global Transit
                </span>
              </Link>
              <div className="lg:hidden md:flex flex-col justify-end max-sm:mr-[10px]">
                <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
              </div>
            </span>

             <span className="max-sm:hidden">
              {/* <a
                href={get}
                download
                className="py-2 px-5 text-center w-[140px] rounded-[30px] bg-[#3a5a40]  text-[#dad7cd]  transition:scale duration-300 transform hover:scale-105 shadow-lg"
              >
                Get a Quote
              </a> */}
              <button
              onClick={scrollToPosition}
              className="py-2 px-4 w-[120px] rounded-[30px] bg-[#3a5a40]  text-[#dad7cd]  hover:scale-110 hover:shadow-lg transition-all duration-500 "
            >
              Contact
            </button>
            </span> 
          </div>

          <hr className="mb-[10px] max-sm:hidden" />

          {/* nav items */}
          <ul className="max-md:hidden flex justify-center mx-auto w-full items-center space-x-[80px]">
            {navItems.map((item, index) => (
              <Link to={`/${item.label === "Home" ? "" : item.label}`}  key={index}>
                <li >
                  <a
                    
                    href={item.href}
                    className="hover:text-[#dad7cd] text-[#3a5a40] hover:bg-[#3a5a40] px-4 py-2 rounded-md hover:shadow-lg hover:scale-110 transition duration-500 transform hover:neon-glow"
                  >
                    {item.label}
                  </a>
                </li>
              </Link>
            ))}
            
          </ul>

          
        </div>

        {/* Mobile drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#3a5a40] text-[#dad7cd] w-full p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-500 ease-in-out backdrop-blur-lg">
            <ul>
              {navItems.map((item, index) => (
                <Link to={`/${item.label === "Home" ? "" : item.label}`} onClick={toggleNavbar} key={index}>
                  <li className="py-4 text-xl hover:bg-[#a1b189] text-center px-6 rounded-md transition-all duration-500 ease-in-out">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              {/* <a
                href="#"
                className="py-2 px-4 border rounded-md bg-[#dad7cd] text-[#3a5a40] hover:scale-110 hover:shadow-lg transition-transform duration-500"
              >
                Get a Quote
              </a> */}
              {/* <p

                className="py-2 px-4 rounded-md bg-[#dad7cd] text-[#3a5a40] hover:scale-110 hover:shadow-lg transition-transform duration-500 cursor-pointer"
                
                onClick={toggleNavbar}
              >
                Contact
              </p> */}
               <h1 className="text-lg font-bold max-sm:font-normal">
              GSTIN:33CFCPV1527C1ZT
            </h1>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
