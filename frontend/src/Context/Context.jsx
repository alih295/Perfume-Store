import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const ProductContext = createContext();

function Context({ children }) {
  const [product, setproduct] = useState([])
  useEffect(() => {
   const fetchProduct = async()=>{
     const res = await axios.get('http://localhost:3000/api/product')
     setproduct(res.data)
   } 
   fetchProduct()
  }, [])
  

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    setCartProducts(JSON.parse(storedCart));
  }
}, []);
  return (
    <>
      <ProductContext.Provider
        value={{product , cartProducts, setCartProducts }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}

export default Context;
