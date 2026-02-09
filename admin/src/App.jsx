import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/Orders/Orders";
import EditProduct from "./pages/EditProduct/EditProduct";
import Payments from "./pages/Payments/Payments";
import Login from "./pages/Login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/update-item/:id" element={<EditProduct/>} />
        <Route path="/payment" element={<Payments/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
