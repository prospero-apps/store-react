// import React from 'react';
// import '../style.css';
// import { useLocation } from 'react-router-dom';

// const Cart = () => {
//   const location = useLocation();
//   const { cart } = location.state;

//   return (
//     <div>
//       <h1>Cart</h1>
//     </div>
//   )
// }

// export default Cart

import React from 'react';
import '../style.css';
import { useLocation } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const location = useLocation();
  const { cart, addToCart } = location.state;

  return (
    <div className='cart-display'>
      {cart.map(item => 
        <CartItem key={item.id}        
          itemId={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          count={item.count}
          items={cart}
          addToCart={addToCart}
        />
      )}      
    </div>
  )
}

export default Cart


// ****



//   return (
//     <div className='store-display'>
//       {items.map(item => 
//         <StoreProduct key={item.id}        
//           itemId={item.id}
//           image={item.image}
//           name={item.name}
//           price={item.price}
//           items={items}
//           // addToCart={addToCart}
//         />
//       )}      
//     </div>
//   )  
// }

// export default Store