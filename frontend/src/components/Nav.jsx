import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbShoppingCartCog } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/Context";

function Nav() {
  const [cartItems, setCartItems] = useState(null);
  const { cartProducts , product } = useContext(ProductContext);
  const [searchedItem, setSearchedItem] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setCartItems(cartProducts.length);
  }, [cartProducts]);


const searchItems=(value)=>{
  setSearchedItem(value);

  const filtered = product.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  setSearchResult(filtered);
 
}


  return (
    <div className="w-full text-white h-20 flex justify-between items-center bg-black px-5 py-2 ">
      <Link
        to={"/"}
        className="flex items-center text-lg text-[#D4AA5E] justify-center font-[heading]"
      >
        <img
          className="w-15 rounded-full"
          src="../public/images/logo.png"
          alt=""
        />
        <h1>MB FRAGRENCE</h1>
      </Link>
      <div className="w-80 relative bg-white flex justify-between pr-2 items-center   rounded-full h-10">
        <input  value={searchedItem} onChange={(e)=>{
           searchItems(e.target.value)
        }}    
          placeholder="search"
          className="w-[80%] text-black px-5 h-full outline-none text-lg  "
          type="text "
        />
        <span className="text-xl cursor-pointer text-black font-bold ">
          <FaSearch />
        </span>
        <div className={`w-full h-100 ${searchedItem ?'block' :'hidden'} p-5  absolute top-15 rounded-lg backdrop-blur-lg  text-xl font-[simple]` }> {searchResult.map((item , idx)=>{
            return (<Link to={`/searchresult/${item.id}`} key={idx} className="cursor-pointer block mb-4 border-b"> {item.title} </Link>)
        })} </div>
      </div>

      <div className="flex gap-8">
        <span className="text-2xl cursor-pointer flex justify-center items-center gap-2  font-bold">
          <CgProfile /> <p className="font-light text-lg">Account</p>
        </span>
        <Link
          to={"/cart"}
          className="text-2xl relative cursor-pointer  flex justify-center items-center gap-2 font-bold"
        >
          <span className={`w-5 absolute ${cartItems > 0 ? 'block' : 'hidden'} h-5 rounded-full -top-2 left-0 text-white text-sm flex items-center justify-center bg-red-600`}>
            {cartItems}
          </span>
          <TbShoppingCartCog />
          <p className="font-light text-lg">Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
