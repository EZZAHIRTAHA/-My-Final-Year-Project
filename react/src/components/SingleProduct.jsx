import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {FiLoader} from 'react-icons/fi'
import axios from 'axios'
import {AiOutlineHome} from 'react-icons/ai'
const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`)
        setProduct(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProduct()
  }, [])
console.log(product);
  return (
        <div className=' p-10 flex items-center justify-center scale-up-center '>
        {product ? <div className="max-w-sm flex justify-center items-center flex-col hover:bg-gray-900 transition duration-150  bg-white border border-gray-200  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={product.imageUrl} alt="produit" />
            <div className="p-5">
                <div className=" flex justify-between items-center py-5 border-b-[1px] border-white">
                <h2 className='text-3xl font-regular text-gray-900 dark:text-white'>{product.adjective}</h2>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white'> {product.price}$ </h2>
                
                </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-3 dark:text-[#d7bf74]">{product.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
            </div>
        <Link className='text-[#d7bf74] border-[1px] rounded-lg border-[#d7bf74] hover:text-white  font-normal duration-300 flex items-center justify-center transition w-[150px] h-[50px] box m-5 ' to="/">
           <AiOutlineHome className='text-xl mr-2'/> Back Home 
        </Link>
        </div> : <FiLoader className='text-center text-yellow-800 text-9xl animate-spin'/>}
        </div>

  )
}

export default SingleProduct
