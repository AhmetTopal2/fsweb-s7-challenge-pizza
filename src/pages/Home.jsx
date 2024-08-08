import React from "react";
import HomeBanner from "../components/HomeBanner";
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import Frame1 from "../components/Frame1";
function Home({setSelectedProduct}) {
  
  return (
    <>
      <HomeBanner setSelectedProduct={setSelectedProduct} />
      <Icons />
      <Frame1 setSelectedProduct={setSelectedProduct}/>
      <Footer />
    </>
  );
}

export default Home;
