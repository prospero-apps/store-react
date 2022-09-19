import React, { useState, useEffect } from 'react';
import '../style.css';
import StoreProduct from './StoreProduct';
import { useLocation } from 'react-router-dom';

const Store = () => {
  const location = useLocation();
  let { items, cart } = location.state;
  console.log(location.state);

  return (
    <div className='store-display'>
      {items.map(item => 
        <StoreProduct key={item.id}        
          itemId={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          items={items}
          cart={cart}
          // addToCart={addToCart}
        />
      )}      
    </div>
  )  
}

export default Store