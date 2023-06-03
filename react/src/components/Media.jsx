import React from "react"
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";



const Media = () => {
    return (
      <div className=' justify-start flex-col items-center p-5'>
        <div className={`flex justify-center gap-5 items-center flex-col  `}>
          <NavLink
            activeclassname='active'
            exact='true'
            to='/'
            className='text-xl transition duration-300 hover:text-[#d7bf74]'
          >
            Home
          </NavLink>
          <a
            href='#about'
            duration='500'
            smooth='true'
            className='text-xl transition duration-300 hover:text-[#d7bf74]'
          >
            About
          </a>
        </div>
        <div className='flex items-center flex-col justify-center  gap-5 capitalize'>
          <NavLink
            activeclassname='active'
            exact='true'
            to='/cart'
            className=''
          >
            <AiOutlineShopping className='text-[2.5rem] mt-2  hover:text-[#d7bf74] duration-300 transition' />
          </NavLink>
          <NavLink
            activeclassname='active'
            exact='true'
            to='/login'
            className='text-xl transition duration-300 hover:text-[#d7bf74]'
          >
            log in
          </NavLink>
          <NavLink
            activeclassname='active'
            exact='true'
            to='/register'
            className='text-xl  transition duration-300 hover:text-[#d7bf74]'
          >
            sign up
          </NavLink>
        </div>
      </div>
    )
  }

export default Media;