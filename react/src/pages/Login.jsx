import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/auth/authSlice'
import { BiLoaderAlt } from 'react-icons/bi';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loggedInMessage, setLoggedInMessage] = useState()

  const { email, password } = formData

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
    
      navigate('/')
      setLoggedInMessage(true)
      setTimeout(() => {
        setShowLogoutMessage(false);
      }, 5000);
    
  }

  if (isLoading) {
    return <BiLoaderAlt />
  }

  return (
    <>
      <section className='form flex w-full justify-center items-center'>
      {loggedInMessage && <div className=" p-4 mb-4 text-md scale-up-center text-white rounded-lg text-center bg-red-50 dark:bg-gray-800 " role="alert">
  <span class="font-semibold ">Login successful. Welcome to your account!</span></div>}
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
            <input
              type='password'
              className='shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
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







// import React, {useState} from 'react'
// import { useForm } from 'react-hook-form'
// import { app } from '../firebase-config'
// import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import {BiShowAlt, BiHide} from 'react-icons/bi'
// const Login = () => {
  
//   const navigate = useNavigate()
//   const { register, handleSubmit } = useForm()
//   const [loading, setLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)

//   const onSubmit = (data) => {
//     setLoading(true);
//     const authentication = getAuth();
//     let uid = '';
//     signInWithEmailAndPassword(authentication, data.email, data.password)
//         .then((response) => {
//             uid = response.user.uid;
//             sessionStorage.setItem('User Id', uid);
//             sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
//             window.dispatchEvent(new Event("storage"))
//             setLoading(false);
//             toast.success('Successful Login!🎉', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: 'dark'
//                 });
//             navigate('/');
//         })
//         .catch((error) => {
//             if (error.code === 'auth/wrong-password') {
//                 toast.error('Wrong Password')
//             }
//             if (error.code === 'auth/user-not-found') {
//                 toast.error('Email not found, please registe')
//             }
//             setLoading(false);
//         })

// }

//   return (
//     <section className='flex w-full justify-center items-center '>
//     <form className='flex  bg-gray-950 md:max-w-[50%] w-full rounded-[15px] border-[1px] flex-col justify-center items-center scale-up-center p-5 my-5 border-yellow-500' onSubmit={handleSubmit(onSubmit)}>
//       <h3 className="text-3xl font-medium tracking-widest my-9 text-yellow-300 ">Login </h3>
//       <div className="mb-6">
//       <label htmlFor="email" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Your email</label>
//       <input  {...register('email')} type="email" id="email" className="shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
//     </div>
//     <div className="mb-6">
//       <label htmlFor="password" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Your password</label>
//       <input  {...register('password')} type="password" id="password" className="shadow-sm bg-yellow-50 border border-white-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light" />
//     </div>


//     <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px] dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 tracking-widest">Login</button>
//   </form>
//   <ToastContainer/>
// </section>
//   )
// }

// export default Login
