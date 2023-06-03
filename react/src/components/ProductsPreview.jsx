import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {BiLoaderAlt} from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { addToCart, clearCart, cartProducts, decrementProductAmount, incrementProductAmount } from '../redux/cart/cartSlice';

const myUrl = 'http://localhost:8000/api/products'


const ProductsPreviw = () => {
  
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const getData = async () => {
    const response = await axios.get(myUrl)
    setProducts(response.data.data);
  }


  useEffect(() => {
    getData()
  }, [])



  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="container mt-20  mx-auto pb-4 w2/3 text-white scale-up-center">
        <h2 className='md:text-6xl text-4xl tracking-wider font-medium leading-tight mb-10 text-center  text-[#d7bf74]'>Our Products</h2>
        {products.length > 1 ? <Carousel responsive={responsive}>
          {
            products.length > 0 && products.map((product, index) => (
              <div key={product._id} className="w-full p-3">
                <ProductCard key={index}  product={product} onAddProduct={onAddProduct} />
              </div>
            ))
          }
        
        </Carousel> : <div className='flex justify-center '>  <BiLoaderAlt className='text-center  text-yellow-800 text-9xl animate-spin font-light' /></div>}
    </div>
  )
}

export default ProductsPreviw
