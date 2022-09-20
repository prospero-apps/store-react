import React from 'react';
import '../style.css';
import CartItem from './CartItem';

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
    </div>
  )
}

export default Cart
