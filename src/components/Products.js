import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../Redux/actions/products';
import Product from './Product';
import './Products.css';

const Products = () => {
    const products = useSelector(state => state.products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[])

    return (
        <div className='products'>
            {products?.map((product,i) => {
                return(
                <Product key={i} id={product.id} title={product.title} price={product.price} description={product.description} image={product.image}/>
                )
            })}
        </div>
    )
}

export default Products;