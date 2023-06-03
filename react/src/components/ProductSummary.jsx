import React from 'react'
import { useSelector } from 'react-redux'
import { cartProducts } from '../redux/cart/cartSlice'
import ProductSummaryCard from './ProductSummaryCard'
import { BsArrowRight } from 'react-icons/bs'


const ProductSummary = () => {

    const cart = useSelector(cartProducts)


  return (
    <div className="flex  flex-col">
        {
            cart && cart?.map((product, index) => (
                <div className="">
                    <ProductSummaryCard key={index} product={product} />
                </div>
            ))
        }
     
    </div>
  )
}

export default ProductSummary
