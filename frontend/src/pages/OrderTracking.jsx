import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { IoCopy } from "react-icons/io5";

const OrderTracking = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const copyOrderId = async () => {
    try {
      await navigator.clipboard.writeText(order.publicOrderId);
      alert("Order ID copied successfully!");
    } catch {
      alert("Failed to copy Order ID");
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/order/${orderId}`
        );
        console.log(res)
        setOrder(res.data); // ✅ FIX
      } catch (err) {
        setError("Invalid Order ID or Order not found" ,err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading order details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--bg)">
      <Nav />

      <div className="flex justify-center mt-10">
        <div className="w-[80vw] border bg-(-secondary) border-(-elem) text-white rounded-lg p-8">

          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-semibold">Order Tracking</h1>

            <div className="text-right">
              <span className="block text-lg font-semibold text-red-600">
                Save this ID to track your order
              </span>

              <div
                onClick={copyOrderId}
                className="flex items-center justify-between gap-3 px-4 py-2 mt-3 cursor-pointer border rounded hover:text-(--secondary) hover:bg-(--elem)"
              >
                <span className="font-mono text-sm">
                  Order ID: {order.publicOrderId}
                </span>
                <IoCopy className="text-green-600" size={22} />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mb-6">
            <p className="text-lg">
              Status:{" "}
              <span className="font-semibold text-orange-600 capitalize">
                {order.orderStatus}
              </span>
            </p>
          </div>

          {/* Customer + Payment */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="font-semibold mb-2">Customer Info</h2>
              <p>Name: {order.customerName}</p>
              <p>Phone: {order?.addressId?.phone}</p>
              <p>City: {order?.addressId?.city}</p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Payment Summary</h2>
              <p>Sub Total: PKR {order.subTotal}</p>
              <p>Shipping: PKR {order.shipping}</p>
              <p className="font-semibold">Total: PKR {order.total}</p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h2 className="font-semibold mb-3">Ordered Items</h2>

            <table className="w-full border">
              <thead className="bg-(--elem) text-(--secondary)">
                <tr>
                  <th className="p-2 text-left">Product</th>
                  <th className="p-2 text-left">Qty</th>
                  <th className="p-2 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {order?.items?.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">{item.qty}</td>
                    <td className="p-2">PKR {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-white/80 mt-6">
            Note: Payment verification may take some time. You will be contacted
            once your order is confirmed.
          </p>

        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
