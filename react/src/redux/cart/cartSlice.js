import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}

// Crée un slice nommé "cart" avec un état initial vide.
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Ajoute un produit au panier.
        addToCart: (state, action) => {
            return {products: [...state.products, {...action.payload, amount: 1}]}
        },
        // Vide le panier.
        clearCart: (state) => {
            return {products: []}
        },
        // Incrémente la quantité d'un produit dans le panier.
        incrementProductAmount: (state, action) => {
            return {
                products: state.products.map(product =>
                    product.id === action.payload.id
                        ? {...product, amount: product.amount + 1}
                        : product
                        )
                    }
                },
        // decremente la quantité d'un produit dans le panier.
        decrementProductAmount: (state, action) => {
            return{
                products: state.products.map(product => 
                    product.id === action.payload.id 
                    ? {...product, amount: product.amount - 1 } 
                    : product 
                )
            }
        } 
    }
})

// export const cartProducts = state => state.carts.products
export const cartProducts = (state) => state.cart?.products ?? [];

export const {addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions 
export default cartSlice.reducer