import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import SearchedItems from '../pages/SearchedItems'
import Checkout from '../pages/Checkout'

function Router() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/cart' element={<Cart/>} />
                 <Route path='/searchresult/:id' element={<SearchedItems/>} />
                 <Route path='/checkout' element={<Checkout/>} />
            </Routes>
         </BrowserRouter>


      </>
   )
}

export default Router