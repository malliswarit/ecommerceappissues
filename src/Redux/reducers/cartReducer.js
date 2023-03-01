import React from 'react';
import { ADD_PRODUCT_TO_CART } from '../actions/types';

const initialState = []

const cartReducer = (state = initialState,action) => {
    const {type, payload} = action

    switch(type) {
        case ADD_PRODUCT_TO_CART: return payload
        default: return state  
    }
}

export default cartReducer;