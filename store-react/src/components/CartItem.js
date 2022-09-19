import React from 'react';
import '../style.css';

const CartItem = ({ image, name, price, itemId, count, items, addToCart }) => {
  return (
    <div className='cart-item'>
      <img src={image} alt='product'/>      
      <div className='cart-item-data'>
        <h3>{name}</h3>
        {/* <Link to={`/store/${itemId}`} state={{image, name, price, items}}>details</Link>
        <h4>${price}</h4>
        <button onClick={toCart} className='add-button'>Add to cart</button> */}
      </div>
    </div>
  )
}

export default CartItem