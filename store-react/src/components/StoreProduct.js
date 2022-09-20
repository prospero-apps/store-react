import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const StoreProduct = ({ item, cart, addToCart }) => {
  const toCart = (id) => {
    addToCart(id);
  }

  return (   
    <div className='store-product'>
      <img src={item.image} alt='product'/>      
      <div className='product-data'>
        <h3>{item.name}</h3>
        <Link to={`/store/${item.id}`} state={{item}}>details</Link>
        <h4>${item.price}</h4>
        <button onClick={() => toCart(item.id)} className='add-button'>Add to cart</button>
      </div>
    </div>
  )
}

export default StoreProduct