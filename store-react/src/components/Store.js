import React from 'react';
import '../style.css';
import StoreProduct from './StoreProduct';

const Store = ({ items, cart, addToCart }) => {
  return (
    <div className='store-display'>
      {items.map(item => 
        <StoreProduct key={item.id} 
          item={item}
          cart={cart}
          addToCart={addToCart}
        />
      )}      
    </div>
  )  
}

export default Store