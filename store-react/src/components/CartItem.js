import React, { useState, useEffect } from 'react';
import '../style.css';
import trash from '../images/trash-can.png';

const CartItem = ({ item, changeCount, deleteItem }) => {  
  const changeQuantity = (id, e) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    changeCount(id, e.target.value)
  }

  const clickTrash = (id) => {
    deleteItem(id)
  }  

  return (   
    <div className='cart-item'>            
      <img className='product-icon' src={item.selectedItem.image} alt='product'/>
      <h3>{item.selectedItem.name}</h3>      
      <input 
        className='quantity-input' 
        type='number' value={item.count} 
        min='1'
        onChange={(e) => changeQuantity(item.selectedItem.id, e)}
      />
      <h4>${(item.count * item.selectedItem.price).toFixed(2)}</h4>
      <img 
        onClick={() => clickTrash(item.selectedItem.id)} 
        className='trash-image' 
        src={trash} 
        alt='trash'/>
    </div>
  )
}

export default CartItem
