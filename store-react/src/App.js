import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SingleProduct from './components/SingleProduct';

function App() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakerapi.it/api/v1/products');    
    const allProducts = await data.json();
    const products = allProducts.data;
    setItems(products);
  }
  
  const addToCart = (id) => {
    const alreadyInCart = cart.some(element => element.selectedItem.id === id);

    const newItem = {
      selectedItem: items.find(item => item.id === id),
      count: 1
    }
    if (!alreadyInCart) {
      setCart(arr => [...arr, newItem]);
    }
  }

  const changeCount = (id, value) => {
    setCart(cart.map(item => 
      item.selectedItem.id === id
      ? {...item, count: value}
      : item) 
    )
  }

  const deleteItem = (id) => {
    setCart(cart.filter(item =>
      item.selectedItem.id !== id))
  }


  return (
    <div id='main-container'>      
      <BrowserRouter>
        <Header cart={cart}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store items={items} cart={cart} addToCart={addToCart}/>}/>
          <Route path='/store/:id' element={<SingleProduct addToCart={addToCart}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart cart={cart} changeCount={changeCount} deleteItem={deleteItem}/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>    
  ); 
}

export default App;
