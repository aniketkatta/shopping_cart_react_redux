import React from 'react'
import ProductPage from './component/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import CartItem from './component/CartItem';

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen w-[100%]'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/cart' element={<CartItem />} />
        </Routes>    
      </div>
    </BrowserRouter>
  )
}

export default App
