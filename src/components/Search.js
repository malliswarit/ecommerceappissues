import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { filterProducts } from '../Redux/actions/products';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <input type="search" className='search-field' placeholder='Search Products' onChange={(e) => dispatch(filterProducts(e.target.value))}/>
  )
}

export default Search;