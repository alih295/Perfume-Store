import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

      <ul className="flex flex-col gap-3">
        <Link to="/dashboard">
          <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
        </Link>
        <Link to="/products">
          <li className="hover:bg-gray-700 p-2 rounded">Products</li>
        </Link>
        <Link to="/add-product">
          <li className="hover:bg-gray-700 p-2 rounded">Add Product</li>
        </Link>
        <Link to="/orders">
          <li className="hover:bg-gray-700 p-2 rounded">Orders</li>
        </Link>
        <Link to="/settings">
          <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
        </Link>
        <Link to="/payment">
          <li className="hover:bg-gray-700 p-2 rounded">Payments</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
