import React, { useState, useEffect } from 'react';
import '../style.css';
import cartImage from '../images/cart.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
  return (
    <div id='menu'>
      <img className='logo' src={logo} alt='logo'/>
      <ul id='submenu'>
        <Link className='link' to='/'><li>Home</li></Link>
        <Link className='link' to='/store'><li>Products</li></Link>
        <Link className='link' to='/about'><li>About</li></Link>      
        <Link className='link' to='/cart'>
          <li className='cart-image'>
            <img src={cartImage} alt='cart'/>
            <div>{cart.length}</div>
          </li>
        </Link>     
      </ul>
    </div>
  )
}

export default Header