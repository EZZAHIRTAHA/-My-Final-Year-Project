import { combineReducers } from "redux";
import cartReducer from './cart/cartSlice' 
import productReducer from './menu/productsSlice'
import addressReducer from "./userinfo/adressSlice";
import userReducer from './auth/authSlice'
const reducerFn = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer,
        user: userReducer
    }
)

export default reducerFn;