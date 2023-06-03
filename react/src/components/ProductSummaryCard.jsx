import React from 'react'
import { useDispatch } from 'react-redux'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { AiOutlineFieldNumber } from 'react-icons/ai'
import { incrementProductAmount, decrementProductAmount } from '../redux/cart/cartSlice'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'


const ProductSummaryCard = ({ product }) => {

  const dispatch = useDispatch()


  return (
    <div className="flex flex-col sm:flex-row p-2 border-b border-gray-200">
      <div className="border border-gray-300 rounded-lg w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-8">
        <img src={product.imageUrl} alt={product.name} className="w-full" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center justify-center mb-4 sm:mb-0">
            <h1 className="text-xl sm:text-2xl">{product.price}</h1>
            <MdOutlineAttachMoney className="text-xl sm:text-2xl ml-1" />
          </div>
          <div className="flex items-center justify-center gap-4 md:p-5 p-0">
            <button
            //   disabled={product.amount <= 0}
              onClick={() => dispatch(incrementProductAmount(product)) }
              className="p-2 sm:p-3 box transition duration-150 border border-white rounded-md "
            >
              <AiOutlinePlus/>
            </button>
            <span className="flex items-center justify-center gap-1">
              <AiOutlineFieldNumber className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base">{product.amount}</span>
            </span>
            <button
              disabled={product.amount <= 0}
              onClick={() => dispatch(decrementProductAmount(product))}
              className="p-2 sm:p-3 box transition duration-150 border border-white rounded-md"
            >
              <AiOutlineMinus/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSummaryCard
