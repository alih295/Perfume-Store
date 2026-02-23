import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import SearchedItems from "../pages/SearchedItems";
import Checkout from "../pages/Checkout";
import PaymentVerification from "../pages/PaymentVerification";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoutes from "../ProtectedRoutes";
import Account from "../pages/Account";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoutes>
                <Cart />
              </ProtectedRoutes>
            }
          />
          <Route path="/searchresult/:id" element={<SearchedItems />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment/:orderId" element={<PaymentVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
