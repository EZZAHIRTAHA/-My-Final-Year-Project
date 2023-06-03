import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to="/cart">
    <button className='text-[#fff] rounded cursor-none w-[150px] h-[50px] animate-bounce bg-yellow-500  hover:bg-black hover:text-[#d7bf74] border-[1px] border-[#d7bf74] font-normal capitalize duration-300 transition '>
        order now
    </button>
    </Link>
  )
}
export default Button
