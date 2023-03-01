import { ADD_PRODUCT_TO_CART, FETCH_BY_CATEGORY, FETCH_CATEGORIES, FILTER_PRODUCTS, GET_PRODUCTS, UPDATE_PRODUCT } from "../actions/types";

const initialState = []

 const productsReducer = (products = initialState, action) => {
    const {type, payload} = action
    
    switch(type) {
        case GET_PRODUCTS: return  payload;
        case FILTER_PRODUCTS: return products.filter(product => product.title.toLowerCase().includes(payload.toLowerCase()));
        
        default : return products
    }

}

export default productsReducer;

const categoriesState = {
    categories: [],
    categoryDetails: []
}

 const categoriesReducer = (state = {}, action) => {
    const {type,payload} = action;
    
    switch(type) {
        case FETCH_CATEGORIES: return {...state, categories: payload};
        case FETCH_BY_CATEGORY: return {...state, categoryDetails: payload};
        default: return state 
    }
}



const cartReducer = (state = {},action) => {
    const {type, payload} = action

    switch(type) {
        case ADD_PRODUCT_TO_CART: return {...state, cart: payload}
        default: return state  
    }
}

