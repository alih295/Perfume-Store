import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import SearchedItems from '../pages/SearchedItems'

function Router() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/cart' element={<Cart/>} />
                 <Route path='/searchresult/:id' element={<SearchedItems/>} />
            </Routes>
         </BrowserRouter>


      </>
   )
}

export default Router