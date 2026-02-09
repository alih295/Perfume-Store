import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ProductContext } from "../Context/Context";

function Card() {
  const { product, cartProducts, setCartProducts } = useContext(ProductContext);

  return (
    <>
      <div className="w-full  bg-(--bg)  font-[simple]  flex flex-wrap justify-start items-start gap-10 p-10 py-14 ">
        {product.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-60
                        h-[350px]
                        flex flex-col justify-between
                        hover:scale-102
                        transition-all duration-300
                        font-[simple]
                        relative
                        shadow-md shadow-black/50
                        overflow-hidden
                        rounded-xl
                        bg-white
                      "
            >
              <img
                className="w-full  h-40 object-cover"
                src={`http://localhost:3000/uploads/${item.imgSrc}`}
                alt=""
              />
              <div className="w-full flex gap-2 flex-col p-5">
                <h3 className="text-lg text-(--secondary) font-[simple] capitalize font-semibold line-clamp-1 leading-5 font-semibold  ">
                  {item.title}
                </h3>
                <h6 className="text-sm line-clamp-2 text-[#212121]">{item.description}</h6>
                <h2 className="text-lg font-bold text-red-700">
                  RS.{item.price}
                </h2>
                <button
                  onClick={() => setCartProducts([...cartProducts, item])}
                  className="w-full rounded-full text-(--elem) transition-all duration-200 hover:bg-(--elem) text-md hover:text-(--secondary) px-5 py-2 cursor-pointer bg-(--secondary)"
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
