import React from 'react';
import { FETCH_CATEGORIES, FETCH_BY_CATEGORY,FETCH_ELECTRONICS,FETCH_JEWELLERY,FETCH_MENS_CLOTHING,FETCH_WOMENS_CLOTHING } from '../actions/types';

const initialState = {
    categories: [],
    // categoryDetails: []
    electronics: [],
    jewelery: [],
    mensClothing: [],
    womensClothing: []
}

const categoriesReducer = (state = initialState,action) => {
    const {type,payload} = action

    switch(type) {
        case FETCH_CATEGORIES: return {...state, categories: payload};
        case FETCH_ELECTRONICS: return {...state, electronics: payload};
        case FETCH_JEWELLERY: return {...state, jewelery: payload};
        case FETCH_MENS_CLOTHING: return {...state, mensClothing: payload};
        case FETCH_WOMENS_CLOTHING: return {...state, womensClothing: payload};
        default: return state 
    }
}

export default categoriesReducer