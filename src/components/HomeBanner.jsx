import React from "react";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "./Button";

function HomeBanner() {
  const history = useHistory();
  return (
    <div className="w-full h-svh home">
      <div className="w-full flex justify-center pt-14">
        <img src={logo} alt="" />
      </div>
      <div className="mt-12 flex items-center justify-center">
        <h1 className="text-[86px] font-bold text-center text-white">
          KOD ACIKTIRIR <br /> Pizza, DOYURUR
        </h1>
      </div>
      <div className="flex justify-center">
        <button
          className="w-[195px] h-14 bg-[#FDC913] mt-4 rounded-3xl"
          onClick={() => history.push("/pizzaOrder")}
        >
          Aciktim
        </button>
      </div>
    </div>
  );
}

export default HomeBanner;
