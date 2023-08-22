import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Header, NotFound, SingleProduct, Footer, Recipes } from '../components'
import { Home, Cart, Login, Menu, PaymentSuccess, Register } from '../pages'
import { useSelector } from 'react-redux'
import { cartProducts } from '../redux/cart/cartSlice'


const Navigation = () => {

    const productsInCart = useSelector(cartProducts)
    const {user} = useSelector(state=> state)
    return(
        <BrowserRouter>
            <Header cartCount= { productsInCart ? productsInCart.length : 0}/>
             <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/payment-success' element={<PaymentSuccess/>} />
                <Route path='/products/:id' element={<SingleProduct/>}/>
                <Route path='*' element={<NotFound />} />
                <Route path="/other" element={<Recipes/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Navigation;