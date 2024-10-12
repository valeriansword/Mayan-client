import { servicesData } from "../Constants/Data";
import Contact from "./Contact";

const Services = () => {
  return (
    <div className="relative border-b bg-gradient-to-b from-[#ffffff] to-[#dad7cd] border-gray-400 min-h-[800px]">
      <div className="text-center pt-[20px] font-unbounded">
        <span className="text-[#3a5a40] text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 font-medium px-2 py-1 uppercase">
          Services
        </span>
        <span className="lg:flex lg:justify-center lg:space-x-2"> 
        <h2 className="text-3xl max-sm:text-2xl lg:text-3xl  text-black font-thin tracking-wide">
          Navigate your global trade      </h2>
          <h1 className="text-3xl max-sm:text-2xl lg:text-3xl  text-[#3a5a40] font-thin tracking-wide">with us</h1>
       </span>
          </div>

      {/* Feature blocks section */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 font-unbounded mt-[20px] container mx-auto justify-items-center gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-[300px]  rounded-md shadow-xl mt-[20px] transform transition duration-500 hover:scale-105 hover:shadow-2xl "
          >
            <img
              src={service.img}
              className="h-[250px] rounded-t-md w-full object-cover"
            />
            <div className="p-4 space-y-[10px]">
              {/* Icon with Product Title */}
              <div className="flex items-center space-x-2">
                <span className="p-2 w-10 h-10 bg-[#3a5a40] text-[#dad7cd] flex justify-center items-center rounded-full">
                  {/* Placeholder for uct icon */}
                  {service.icon}
                </span>
                <h1 className=" text-xl font-bold bg-clip-text  text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 ">{service.text}</h1>
              </div>

              {/* Product description */}
              <p className="text-black text-sm sm:text-base mt-2 font-inter">
                {service.description}
              </p>
          </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <h2 className="text-2xl sm:text-3xl max-sm:px-[5px] font-bold font-unbounded lg:text-4xl text-center mt-12 ">
        Got any questions or ready to embark on your{" "}                
      </h2>
      <h2 className=" text-2xl sm:text-3xl max-sm:px-[5px]  font-unbounded lg:text-4xl text-center font-bold">
          voyage with us?
        </h2>
        <h2 className="text-2xl sm:text-3xl max-sm:px-[5px] bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 font-unbounded lg:text-4xl text-center font-bold "> Drop us a Message! </h2>

      <Contact />
    </div>
  );
};

export default Services;
