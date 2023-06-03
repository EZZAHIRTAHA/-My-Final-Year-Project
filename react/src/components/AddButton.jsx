import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
const AddButton = ({onAddProduct}) => {
  return (
    <>
      <button onClick={onAddProduct} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
            Add Product  <BsArrowRight className='text-xl ml-2'/>
        </button>
    </>
  )
}

export default AddButton
