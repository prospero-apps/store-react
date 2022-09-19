import React, { useState, useEffect } from 'react';
import '../style.css';
import cartImage from '../images/cart.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ items, cart }) => {
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const [items, setItems] = useState([]);
  // const [cart, setCart] = useState([]);

  // const fetchItems = async () => {
  //   const data = await fetch('https://fakerapi.it/api/v1/products');    
  //   const allProducts = await data.json();
  //   const products = allProducts.data;
  //   console.log(allProducts);
  //   setItems(products);
  // }

  // const addToCart = (id) => {
  //   // const newItem = {
  //   //   selectedItem: items.find(item => item.itemId === id),
  //   //   count: 1
  //   // }
  //   // setCart(...cart, newItem);
  //   console.log(id)
  // }

  return (
    <div id='menu'>
      <img className='logo' src={logo} alt='logo'/>
      <ul id='submenu'>
        <Link className='link' to='/'><li>Home</li></Link>
        <Link className='link' to='/store' state={{items, cart}}><li>Products</li></Link>
        <Link className='link' to='/about'><li>About</li></Link>      
        <Link className='link' to='/cart' state={{cart}}>
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