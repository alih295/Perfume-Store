import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ProductContext } from '../Context/Context'
import { useParams } from 'react-router-dom'

function SearchedItems() {
   const { product, setCartProducts, cartProducts } = useContext(ProductContext)
   const { id } = useParams()
   const [result, setResult] = useState([])

   useEffect(() => {
      const remainingitem = product.filter(
         (item) => item.id === Number(id)
      )
      setResult(remainingitem)

   }, [id, product])

   return (
      <div className='w-full font-[simple] min-h-screen flex flex-col relative'>
         <Nav />

         {result.length > 0 ? (
            result.map((item, idx) => (
               <div key={idx} className='w-full flex-1  items-start p-10 flex '>
                  <img className='w-100 shadow-lg shadow-black/50 h-100 object-cover rounded-lg mr-10 ' src={item.src} alt="" />
                  <div className='p-5 flex justify-center h-100 flex-col gap-2 '>
                     <h1 className='text-xl font-bold'>{item.title}</h1>
                     <p className='text-md text-gray-800'>{item.description}</p>
                     <h4 className='text-lg font-bold text-red-700' >RS.{item.price}</h4>
                     <button onClick={() => setCartProducts([...cartProducts,item])} className='w-50 cursor-pointer rounded-full shadow-md shadow-black/50  py-2 bg-[#D4AA5E]'>Add to Cart</button>

                  </div>
               </div>

            ))
         ) : (
            <div className="p-10 text-xl text-center">No product found</div>
         )}

         <Footer />
      </div>
   )
}

export default SearchedItems
