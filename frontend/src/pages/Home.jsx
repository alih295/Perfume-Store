import React from "react";
import Nav from "../components/Nav";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  return (
    <div className="w-full  font-[simple] relative">
      <Nav />
      <Herosection />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
