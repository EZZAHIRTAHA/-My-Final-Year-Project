import React from 'react';
const About = () => {
  return (
    <section id="about" className="bg-black  capitalize  scale-up-center text-white">
      <div className="p-12 md:p-24 grid grid-cols-1 md:grid-cols-2 items-center">

          <img src="./assets/about.png" alt="about" className=" w-full  h-full p-5 hidden md:block transition duration-300 hover:scale-105" />
      
        <div className="text-center md:text-left mb-8 md:mb-0 md:pr-8 p-5">
          <h2 className="md:text-6xl text-4xl tracking-wider font-medium leading-tight mb-4 text-[#d7bf74]">About us</h2>
          <p className="font-normal text-dim-white text-lg tracking-wide leading-[1.5] w-full">
            At <span className="text-[#d7bf74]">Taha's Food</span>, we are passionate about serving delicious, high-quality
            food that satisfies our customers' cravings. Our team of experienced chefs prepares each dish with care and
            precision, using only the freshest ingredients to ensure that every bite is packed with flavor. We believe
            that food is more than just fuel for the body; it's an experience that brings people together and creates
            memories that last a lifetime. That's why we strive to create a warm, inviting atmosphere that encourages
            our guests to sit back, relax, and enjoy their meal. We are committed to providing exceptional service and
            a dining experience that exceeds our customers' expectations. Come visit us and see for yourself why{' '}
            <span className="text-[#d7bf74]">Taha's Food</span> is the perfect place to enjoy a delicious meal with
            family and friends.
          </p>
        </div>
        <div className="flex md:hidden w-full h-full justify-center items-center ">
          <img src="./assets/glass.png"    alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
