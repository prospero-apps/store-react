import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import '../style.css';

const SingleProduct = () => {
  let { id } = useParams();
  const location = useLocation();
  const { image, name, price, items } = location.state;

  useEffect(() => {
    console.log(id)
    console.log(image, name, price, items)
  }, [])
 
  return (
    <div className='single-product'>
      <h1>{name}</h1>
      <img src={image} alt='product'/>
      <h2>${price}</h2>
      <button className='add-button'>Add to cart</button> 
      <Link to='/store' state={{items}}>Go back</Link> 
    </div>
  )
}

export default SingleProduct