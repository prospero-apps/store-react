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
    console.log(allProducts);
    setItems(products);
  }

  // const addToCart = (id) => {
  //   const newItem = {
  //     selectedItem: items.find(item => item.itemId === id),
  //     count: 1
  //   }
  //   setCart(...cart, newItem);
  // }

  return (
    <div id='main-container'>      
      <BrowserRouter>
        <Header items={items} cart={cart}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/store/:id' element={<SingleProduct/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
