import React from 'react'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'
import {BsArrowRight} from 'react-icons/bs'
import useTabSwitch from '../hooks/useTabSwitch'
import { cartProducts } from '../redux/cart/cartSlice'
import AdressForm from '../components/AdressForm'
import ProductSummary from '../components/ProductSummary'
import { StripeWrapper } from '../components/PaymentForm'

const Cart = () => {
  
  const cart = useSelector(cartProducts)
  const tabs = ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary')

  if(!cart || cart.length === 0) {
    return(
      <div className="bg-white font-medium text-black flex  hover:bg-gray-300 items-center justify-center mx-[19rem] rounded-xl p-4 mt-10">
        <h1 className='text-lg tracking-wider'>Your Cart Is Empty</h1>
      </div>
    ) 
  }
  return (
    <div className='p-5'>
    <div className="h-100% mx-auto mt-2 border border-gray-200  bg-white  p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8 text-white ">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
      <div className={`${currentTab !== 'Summary' ? 'hidden' : ''} text-yellow-500  text-xl my-4`}><ProductSummary/>
      <button onClick={() => handleTabSwitch('Delivery')} className="mt-8 flex text-md justify-center items-center text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-normal rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 tracking-widest ">Next <BsArrowRight className='font-bold  text-xl ml-2'/></button>
      </div>
      <div className={`${currentTab !== 'Delivery' ? 'hidden' : ''} text-yellow-500 text-xl my-4`}><AdressForm onTabSwitch={handleTabSwitch}/></div>
      <div className={`${currentTab !== 'Payment' ? 'hidden' : ''} text-yellow-500 text-xl my-4`}><StripeWrapper /></div>
    </div>
    </div>
  )
}

export default Cart
