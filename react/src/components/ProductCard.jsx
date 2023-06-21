import React from 'react'
import AddButton from './AddButton'

const ProductCard = ({product, onAddProduct}) => {

  const addProduct = () => {
    onAddProduct(product)
  }

  return (

    <div className="max-w-full border h-[100%] rounded-lg shadow bg-gray-800 hover:bg-gray-900 border-gray-700 transition duration-150">
  <a href={`/products/${product._id}`}>
    <div className="relative w-full h-64">
      <img
        className="object-cover object-center w-full h-full rounded-t-lg transition duration-300 hover:scale-105"
        src={product.imageUrl}
        alt=""
      />
    </div>
  </a>
  <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
      {product.name}
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
      {product.description}
    </p>
    <AddButton onAddProduct={addProduct} />
  </div>
</div>

  

  )
}

export default ProductCard
