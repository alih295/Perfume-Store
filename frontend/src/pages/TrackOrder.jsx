import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();

  // Auto-fill orderId from URL or localStorage
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idFromUrl = params.get("orderId");
    const lastOrder = localStorage.getItem("lastOrderId");

    if (idFromUrl) setOrderId(idFromUrl);
    else if (lastOrder) setOrderId(lastOrder);
  }, [location]);

  const trackOrder = async () => {
    if (!orderId) {
      setError("Please enter your Order ID");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setOrder(null);
console.log(order)
      const res = await axios.get(
        `http://localhost:3000/api/track-order/${orderId}`
      );

      setOrder(res.data.order);
    } catch (err) {
      setError("Order not found. Please check your Order ID." , err );
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-(--bg) shadow-lg rounded-xl p-6">

          {/* Heading */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Track Your Order
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Enter your Order ID to check current status
          </p>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. ORD-483920"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={trackOrder}
              className="bg-[#212121] text-[#F2CC0F] px-6 rounded-lg hover:bg-gray-800"
            >
              Track
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 mt-3 text-sm">{error}</p>
          )}

          {/* Loading */}
          {loading && (
            <p className="text-center mt-4">Checking order status...</p>
          )}

          {/* Order Details */}
          {order && (
            <div className="mt-6 border-t  pt-4 space-y-3">

              <p>
                <strong>Order ID:</strong>{" "}
                <span className="text-gray-700">{order._id}</span>
              </p>

              <p>
                <strong>Order Status:</strong>{" "}
                <span className="capitalize text-blue-600">
                  {order.orderStatus}
                </span>
              </p>

              <p>
                <strong>Payment Status:</strong>{" "}
                <span
                  className={`capitalize ${
                    order.paymentStatus === "verified"
                      ? "text-green-600"
                      : order.paymentStatus === "rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </p>

              <p>
                <strong>Total Amount:</strong> Rs. {order.total}
              </p>

              <p>
                <strong>Order Date:</strong>{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Items</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {order.items?.map((item, index) => (
                    <li key={index}>
                      {item.title} × {item.qty}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>
      </div>
    
  );
};

export default TrackOrder;
