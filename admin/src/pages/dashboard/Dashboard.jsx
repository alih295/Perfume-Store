import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import Chart from "../../components/Chart";
import axios from 'axios'
const Dashboard = () => {
const [totalProduct, setTotalProduct] = useState([])
const [totalOrders, setTotalOrders] = useState([])
useEffect(() => {
 const fetchProduct = async ()=>{
  const res =  await axios.get('http://localhost:3000/api/product' , {withCredentials:true})
  setTotalProduct(res.data)
 } 
fetchProduct()
  
}, [])

useEffect(() => {
  const fetchOrders = async()=>{
    const res = await axios.get('http://localhost:3000/api/order' ,{withCredentials:true})
    setTotalOrders(res.data.ress)
  }
fetchOrders()
  
}, [])




  return (
    <AdminLayout>
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">Total Products: {totalProduct.length}</div>
        <div className="p-6 bg-white shadow rounded-lg">Total Orders: {totalOrders.length} </div>
        <div className="p-6 bg-white shadow rounded-lg">Total Sales</div>
      </div>
      <Chart/>
    </AdminLayout>
  );
};

export default Dashboard;
