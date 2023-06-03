import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
/*
 Redux Thunk est un middleware pour Redux qui permet de gérer les actions asynchrones et les effets secondaires dans les applications Redux.
*
applyMiddleware is a method provided by the Redux library that helps you define and apply middleware to your Redux store.
*/ 
import thunk from "redux-thunk";
import reducerFn from "./reducer";





const store = configureStore({
    reducer: reducerFn
}, applyMiddleware(thunk))

export default store;

