import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";

function PizzaOrder() {
  return (
    <>
      <Header />
      <div className="bg-[#FAF7F2] flex justify-center">
        <Hero />
      </div>
      <OrderForm />
      <Footer />
    </>
  );
}

export default PizzaOrder;
