import React from 'react'
import {AiOutlineInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className=" sticky mx-10  scale-up-center mt-10 border-[1px] mb-2 p-5 rounded-lg">
    <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
            <ul className="text-gray-300">
                <li className="mb-4">
                    <a className=" hover:underline" href="/">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#about" className=" hover:underline">About</a>
                </li>
            </ul>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">My social</h2>
            <ul className="text-gray-300 ">
                <li className="mb-4 ">
                    <a href="https://github.com/EZZAHIRTAHA" target='_blank'  className="flex justify-center items-center hover:underline decoration-yellow-300"><AiFillGithub className='text-2xl mr-3 transition-all duration-200 hover:scale-[1.2] hover:text-yellow-300'/>Github</a>
                </li>
                <li className="mb-4 ">
                    <a href="https://www.linkedin.com/in/taha-ezzahir-5b213b254/" target='_blank' className="flex justify-center items-center hover:underline decoration-yellow-300"><AiFillLinkedin className='text-2xl mr-3 transition-all duration-200 hover:scale-[1.2] hover:text-yellow-300'/>Linkedin</a>
                </li>
                <li className="mb-4 ">
                    <a href="https://dev.to/ezzahirtaha" target='_blank' className="flex justify-center items-center hover:underline decoration-yellow-300"><FaDev className='text-2xl mr-3 transition-all duration-200 hover:scale-[1.2] hover:text-yellow-300'/> Dev Community</a>
                </li>
                <li className="mb-4 ">
                    <a href="https://www.instagram.com/taha.ezh/" target='_blank' className="flex justify-center items-center hover:underline decoration-yellow-300 "><AiOutlineInstagram className='text-2xl mr-3 transition-all duration-200 hover:scale-[1.2] hover:text-yellow-300'/>Instagram</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="py-6 px-4 bg-gray-950 md:flex md:items-center rounded-md mb-3 md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center">© 2023 Taha's Food. All Rights Reserved.
        </span>
    </div>
</footer>
  )
}

export default Footer
