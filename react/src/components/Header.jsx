import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {AiOutlineShopping, AiOutlineMenu} from 'react-icons/ai'
import {TfiClose} from 'react-icons/tfi'
import Media from './Media'
import { useSelector } from 'react-redux'


const Header = ({cartCount}) => {
    const justifyBetween = "flex items-center justify-between"
    const [toggle, setToggle] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showLogoutMessage, setShowLogoutMessage] = useState(false);

    const navigate = useNavigate()
    // const user = useSelector(state => state.user)
    const user = localStorage.getItem('user')


    useEffect(() => {

        if(user) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    })

    const toggleNav = () => {
        setToggle(toggle => !toggle)
    }

    const handleLogout = () => {
        // Clear the user data from local storage and log out the user
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setShowLogoutMessage(true);
    
        setTimeout(() => {
          setShowLogoutMessage(false);
        }, 3000); // Hide the message after 5 seconds
      };
    

  return (
    <nav id='header' className=' text-white scale-up-center '>
        {showLogoutMessage && <div className=" p-4 mb-4 text-md scale-up-center text-white rounded-lg text-center bg-red-50 dark:bg-gray-800 " role="alert">
  <span className="font-semibold ">Logout successful. See you next time!</span>
</div>}
        <div className={`w-full container mx-auto  ${justifyBetween} flex-wrap  mt-0 py-2`}>
            <div className="logo-wrapper pl-4 flex items-center">
                <Link to="/">
                    <img src="  /assets/logo.svg" className=' md:w-[120px] w-[90px] md:h-[120px] h-[90px] object-cover border-[1px] border-[#d7bf74] rounded-full ' alt="" />
                </Link>        
            </div>
        <div className={`${justifyBetween} nav-menu-wrapper space-x-10 md:flex hidden`}>
            <NavLink   activeclassname='active' exact='true' to='/' className="text-xl transition duration-300 hover:text-[#d7bf74]">Home</NavLink >
            <a href='#about' duration="500" smooth='true' className="text-xl transition duration-300 hover:text-[#d7bf74]">About</a >
        </div>
            <div className="md:flex hidden  items-center gap-5 justify-center space-x-4 capitalize">
            
                <NavLink activeclassname='active' exact='true'  to='/cart' className="mr-4 relative">
                    <AiOutlineShopping className='text-[2.5rem] hover:text-[#d7bf74] duration-300 transition'/>
                    <div className='rounded-md bg-[#d7bf74] text-white justify-center items-center  absolute -top-1 p-1 -right-1 '>{cartCount}</div>
                </NavLink >
                {
                    isLoggedIn ? <>
                        <button className='border-[#d7bf74] border-[1px] p-3 rounded-md  transition duration-300 hover:bg-[#d7bf74] hover:text-[#fff]' onClick={handleLogout}>Log Out </button>
                        <span className='text-2xl text-white'> {user.name}</span>
                    </>
                     
                    : <><NavLink activeclassname='active' exact='true' to='/login' className="text-xl transition duration-300 hover:text-[#d7bf74]">log in</NavLink >
                <NavLink activeclassname='active' exact='true' to='/register' className="text-xl  transition duration-300 hover:text-[#d7bf74]">sign up</NavLink ></>
                }
                
            </div>
            <div onClick={toggleNav} className="md:hidden block text-4xl text-white p-4 cursor-pointer ">
           {toggle ? <TfiClose /> : <AiOutlineMenu/>  }
            
        </div>
            </div>
            {toggle &&<div className={`md:hidden flex flex-col justify-center gap-5 items-center bg-gray-950 p-5 my-3 rounded-[5rem] scale-up-center transition duration-300`}>
                {toggle && <Media handleLogout={handleLogout} user={user} />}
            </div>}
        
    </nav>
  )
}

export default Header

// 42