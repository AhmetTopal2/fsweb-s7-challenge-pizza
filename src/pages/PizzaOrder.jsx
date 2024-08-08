import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";

function PizzaOrder({selectedProduct , setOrder}) {
  return (
    <>
      <Header />
      <div className="bg-[#FAF7F2] flex justify-center">
        <Hero selectedProduct={selectedProduct}/>
      </div>
      <OrderForm selectedProduct={selectedProduct} setOrder={setOrder} />
      <Footer />
    </>
  );
}

export default PizzaOrder;
