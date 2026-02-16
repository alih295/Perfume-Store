import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ProductContext } from "../Context/Context";
import { easeInOut, motion } from 'motion/react'

function Card() {
  const { cartProducts, setCartProducts } = useContext(ProductContext);
  const product = [
    {
      id: 1,
      title: "Luxury Oud Perfume",
      description: "Premium long-lasting oud fragrance with rich woody notes.",
      price: 120,
      image: "https://via.placeholder.com/300x300?text=Oud+Perfume"
    },
    {
      id: 2,
      title: "Rose Essence",
      description: "Fresh floral perfume with soft rose and musk blend.",
      price: 85,
      image: "https://via.placeholder.com/300x300?text=Rose+Essence"
    },
    {
      id: 3,
      title: "Midnight Black",
      description: "Bold and intense fragrance perfect for evening wear.",
      price: 150,
      image: "https://via.placeholder.com/300x300?text=Midnight+Black"
    },
    {
      id: 4,
      title: "Ocean Breeze",
      description: "Light and refreshing aquatic scent for daily use.",
      price: 70,
      image: "https://via.placeholder.com/300x300?text=Ocean+Breeze"
    },
    {
      id: 5,
      title: "Golden Amber",
      description: "Warm amber notes with a hint of vanilla sweetness.",
      price: 110,
      image: "https://via.placeholder.com/300x300?text=Golden+Amber"
    },
    {
      id: 6,
      title: "Royal Musk",
      description: "Classic musk fragrance with a modern twist.",
      price: 95,
      image: "https://via.placeholder.com/300x300?text=Royal+Musk"
    },
    {
      id: 7,
      title: "Citrus Fresh",
      description: "Energizing citrus scent with lemon and bergamot.",
      price: 60,
      image: "https://via.placeholder.com/300x300?text=Citrus+Fresh"
    },
    {
      id: 8,
      title: "Velvet Night",
      description: "Smooth blend of vanilla and dark chocolate notes.",
      price: 130,
      image: "https://via.placeholder.com/300x300?text=Velvet+Night"
    },
    {
      id: 9,
      title: "Desert Sand",
      description: "Woody and spicy fragrance inspired by Arabian deserts.",
      price: 105,
      image: "https://via.placeholder.com/300x300?text=Desert+Sand"
    },
    {
      id: 10,
      title: "Silver Bloom",
      description: "Elegant floral scent with jasmine and lily extracts.",
      price: 90,
      image: "https://via.placeholder.com/300x300?text=Silver+Bloom"
    }
  ];




  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .5, ease: easeInOut }}
        className="w-full  bg-gray-200 font-[simple]  flex flex-wrap justify-start items-start gap-10 p-10 py-14 ">
        {product.map((item, idx) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.50)",
              }}
              transition={{ duration: 0.32, ease: easeInOut }}
              key={idx}
              className="w-60
                        h-[350px]
                        flex flex-col justify-between
                        font-[simple]
                        relative
                        overflow-hidden
                        bg-gray-100
                      "
            >
              <img
                className="w-full  h-40 object-cover"
                src={`http://localhost:3000/uploads/${item.imgSrc}`}
                alt=""
              />
              <div className="w-full flex gap-2 flex-col p-5">
                <h3 className="text-lg text-black font-[simple] capitalize  line-clamp-1 leading-5 font-semibold  ">
                  {item.title}
                </h3>
                <h6 className="text-sm line-clamp-2 text-[#212121]">{item.description}</h6>
                <h2 className="text-lg font-bold text-red-700">
                  RS.{item.price}
                </h2>
                <motion.button
                  whileHover={{
                    scale: 1.1, backgroundColor: '#EAB308',
                    color: 'black'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCartProducts([...cartProducts, item])}
                  className="w-full rounded-full text-yellow-500 font-semibold text-md  px-5 py-2 cursor-pointer bg-black/95"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

export default Card;
