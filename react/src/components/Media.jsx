import {useEffect, useState} from "react"
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Media = ({user, handleLogout}) => {

  const [toggle, setToggle] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showLogoutMessage, setShowLogoutMessage] = useState(false);

    const navigate = useNavigate()
    // const user = useSelector(state => state.user)
    // const user = localStorage.getItem('user')


    useEffect(() => {

        if(user) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    })

    

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
         {user ?<button onClick={handleLogout} className="text-xl border-[#d7bf74] border-[1px] p-3 rounded-md  transition duration-300 hover:bg-[#d7bf74] hover:text-[#fff]">Logout</button> : <><NavLink
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
          </NavLink></> }
        </div>
      </div>
    )
  }

export default Media;