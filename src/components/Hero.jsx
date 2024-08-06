import React from "react";
import formBanner from "../../Assets/Iteration-2-aseets/pictures/form-banner.png";
function Hero() {
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
          <h1 className="text-3xl font-bold">Position Absolute Acı Pizza</h1>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[28px]">Price</p>
          <div className="h-7 flex gap-14">
            <p className="text-[16px] font-normal">4.9</p>
            <p className="text-[16px] font-normal">(200)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
