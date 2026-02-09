import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import axios from "axios";
import { Link } from "react-router-dom";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState()
  const [fPaymentStatus, setFPaymentStatus] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/order" ,{withCredentials:true});
        setOrders(res.data.ress);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = async (order) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/deleteorder/${order._id} `  ,{withCredentials:true}
      );
      setOrders((prevOrders) =>
        prevOrders.filter((item) => item._id !== order._id)
      );
    } catch (err) {
      console.log(err);
    }

  };
  const confirmOrder = async (order) => {
    axios.post(`http://localhost:3000/api/update-order/${order._id}`, {data:orderStatus}  , {withCredentials:true}


    )


  }

useEffect(() => {
  const fetchPayment = async()=>{
     const res = await axios.get('http://localhost:3000/api/payment'  ,{withCredentials:true});
    const pStatus = res.data.payment
   
    setFPaymentStatus(pStatus)
  }
  fetchPayment()
}, [])






  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Items</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">PaymentStatus</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b">
              <td className="p-3">{order.customerName}</td>

              <td className="p-3">
                {order.items?.length} item(s)
              </td>

              <td className="p-3">Rs. {order.total}</td>

              <td className="p-3">
                <select
                  value={order.orderStatus} onChange={(e) => {
                    setOrderStatus(e.target.value)
                  }}

                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
            <td className="p-3">
  {(() => {
    const payment = fPaymentStatus.find(
      (p) => p.orderId?._id === order._id
    );

    if (!payment) return "Pending";

    return (
      <span
        className={
          payment.paymentStatus === "verified"
            ? "text-green-600 font-semibold"
            : payment.paymentStatus === "rejected"
            ? "text-red-600 font-semibold"
            : "text-yellow-600 font-semibold"
        }
      >
        {payment.paymentStatus}
      </span>
    );
  })()}
</td>

              <td className="p-3">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>

              <td className="p-3 flex gap-2">
                <Link onClick={() => {
                  confirmOrder(order)
                }} className="px-3 py-1 bg-blue-600 text-white rounded">
                  Confirm
                </Link>

                <button
                  onClick={() => deleteOrder(order)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Orders;
