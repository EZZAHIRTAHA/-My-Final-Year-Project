import React from 'react'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi'
const NotFound = () => {
  return (
    <div className='flex justify-center items-center scale-up-center flex-col'>
      <img src="./assets/notFound.png" alt="" />
      <Link className='text-[#ea116c] border-[1px] rounded-lg border-[#ea116c] hover:text-white  font-normal duration-300 flex items-center justify-center transition w-[150px] h-[50px]  ' to="/">
        <BiHome className='text-2xl mr-2'/> Go Back Home 
      </Link>
    </div>
  )
}

export default NotFound
