import React, { useContext } from 'react'
import { GiCrossedBones } from "react-icons/gi";
import { ProductContext } from '../Context/Context';


function CartSummary({ item }) {
   const {cartProducts , setCartProducts } = useContext(ProductContext)


 const removeItems = (id)=>{
   const remainingItems =  cartProducts.filter((item)=>{
      return item._id !== id
   })
  setCartProducts(remainingItems);
  localStorage.setItem('cart' ,  JSON.stringify(remainingItems))
  }



 return (
   <div className='w-full relative    flex h-60 items-center   justify-evenly  p-5  rounded-xl shadow shadow-black/50'>
         <div onClick={()=> {removeItems(item._id)}}  className='text-lg absolute right-5 cursor-pointer top-10'>
            <GiCrossedBones />
         </div>
         <img className=' w-60 object-cover rounded-lg h-full ' src={`http://localhost:3000/uploads/${item.imgSrc}`} alt="" />
         <div className='w-[60%] gap-2 flex flex-col'>
            <h1 className='text-2xl font-semibold'>{item.title}</h1>
            <p className='text-md text-gray-800'>{item.description}</p>
            <h1 className='text-xl font-bold text-red-700'>RS.{item.price}</h1>
         </div>
      </div>
 )

  
}

export default CartSummary
