import React, { createContext, useState } from "react";

export const ProductContext = createContext();

function Context({ children }) {
  const product = [
  {
    id: 1,
    title: "Royal Oud",
    description: "A rich, woody scent crafted for true luxury lovers.",
    src: "/scentsImg/1.jpeg",
    price: 3500,
    qty: 1,
  },
  {
    id: 2,
    title: "Velvet Musk",
    description: "Soft, smooth musk blended with warm amber notes.",
    src: "/scentsImg/2.jpeg",
    price: 2800,
    qty: 1,
  },
  {
    id: 3,
    title: "Imperial Leather",
    description: "A bold leather fragrance with strong masculine energy.",
    src: "/scentsImg/3.jpeg",
    price: 3000,
    qty: 1,
  },
  {
    id: 4,
    title: "Golden Aura",
    description: "A sparkling, fresh perfume with hints of citrus and vanilla.",
    src: "/scentsImg/4.jpeg",
    price: 2600,
    qty: 1,
  },
  {
    id: 5,
    title: "Midnight Shadow",
    description: "Dark, mysterious notes perfect for night-time wear.",
    src: "/scentsImg/2.jpeg",
    price: 3200,
    qty: 1,
  },
  {
    id: 6,
    title: "Saffron Smoke",
    description: "A warm blend of saffron, incense, and exotic spices.",
    src: "/scentsImg/4.jpeg",
    price: 4000,
    qty: 1,
  },
  {
    id: 7,
    title: "Pure Blossom",
    description: "Light floral notes that feel refreshing and elegant.",
    src: "/scentsImg/1.jpeg",
    price: 2500,
    qty: 1,
  },
  {
    id: 8,
    title: "Amber Flame",
    description: "Deep amber fragrance with long-lasting richness.",
    src: "/scentsImg/3.jpeg",
    price: 3300,
    qty: 1,
  },
  {
    id: 9,
    title: "Ocean Mist",
    description: "A clean, aquatic scent inspired by sea breeze freshness.",
    src: "/scentsImg/2.jpeg",
    price: 2700,
    qty: 1,
  },
  {
    id: 10,
    title: "Dark Vanilla",
    description: "A sweet, smoky vanilla blend with premium warmth.",
    src: "/scentsImg/4.jpeg",
    price: 3100,
    qty: 1,
  }
]

  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
      <ProductContext.Provider
        value={{ product, cartProducts, setCartProducts }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}

export default Context;
