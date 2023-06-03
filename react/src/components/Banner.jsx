import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner w-full md:w-2/3 md:mt-5 mt-10 px-7 scale-up-center mx-auto relative flex items-center justify-between capitalize flex-col md:flex-row ">
      <div className="banner-description w-full md:w-full md:p-3">
        <h2 className="flex-1 font-poppins font-semibold md:text-[72px] text-[52px] text-white md:leading-[100.8px] leading-[75px]">
          <span className="text-[#d7bf74]">Fresh</span> food, great <span className="text-[#d7bf74]">taste</span>
        </h2>
        <p className="font-medium text-xl text-[#d7bf74] py-5 leading-10 ">
          Get started today
        </p>
        <div className="btn-container flex gap-4 mt-3 ">
          <Button />
          <Link
            to="/menu"
            className="text-[#d7bf74] border-[1px] rounded-lg border-[#d7bf74] hover:text-white  font-normal duration-300 flex items-center justify-center transition w-[150px] h-[50px] box "
          >
            See menu
          </Link>
        </div>
      </div>
      <div className="banner-image w-full md:w-2/3 p-3">
        <img
          src="./assets/banner.png"
          alt="Pizza"
          className="w-full h-full "
          
        />
      </div>
    </section>
  );
};

export default Banner;
