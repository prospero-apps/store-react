import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className='home-about-checkout'>
      <h1>Thank you for your purchase.</h1>
      <Link to='/cart'>Go back</Link>
    </div>
  )
}

export default Checkout