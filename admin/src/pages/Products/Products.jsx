import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/product", { withCredentials: true });
        setProduct(res.data); // ✅ actual product data
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [product]);

  const dleteItem = async (item) => {
    await axios.delete("http://localhost:3000/api/delete", {
      data: {
        id: item._id
      } , 
      withCredentials:true
    })
  }



  const updateItem = async (itemId) => {
    navigate(`/update-item/${itemId}`)

  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">img</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => {
            return (
              <tr key={item._id} className="border-b">
                <td className="p-3">
                  <img
                    className="w-10 h-10 object-center"
                    src={`http://localhost:3000/uploads/${item.imgSrc}`}
                    alt=""
                  />
                </td>
                <td className="p-3">{item.title}</td>
                <td className="p-3">RS.{item.price}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => {
                      updateItem(item._id);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dleteItem(item);
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Products;
