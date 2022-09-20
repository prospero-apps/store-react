import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../style.css';

const SingleProduct = ({addToCart }) => {
  const location = useLocation();
  const { item } = location.state;

  const toCart = (id) => {
    addToCart(id);
  }
  
  return (
    <div className='single-product'>
      <h1>{item.name}</h1>
      <img src={item.image} alt='product'/>
      <h2>${item.price}</h2>
      <button onClick={() => toCart(item.id)} className='add-button'>Add to cart</button> 
      <Link to='/store'>Go back</Link> 
    </div>
  )
}

export default SingleProduct
