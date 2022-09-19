import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const StoreProduct = ({ image, name, price, itemId, items, cart }) => {
  const toCart = (id) => {
    // addToCart(id);
    console.log(cart)
  }
  
  return (
    <div className='store-product'>
      <img src={image} alt='product'/>      
      <div className='product-data'>
        <h3>{name}</h3>
        <Link to={`/store/${itemId}`} state={{image, name, price, items}}>details</Link>
        <h4>${price}</h4>
        <button onClick={toCart} className='add-button'>Add to cart</button>
      </div>
    </div>
  )
}

export default StoreProduct