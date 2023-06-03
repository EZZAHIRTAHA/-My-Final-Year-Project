import { combineReducers } from "redux";
import cartReducer from './cart/cartSlice' 
import productReducer from './menu/productsSlice'
import addressReducer from "./userinfo/adressSlice";

const reducerFn = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer
    }
)

export default reducerFn;