import { combineReducers } from "redux";
import  productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer
})

export default rootReducer;