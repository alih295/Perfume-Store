import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Account() {
  return (
    <div className="w-full flex flex-col justify-between bg-gray-200">
      <Nav />
      <div className="w-full p-10 overflow-x-auto">
        <h1 className="text-lg text-black font-semibold capitalize p-10">
          my orders
        </h1>
        <table className="w-full border border-collapse text-left ">
         <thead>
          <tr>
            <th className="p-3 border">Order ID</th>
        <th className="p-3 border">Customer</th>
        <th className="p-3 border">Products</th>
        <th className="p-3 border">Total Amount</th>
        <th className="p-3 border">Status</th>
        <th className="p-3 border">Payment</th>
          </tr>
         </thead>
         <tbody>
          <tr className="hover:bg-gray-50">
            <td className="p-3 border">#12345</td>
        <td className="p-3 border">Ali Khan</td>
        <td className="p-3 border">iPhone 15, Case</td>
        <td className="p-3 border">Rs. 250,000</td>
        <td className="p-3 border">
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pending</span>
        </td>
        <td className="p-3 border text-green-600 font-medium">Paid</td>
          </tr>
         </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default Account;
