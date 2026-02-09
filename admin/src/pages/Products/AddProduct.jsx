import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
      const formData = new FormData(); 
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await axios.post(
        "http://localhost:3000/api/addproduct"  ,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials:true
        }
      );

     
      alert("Product Added!");
      navigate('/products')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

      <form
        onSubmit={(e)=> submitHandler(e)}
        className="bg-white p-6 rounded-lg shadow grid gap-4 max-w-xl">
        <input value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }}  
         className="p-2 border-b shadow-md outline-none  px-5 shadow-black/50 rounded-lg  " type="text" placeholder="Product Name" />
        <input 
       value={price} onChange={(e)=>{
            setPrice(e.target.value)
        }}  
        className="p-2  border-b shadow-md outline-none px-5 shadow-black/50 rounded-lg " type="number" placeholder="Price" />
        <textarea
         value={description} onChange={(e)=>{
            setDescription(e.target.value)
        }}  
        className="p-2 border-b shadow-md outline-none px-5  shadow-black/50 rounded-lg  " placeholder="Description" />

        <div className="w-full relative outline-none px-5 h-20 flex items-center justify-center cursor-pointer bg-transparent rounded-lg border border-dashed"> Drag & drop or Click To Upload Your File <input  
        onChange={(e)=>{
          setImage(e.target.files[0])
        }}
        className="absolute w-full h-full opacity-0 " type="file" /> </div>

        <button className="p-2 bg-green-600 text-white rounded-full">
          Add Product
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddProduct;
