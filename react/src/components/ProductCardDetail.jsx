import React from 'react'


const ProductCardDetail = ({product, onAddProduct}) => {
      

  return (
    <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900">
      <img className="p-2 rounded-t-lg max-w-lg" src={product.imageUrl} alt="product image" />
      <div className="px-5 pb-5">
        <h5 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        <p className='w-[50%] mt-4'>{product.description}</p>
        <div className="flex mt-5 items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
          <button onClick={onAddProduct} className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Add to cart</button>
        </div>
      </div>
    </div>
  );
};


 

export default ProductCardDetail
