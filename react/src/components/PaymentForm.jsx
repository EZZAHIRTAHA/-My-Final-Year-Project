import React, {useState, useEffect} from 'react'
import { CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, cartProducts } from '../redux/cart/cartSlice';
import { getAddress, clearAddress } from '../redux/userinfo/adressSlice';
import { useNavigate } from 'react-router-dom';





const stripePromise = loadStripe("pk_test_51My0d7CbrVwcVizeIEBXKquHJdDJqtVuL0musxUhLB0ZSXxrSPXuq2lvn7ZZbMqKDzVhytPKU5skhXhop2vieAZs00RA8nq7Gb");

export const StripeWrapper = () => {
  return (
    <Elements  stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}

const PaymentForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(cartProducts)
  const address = useSelector(getAddress)
  const elements = useElements()
  const stripe = useStripe()

  // const handleSubmit = async(event) => {
  //   event.preventDefault()
  //   if(!stripe || !elements || !cart?.length || !address) {
  //     return;
  //   }
  //   setLoading(true)
  //   try {
  //     const {error: backendError, clientSecret} = await fetch("http://localhost:8000/create-payment-intent", {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         PaymentMehodType: 'card',
  //         orderItems: cart,
  //         userId: '',
  //         shippingAddress: address
  //       })
  //     }).then(result => result.json())
  //     const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
  //       clientSecret, {
  //         payment_method: {
  //           card: elements.getElement(CardElement)
  //         }
  //       }
  //     )
  //     if (backendError || stripeError) {
  //       setError(backendError || stripeError)
  //     } else if (paymentIntent.status === 'succeeded') {
  //       dispatch(clearAddress())
  //       dispatch(clearCart())
  //       navigate('/payment-success')
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setLoading(false)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !cart?.length || !address) {
        return;
    }

    setLoading(true);
    try {
        const { error: backeEndError, clientSecret } = await fetch('http://localhost:8080/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                orderItems: cart,
                userId: '',
                shippingAddress: address
            })
        }).then(r => r.json());

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
        )
        if (backeEndError || stripeError) {
            setError(backeEndError || stripeError)
        } else if (paymentIntent.status === 'succeeded') {
            dispatch(clearAddress());
            dispatch(clearCart());
            navigate('/payment-success');
        }

    } catch(err) {
        console.log(err);
    }

    setLoading(false);
}
  return (
    <form className='md:2/3 md:mx-auto px-2 pt-1' id='payment-form' onSubmit={handleSubmit}>
        <label htmlFor="card-element" className='pt-4 text-2xl md:text-center'> Please enter your card details</label>
        <div className="my-4">
          <CardElement className='text-white' id='card-element'/>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" disabled={loading} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 border-yellow-600 border-[2px] ">{loading? 'Loading...' : "Pay Now"}</button>
        </div>

    </form>
  )
}

export default PaymentForm
 