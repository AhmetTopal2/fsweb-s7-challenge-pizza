import React from "react";
import icon1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import icon2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import icon3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import icon4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import icon5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import icon6 from "../../Assets/Iteration-2-aseets/icons/6.svg";
function Icons() {
  return (
    <div className="flex gap-16 justify-center py-7">
      <div className="flex gap-3 items-center">
        <img src={icon1} alt="" />
        <h2 className=""> Kore</h2>
      </div>
      <div className="flex gap-3 items-center">
        <img src={icon2} alt="" />
        <p>Pizza</p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={icon3} alt="" />
        <p>Burger</p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={icon4} alt="" />
        <p>Kızartmalar</p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={icon5} alt="" />
        <p>Fast food</p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={icon6} alt="" />
        <p>Gazlı İçecek</p>
      </div>
    </div>
  );
}

export default Icons;
