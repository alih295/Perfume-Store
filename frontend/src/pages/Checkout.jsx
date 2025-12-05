import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ProductContext } from "../Context/Context";

function Checkout() {
  const{cartProducts } = useContext(ProductContext)
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    let Total=0
    cartProducts.forEach((i)=>{
       Total += i.price
    })
    setSubTotal(Total)
  }, [])
  




  return (
    <div className="w-full min-h-screen  font-[simple] flex flex-col ">
      <Nav />
      <div className="w-full p-10 gap-5 flex flex-2 ">
        <div className="w-1/2 p-10  rounded-lg border border-[#D3A95E]">
          <h1 className="text-2xl mb-10 font-semibold">Billin Details</h1>
          <form className="flex  flex-col ">
            <label className="block  ">Full Name</label>
            <input
              className="w-full outline-none  py-2 px-5 rounded-full border border-[#D3A95E] shadow-md shadow-black/20"
              type="text"
            />
            <label className="block mt-3 ">Street Address</label>
            <input
              placeholder="Home Number And Street Name"
              className="w-full outline-none  py-2 px-5 rounded-full border border-[#D3A95E] shadow-md shadow-black/20"
              type="text"
            />
            <label className="block mt-3 ">Town/City</label>
            <input
              className="w-full outline-none  py-2 px-5 rounded-full border border-[#D3A95E] shadow-md shadow-black/20"
              type="text"
            />
            <label className="block mt-3 ">Phone</label>
            <input
              className="w-full outline-none  py-2 px-5 rounded-full border border-[#D3A95E] shadow-md shadow-black/20"
              type="text"
            />
            <label className="block mt-3 ">Email Address (optional)</label>
            <input
              className="w-full outline-none  py-2 px-5 rounded-full border border-gray-400 shadow-md shadow-black/20"
              type="text"
            />
            <div className="w-full flex flex-col gap-10  mt-10   rounded-lg ">
              <h1 className="text-2xl font-semibold">Payment Information </h1>

              <div className="flex gap-2 ">
                <input type="radio" /> <p>jazzcash</p>
              </div>
              <div className="flex gap-2 ">
                <input type="radio" /> <p>Easypaisa</p>
              </div>
              <button className="w-full p-2 text-lg font-[heading]  font-semibold  cursor-pointer bg-[#D3A95E] rounded-full ">Place Order</button>

            </div>
          </form>

        </div>
        <div className="w-1/2 p-10 flex flex-col gap-5  border border-[#D3A95E] ">
          <h1 className="text-lg mb-10 font-semibold">Your Order</h1>
          <div className="w-full py-5 capitalize flex items-center justify-between border-b border-[#D3A95E]  ">
            <h4>Product</h4> <h4>sub total</h4>
          </div>
         {cartProducts.map((item,idx)=>{
          return (
             <div key={idx} className="w-full  flex border-b border-[#D3A95E] justify-between  items-center gap-5">
            <img className="w-[20%] h-[80%] object-cover" src={item.src} alt="" />
            <p>{item.title}</p> <p>RS.{item.price}</p>
          </div>
          )
         })}
          <div className="w-full py-5 capitalize flex items-center justify-between border-b border-[#D3A95E]  ">
            <h4>Subtotal</h4> <h4 className="text-red-700"> RS.{subTotal}</h4>
          </div>
          <div className="w-full py-5 capitalize flex items-center justify-between border-b border-[#D3A95E]  ">
            <h4>Shipping</h4> <h4 className="text-red-700"> RS.200</h4>
          </div>
          <div className="w-full py-5 capitalize flex items-center justify-between   ">
            <h4>Total</h4> <h4 className="text-red-700">RS.{subTotal+200}</h4>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
