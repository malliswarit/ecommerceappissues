import React from 'react';
import './Header.css';
import { Link, Outlet } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/images/logo.png';
import { FaCartArrowDown } from 'react-icons/fa';

 const Header = () => {
  return (
    <>
    <div className='header'>
      {/* <header className='header-fields'> */}
      <img src={logo} alt="logo"/>
      <Search />
        <Link to="/">My Account</Link>
        <Link to="product">Product</Link>
        <Link to="customer">Become a Seller</Link>
        <Link to="profile">Profile</Link>
        <FaCartArrowDown />
        {/* <FontAwesomeIcon icon="fa-shopping-cart" /> */}
        {/* </header> */}
    </div>
    <Outlet />
    </>
  )
}

export default Header;