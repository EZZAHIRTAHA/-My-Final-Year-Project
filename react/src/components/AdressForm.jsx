import React from 'react'
import { useForm } from 'react-hook-form'
import {BsArrowRight} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setAddress, clearAddress } from '../redux/userinfo/adressSlice'



const AdressForm = ({onTabSwitch}) => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useDispatch()


    const onSubmit = (data) => {
        dispatch(setAddress(data))
        onTabSwitch('Payment')
    }

  return (
    
<form onSubmit={handleSubmit(onSubmit)} className='flex h-[100%] justify-center items-center flex-col'>
  <div className="relative z-0 w-full mb-6 group mt-8">
      <input type="text" {...register('address',{required: true})}  id="streetAdress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" "  />
      <label htmlFor="streetAdress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street Address</label>
      {errors.address && <p  className="mt-2 text-xs text-yellow-400"><span className="font-medium">Oh, snapp!</span> The address field is required!.</p>}
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input 
        {...register('city',{required: true})}
        type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" "  />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
      {errors.city && <p  className="mt-2 text-xs text-yellow-400"><span className="font-medium">Oh, snapp!</span> The city field is required!.</p>}
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input {...register('state',{required: true})} type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" "  />
      <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
      {errors.state && <p  className="mt-2 text-xs text-yellow-400"><span className="font-medium">Oh, snapp!</span> The state field is required!.</p>}
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input {...register('country',{required: true})} type="text" name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" "  />
        <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
        {errors.postalCode && <p  className="mt-2 text-xs text-yellow-400"><span className="font-medium">Oh, snapp!</span> The country field is required!.</p>}
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input 
        {...register('postalCode',{required: true})}
        type="text" name="postalCode" id="postalCode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer " placeholder=" "  />
        <label htmlFor="postalCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal Code</label>
        {errors.postalCode && <p  className="mt-2 text-xs text-yellow-400"><span className="font-medium">Oh, snapp!</span> The postal code field is required!.</p>}
    </div>
  </div>
  
  <button type="submit" className="mt-8 flex text-md justify-center items-center text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-normal rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 tracking-widest ">Next <BsArrowRight className='font-bold  text-xl ml-2'/></button>
</form>

  )
}

export default AdressForm
