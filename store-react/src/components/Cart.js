import React from 'react';
import '../style.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeCount, deleteItem }) => {
  const changeQuantity = (id, value) => {
    changeCount(id, value)
  }

  const removeItem = (id) => {
    deleteItem(id)
  }

  return (
    <div className='cart-display'>
      {cart.map(item => 
        <CartItem key={item.selectedItem.id}        
          item={item}
          changeCount={changeQuantity}
          deleteItem={removeItem}
        />
      )}    
      <div className='subtotal'>
        {cart.length > 0 && <div>Subtotal: ${cart.reduce((prev, curr) => prev + curr.selectedItem.price * curr.count, 0).toFixed(2)}</div>}
      </div>
      {cart.length > 0 &&
        <div className='checkout-link'>
          <Link to={'/checkout'}>checkout</Link>
        </div>
      }
    </div>
  )
}

export default Cart
