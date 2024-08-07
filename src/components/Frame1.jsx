import React from "react";
import icon1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import icon2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import icon3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import icon4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import icon5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import icon6 from "../../Assets/Iteration-2-aseets/icons/6.svg";
import food1 from "../../Assets/Iteration-2-aseets/pictures/food-1.png";
import food2 from "../../Assets/Iteration-2-aseets/pictures/food-2.png";
import food3 from "../../Assets/Iteration-2-aseets/pictures/food-3.png";
function Frame1() {
  return (
    <>
      <div className="w-full  bg-[#FAF7F2]">
        <div className="flex justify-center gap-3 py-16">
          <div className="bg-slate-500 w-[530px] left-div h-[450px] rounded-3xl">
            <h1 className="text-5xl font-bold text-white mt-8 ml-8 ">
              Özel <br /> Lezzetus
            </h1>
            <p className="text-xl text-white mt-2  ml-8 ">
              Position : Absolute Acı Pizza
            </p>
            <button
              className="w-[150px] h-14 bg-white mt-6 ml-8 rounded-3xl text-[#CE2829] font-bold"
              onClick={() => history.push("/pizzaOrder")}
            >
              Siparis Ver
            </button>
          </div>
          <div className=" w-[530px] flex flex-col gap-2">
            <div className="h-1/2 right-div-one rounded-3xl">
              <h1 className="text-[32px] font-bold text-white mt-8 ml-8 ">
                Hackathlon <br /> Burger Menü
              </h1>
              <button className="w-[150px] h-14 bg-white mt-4 ml-8 rounded-3xl text-[#CE2829] font-bold">
                Siparis Ver
              </button>
            </div>
            <div className="h-1/2 right-div-two rounded-3xl">
              <h1 className="text-[32px] font-bold text-black mt-8 ml-8 ">
                {" "}
                <strong className="text-[#D80027]">
                  Çoooook hızlı
                </strong> <br /> npm gibi kurye{" "}
              </h1>
              <button className="w-[150px] h-14 bg-white mt-4 ml-8 rounded-3xl text-[#CE2829] font-bold">
                Siparis Ver
              </button>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <h1 className="text-5xl font-bold text-black">
            Acıktıran Kodlara Doyuran Lezzetler
          </h1>

          <div className="flex gap-12 justify-center py-7">
            <div className="flex gap-3 items-center bg-white rounded-3xl p-3">
              <img src={icon1} alt="" />
              <h2 className=""> Ramen</h2>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-3xl p-3">
              <img src={icon2} alt="" />
              <p>Pizza</p>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-3xl p-3">
              {" "}
              <img src={icon3} alt="" />
              <p>Burger</p>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-3xl p-3">
              {" "}
              <img src={icon4} alt="" />
              <p>French fries</p>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-3xl p-3">
              {" "}
              <img src={icon5} alt="" />
              <p>Fast food</p>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-3xl p-3">
              {" "}
              <img src={icon6} alt="" />
              <p>Soft drinks</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[1068px] h-full flex justify-evenly pb-16">
              <div className="bg-white ">
                <img src={food1} alt="" className="bg-white " />
                <p className="text-xl font-bold">Terminal Pizza</p>
                <div className="flex justify-evenly mt-2 ">
                  <p className="text-xl">50TL</p>
                  <div className="flex gap-3">
                    <p>4.9 </p>
                    <p>(200)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <img src={food2} alt="" className="bg-white" />
                <p className="text-xl font-bold">Position Absolute Acı Pizza</p>
                <div className="flex justify-evenly mt-2">
                  <p className="text-xl">50TL</p>
                  <div className="flex gap-3">
                    <p>4.9 </p>
                    <p>(200)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <img src={food3} alt="" className="bg-white" />
                <p className="text-xl font-bold">useEffect Tavuklu Burger</p>
                <div className="flex justify-evenly mt-2">
                  <p className="text-xl">50TL</p>
                  <div className="flex gap-3">
                    <p>4.9 </p>
                    <p>(200)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frame1;
