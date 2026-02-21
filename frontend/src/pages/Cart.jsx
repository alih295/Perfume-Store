import React, { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CartSummary from "../components/CartSummary";
import { ProductContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


function Cart() {
  const { cartProducts , setCartProducts } = useContext(ProductContext);
  
  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
   useEffect(() => {
    if(cartProducts.length > 0){localStorage.setItem('cart', JSON.stringify(cartProducts))
      
    }
    


  }, [cartProducts])
  useEffect(() => {

    const item = JSON.parse(localStorage.getItem('cart'))
    setCartProducts(item)


  }, [])

  return (
    <>
      <div className="w-full bg-gray-100 flex flex-col font-[simple] min-h-screen relative">
        <Nav />

        <div className="w-full bg-gray-100  text-black/95   bg-scroll flex-1 mt-10 flex items-start justify-between p-10 h-150  ">
          <div className="flex w-[70%] overflow-y-auto p-10  gap-10 bg-scroll h-full flex-col">
            {cartProducts.length !== 0 ? (
              cartProducts.map((item, idx) => {
                return <CartSummary item={item} key={idx} />;
              })
            ) : (
              <div className=" p-10 text-xl text-gray-600 bg-gray-200 rounded-lg">
                no items here
              </div>
            )}
          </div>

          <motion.div whileHover={{scale:1.01 , boxShadow:'6px 6px 12px rgba(0,0,0,0.5)'}}
          transition={{duration:0.15}}
          className="w-[25%] bg-scroll p-5 flex  flex-col items-center justify-center gap-10 h-90 rounded-lg ">
            <div className="w-full text-lg border-b  flex items-center justify-between">
              <p>Total Items </p>
              <p> {cartProducts.length} </p>
            </div>
            <div className="w-full text-lg border-b flex items-center justify-between">
              <p>Total price </p>
              <p> {totalPrice}</p>
            </div>

            <Link to={'/checkout'}
              className={`w-full bg-black/95 text-center cursor-pointer ${
                cartProducts.length > 0 ? "block" : "hidden"
              }  text-lg font-semibold py-2 font-[heading] text-yellow-500 transition-all transition-100 hover:text-black/95 hover:bg-yellow-500 rounded-full bg-black/95`}
            >
              {cartProducts.length > 0 ? "Checkout" : "No Items Selected"}
            </Link>
          </motion.div>
        </div>
      <Footer />
      </div>
    </>
  );
}

export default Cart;
