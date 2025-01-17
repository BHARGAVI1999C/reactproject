import React, { useState } from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();

  // State to track if the image is hovered
  const [isHovered, setIsHovered] = useState(false);

  // Find the house based on the 'id' from the params
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:item-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h2 className="text-lg mb-4">{house.address}</h2>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2">
            <div className="bg-green-500 h-6 px-3 text-white rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 h-6 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">{house.price}</div>
        </div>

        <div className="flex flex-row items-center gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div
              className="mb-8 relative"
              onMouseEnter={() => setIsHovered(true)} // Set hover to true when mouse enters
              onMouseLeave={() => setIsHovered(false)} // Set hover to false when mouse leaves
            >
              {/* Show Image by default */}
              {!isHovered && <img src={house.imageLg} alt="House" className="w-full" />}
              
              {/* Show Video when hovered */}
              {isHovered && (
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/7DFMj_0wB5s?autoplay=1&loop=1&playlist=7DFMj_0wB5s" 
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>

            <div>{house.description}</div>
          </div>

          {/* Agent Info */}
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div>
                <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                  <img src={house.agent.image} alt="Agent" />
                </div>
              </div>
              <div>
                <div className="font-bold">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>

            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded py-4 text-sm w-full transition">
                  Send Message
                </button>
                <button className="border border-violet-700 text-violet-700 hover:text-violet-500 rounded p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
