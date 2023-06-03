import React from 'react'
import {FiAlertCircle} from 'react-icons/fi'
const PaymentSuccess = () => {
  return (
    <div class="p-4 flex items-center justify-center mx-96 animate-pulse mb-4 text-xl text-green-800 mt-20 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
      <FiAlertCircle className='mr-3 text-2xl' /> 
      <span class="font-medium">Your paiment was successful</span>.
    </div>
  )
}

export default PaymentSuccess
