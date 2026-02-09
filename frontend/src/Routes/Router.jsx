import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import SearchedItems from '../pages/SearchedItems'
import Checkout from '../pages/Checkout'
import PaymentVerification from '../pages/PaymentVerification'
import OrderTracking from '../pages/OrderTracking'
import TrackOrder from '../pages/TrackOrder'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function Router() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/searchresult/:id' element={<SearchedItems />} />
               <Route path='/checkout' element={<Checkout />} />
               <Route path='/payment/:orderId' element={<PaymentVerification />} />
               <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
               <Route path="/track-order" element={<TrackOrder />} />
               <Route path='/login' element={<Login/>} />
               <Route   path='/signup'  element={<Signup/>} />

            </Routes>
         </BrowserRouter>


      </>
   )
}

export default Router