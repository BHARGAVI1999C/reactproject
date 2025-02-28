import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing map icon from FontAwesome

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl">
      <img className="mb-8" src={image} alt="House" />
      
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">{country}</div>
      </div>
      
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>

      {/* Location Icon with Address */}
      <div className="flex items-center text-gray-600 gap-1 my-2">
        <FaMapMarkerAlt className="text-red-500 text-xl" /> {/* Map Icon */}
        <div>{address}</div> {/* Display address with map icon */}
      </div>

      <div className="flex gap-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[24px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[24px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[24px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>

      <div className="text-lg font-semibold text-violet-600 mb-4">{price}</div>
    </div>
  );
};

export default House;
