import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ProductContext } from "../Context/Context";

function Card() {
  const { product, cartProducts, setCartProducts } = useContext(ProductContext);

  return (
    <>
      <div className="w-full   flex flex-wrap justify-start items-start gap-10 p-10 ">
        {product.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-60 hover:scale-x-120 transition-all duration-500 font-[simple] min-h-100 relative shadow-xl shadow-black/50 overflow-hidden rounded-lg "
            >
              <img
                className="w-full  h-60 object-cover"
                src={item.src}
                alt=""
              />
              <div className="w-full flex gap-2 flex-col p-5">
                <h3 className="text-lg font-[heading] leading-[20px] font-semibold  ">
                  {item.title}
                </h3>
                <h6 className="text-sm text-gray-600">{item.description}</h6>
                <h2 className="text-lg font-bold text-red-800">
                  RS.{item.price}
                </h2>
                <button
                  onClick={() => setCartProducts([...cartProducts, item])}
                  className="w-full rounded-full transition-all duration-200 hover:bg-black text-md hover:text-white px-5 py-2 cursor-pointer bg-[#ECB651]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
