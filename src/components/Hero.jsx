import React from "react";
import formBanner from "../../Assets/Iteration-2-aseets/pictures/form-banner.png";
function Hero({selectedProduct}) {
  const {name,price , rating , reviews}=selectedProduct
  return (
    <div>
      <div>
        <img src={formBanner} alt="" />
        <div className="flex mt-6">
          <p>Ana Sayfa </p> <span>-</span>
          <span className="text-[#CE2829]">Sipariş Olustur</span>
        </div>
      </div>
      <div>
        <div className="mt-5 w-full h-14 flex items-center">
          <h1 className="text-3xl font-bold">{name}</h1>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[28px]">{price}TL</p>
          <div className="h-7 flex gap-14">
            <p className="text-[16px] font-normal">{rating}</p>
            <p className="text-[16px] font-normal">{reviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
