import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { app } from '../firebase-config'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BiShowAlt, BiHide} from 'react-icons/bi'
const Register = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:"",
    password2:""
  })

  return (
    <section className='flex w-full justify-center items-center '>
        <form className='flex  bg-gray-950 md:max-w-[50%] w-full rounded-[15px] border-[1px] flex-col justify-center items-center scale-up-center p-5 my-5 border-yellow-500' onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-3xl font-medium tracking-widest my-9 text-yellow-300 ">Register </h3>
          <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Your name</label>
          <input type="name" id="name" className="shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="" />
        </div>
          <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Your email</label>
          <input  type="email" id="email" className="shadow-sm bg-none border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-white  dark:text-white  dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Your password</label>
          <input  type="password" id="password" className="shadow-sm bg-yellow-50 border border-white-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block md:w-[300px] w-full p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 dark:shadow-sm-light" />
        </div>
        <div className="mb-6">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Repeat password</label>
          <input   type="password" id="repeat-password" className="shadow-sm bg-yellow-50 border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block  p-2.5 dark:bg-black dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 transition duration-300 dark:focus:border-yellow-500 md:w-[300px] w-full  dark:shadow-sm-light" />
        </div>

        <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px] dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Register new account</button>
      </form>
      <ToastContainer/>
    </section>
  )
}

export default Register
