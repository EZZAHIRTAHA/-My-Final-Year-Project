import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// Définit l'état initial du slice.
const initialState = {
    products: [], // un tableau vide pour stocker les produits
    error: null, // une valeur nulle pour stocker les erreurs
    status: 'idle' // une chaîne de caractères pour stocker l'état de la requête
}

const myUrl = "http://localhost:8000/api/products-by-categories"

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.products = [...action.payload.data]
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'pending'
        })
    }
})

export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
    const response = await fetch(myUrl)
    const data = await response.json()
    return data
})


export const selectAllProducts = state => state.products
export const {getProducts} = productsSlice.actions
export default productsSlice.reducer 