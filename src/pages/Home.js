import React from 'react';
import Banner from "../components/Banner"
import HouseList from '../components/HouseList';

const Home = ({ bgColor }) => {
  return (
    <div className='min-h-[1800px]' style={{ backgroundColor: bgColor }}> {/* Apply the background color */}
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
