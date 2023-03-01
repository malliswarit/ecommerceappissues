import { ADD_PRODUCT_TO_CART, FETCH_CATEGORIES, FETCH_BY_CATEGORY, FILTER_PRODUCTS, GET_PRODUCTS, UPDATE_PRODUCT , FETCH_ELECTRONICS,
FETCH_JEWELLERY,FETCH_MENS_CLOTHING,FETCH_WOMENS_CLOTHING} from "./types";
import productService from "../../services/productService";

export const getProducts = () => async(dispatch) => {
    try {
        const res = await productService.getAll();

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
    catch(err) {
        console.log(err)
    }

}

export const filterProducts = (title) => async(dispatch) => {
    try {
    dispatch({
        type: FILTER_PRODUCTS,
        payload: title
    })
    }
    catch(err) {
        console.log(err)
    }
}

export const fetchCategories = () => async(dispatch) => {
    const res = await productService.fetchCategories();

    dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data 
    })
}

export const fetchElectronics = (category) => async(dispatch) => {
    const res = await productService.fetchByCategory(category);

    dispatch({
        type : FETCH_ELECTRONICS,
        payload: res.data
    })
}

export const fetchJewellery = (category) => async(dispatch) => {
    const res = await productService.fetchByCategory(category);

    dispatch({
        type : FETCH_JEWELLERY,
        payload: res.data
    })
}

export const fetchMensClothing = (category) => async(dispatch) => {
    const res = await productService.fetchByCategory(category);

    dispatch({
        type : FETCH_MENS_CLOTHING,
        payload: res.data
    })
}

export const fetchWomensClothing = (category) => async(dispatch) => {
    const res = await productService.fetchByCategory(category);

    dispatch({
        type : FETCH_WOMENS_CLOTHING,
        payload: res.data
    })
}

export const addProductToCart = (id) => (dispatch) => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: id
    })
}