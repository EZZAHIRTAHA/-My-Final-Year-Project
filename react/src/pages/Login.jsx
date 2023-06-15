import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/auth/authSlice'
import { BiLoaderAlt } from 'react-icons/bi';
import { BiShowAlt, BiHide } from 'react-icons/bi';




function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loggedInMessage, setLoggedInMessage] = useState()

  const { email, password } = formData

  const [showPassword,setShowPassword] = useState(false)

  const toggle = () => {
    setShowPassword(showPassword => !showPassword)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state)

  const userIn = localStorage.getItem('user')

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }


    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
    
    setLoggedInMessage(true)
    setTimeout(() => {
      setLoggedInMessage(false);
      navigate('/')
    }, 2000);
    
  }

  if (isLoading) {
    return <BiLoaderAlt />
  }

  return (
    <>
      {loggedInMessage && <div className=" p-5 mx-60 border-[1px] border-yellow-300 text-md scale-up-center text-white rounded-lg text-center bg-red-50 dark:bg-gray-800  " role="alert">
  <span class="font-semibold ">Login successful. Welcome to your account!</span></div>}
      <section className='form flex w-full justify-center items-center'>
        <form onSubmit={onSubmit} className='scale-up-center flex  bg-gray-950 md:max-w-[50%] w-full rounded-[15px] border-[1px] flex-col justify-center items-center scale-up-center p-5 my-5 border-yellow-500'>
          <div className='form-group mb-6'>
            <input
              type='email'
              className='shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group mb-6'>
            {showPassword ? <input
              type='text'
              className='shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            /> :  <input
            type='password'
            className='shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}
          /> }
          {formData.password &&<div onClick={toggle} className="absolute  right-52 transform -translate-y-1/2">
            { showPassword ? <BiHide className='text-white' /> : <BiShowAlt className='text-white'/> }
          </div>}
          </div>

          <div className='form-group mb-6'>
            <button type='submit' className='text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px] dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login





