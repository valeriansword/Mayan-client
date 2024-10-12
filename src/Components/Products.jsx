import { prods } from "../Constants/Data";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="relative border-b border-gray-400 bg-gradient-to-b from-[#ffffff] to-[#dad7cd] min-h-[800px]">
      {/* Header Section */}
      <div className="text-center lg:pt-10 max-sm:pt-10 text-[#3a5a40] font-unbounded">
        <span className="text-3xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 font-medium px-2 py-1 uppercase">
          Products
        </span>
        <span className="lg:flex lg:justify-center lg:space-x-2 font-unbounded">
        <h2 className="text-2xl sm:text-2xl lg:text-3xl text-black  tracking-wide mt-2">
          From Our Inventory To
        </h2>
        <h2 className="text-2xl sm:text-2xl lg:text-3xl  tracking-wide mt-2 text-[#3a5a40]"> Your Market.</h2>
        </span>
      </div>

      {/* Feature blocks section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 font-unbounded container mx-auto px-4 justify-items-center">
        {prods.map((prod, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] lg:w-[300px] bg-[#ffffff]  rounded-md shadow-xl mt-[20px] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={prod.img}
              className="h-[250px] rounded-t-md w-full object-cover"
              alt={prod.text}
            />
            <div className="p-4 space-y-[10px]">
              {/* Icon with Product Title */}
              <div className="flex items-center space-x-2">
                <span className="p-2 w-10 h-10 bg-[#3A5A40] text-[#dad7cd] flex justify-center items-center rounded-full">
                  {/* Placeholder for product icon */}
                  {prod.icon}
                </span>
                <h1 className="bg-clip-text  text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10  text-xl font-bold">{prod.text}</h1>
              </div>

              {/* Product description */}
              <p className="text-black font-inter text-sm sm:text-base mt-2">
                {prod.description}
              </p>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <Link to={`/Products/${prod.id}`}>
                  <button className={`${prod.Separateproducts?" block ":" hidden "}rounded-md px-4 py-2 font-inter bg-gradient-to-r from-[#3a5a40] to-[#1b1b1b] text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#3a5a40] hover:scale-110`}>
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <h2 className="text-2xl sm:text-3xl max-sm:px-[5px] font-bold font-unbounded lg:text-4xl text-center mt-12 ">
        Got any questions or ready to embark on your{" "}                
      </h2>
      <h2 className=" text-2xl sm:text-3xl max-sm:px-[5px] font-bold font-unbounded lg:text-4xl text-center">
          voyage with us?
        </h2>
        <h2 className="text-2xl sm:text-3xl max-sm:px-[5px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#3a5a40] via-[#3a5a40] to-black bg-[length:100%_100%] bg-gradient-stops-90-10 font-unbounded lg:text-4xl text-center  "> Drop us a Message! </h2>


      <Contact />
    </div>
  );
};

export default Products;
