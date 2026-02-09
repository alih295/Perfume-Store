import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ProductContext } from "../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate()
  const { cartProducts } = useContext(ProductContext);
  const [subTotal, setSubTotal] = useState(0);

  const [fullName, setFullName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");




  useEffect(() => {
    let Total = 0;
    cartProducts.forEach((i) => {
      Total += i.price;
    });
    setSubTotal(Total);
  }, [cartProducts]);

  const placeOrder = async (e) => {
    e.preventDefault();
    const orderData = {
      customer: {
        fullName,
        country: "Pakistan",
        streetAddress: street,
        city,
        phone,
        email,
      },
      items: cartProducts.map((item) => ({
        productId: item.id,
        title: item.title,
        imgSrc: item.src,
        price: item.price,
        qty: item.qty,
      })),

      subTotal,
      shipping: 200,
      total: subTotal + 200,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/place-order",
        orderData
      );
      const orderId = res.data.orderId;
      alert("Order Placed Successfully! Payment Pending");
      localStorage.removeItem('cart');

      navigate(`/payment/${orderId}`)
    } catch (err) {
      console.log(err);
      alert("Error placing order");
    }
  };

  return (
    <div className="w-full min-h-screen bg-(--bg) text-(--secondary) font-[simple] flex flex-col">
      <Nav />
      <div className="w-full p-10 gap-5 flex flex-2">
        <div className="w-1/2 p-10  bg-w rounded-lg text-black text-lgte  border border-(--(--secondary))">
          <h1 className="text-2xl mb-10 font-semibold">Billing Details</h1>
          <form className="flex gap-2 flex-col" onSubmit={placeOrder}>
            <input required
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full py-2 px-5 border rounded-lg text-lg outline-none border-(--secondary) mb-3"
            />
            <input required
              placeholder="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full py-2 px-5 border rounded-lg text-lg outline-none border-(--secondary)  mb-3"
            />
            <input required
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full py-2 px-5 border rounded-lg text-lg outline-none border-(--secondary)  mb-3"
            />
            <input required
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full py-2 px-5 border rounded-lg text-lg outline-none border-(--secondary)  mb-3"
            />
            <input
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-5 border rounded-lg text-lg outline-none border-(--secondary)  mb-3"
            />





            <button className="w-full p-2 text-lg text-(--elem) font-semibold bg-(--secondary) rounded-full mt-5">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-1/2 p-10 flex flex-col bg-white rounded-lg gap-5 border border-(--secondary)]">
          <h1 className="text-lg mb-10 font-[simple] font-bold">Your Order Summary</h1>
          {cartProducts.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex border h-20 p-2 rounded border-(--secondary) justify-between items-center gap-5"
            >
              <img className="w-[20%] h-full rounded object-cover" src={`http://localhost:3000/uploads/${item.imgSrc}`} alt="" />
              <p>{item.title}</p>
              <p>RS.{item.price}</p>
            </div>
          ))}

          <div className="w-full rounded flex p-2  justify-between border border-(--secondary)">
            <h4>Subtotal</h4>
            <h4 className="text-black">RS.{subTotal}</h4>
          </div>
          <div className="w-full p-2 rounded flex justify-between border  border-(--secondary)">
            <h4>Shipping</h4>
            <h4 className="text-black">RS.200</h4>
          </div>
          <div className="w-full p-2 rounded-md border flex  justify-between">
            <h4>Total</h4>
            <h4 className="text-black">RS.{subTotal + 200}</h4>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
