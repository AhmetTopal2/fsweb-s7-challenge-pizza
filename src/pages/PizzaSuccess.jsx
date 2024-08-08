import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderSuc from "../components/OrderSuc";

function PizzaSuccess({order}) {
  return (
    <>
      <div className="h-svh">
        <Header />
        <OrderSuc order={order} />
      </div>
      <Footer />
    </>
  );
}

export default PizzaSuccess;
