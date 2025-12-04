import React, { useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CartSummary from "../components/CartSummary";
import { ProductContext } from "../Context/Context";

function Cart() {
  const { cartProducts } = useContext(ProductContext);
  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div className="w-full flex flex-col font-[simple] min-h-screen relative">
        <Nav />

        <div className="w-full bg-scroll flex-1 mt-10 flex items-start justify-between p-10 h-150  ">
          <div className="flex w-[70%] overflow-y-auto bg-scroll h-full  flex-col">
            {cartProducts.length !== 0 ? (
              cartProducts.map((item, idx) => {
                return <CartSummary item={item} key={idx} />;
              })
            ) : (
              <div className=" p-10 text-xl text-gray-600 bg-gray-400 rounded-lg">
                no items here
              </div>
            )}
          </div>

          <div className="w-[25%] bg-scroll p-5 flex shadow-lg shadow-black flex-col items-center justify-center gap-10 h-90 rounded-lg ">
            <div className="w-full text-lg border-b  flex items-center justify-between">
              <p>Total Items </p>
              <p> {cartProducts.length} </p>
            </div>
            <div className="w-full text-lg border-b flex items-center justify-between">
              <p>Total price </p>
              <p> {totalPrice}</p>
            </div>

            <button
              className={`w-full cursor-pointer ${
                cartProducts.length > 0 ? "block" : "hidden"
              }  text-lg font-semibold py-2 rounded-full bg-[#ECB651]`}
            >
              {cartProducts.length > 0 ? "Checkout" : "No Items Selected"}
            </button>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
}

export default Cart;
