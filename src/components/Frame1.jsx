import React, { useState } from "react";
import icon1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import icon2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import icon3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import icon4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import icon5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import icon6 from "../../Assets/Iteration-2-aseets/icons/6.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import IconSelectors from "./IconSelectors";
import Products from "./Products";

function Frame1({ setSelectedProduct }) {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState("Ramen");
  const [selectedIcon, setSelectedIcon] = useState("Ramen");
  const speacialPizza = {
    name: "Size Özel Pizza",
    price: "50",
  };
  const handleIconClick = (category) => {
    setSelectedCategory(category);
    setSelectedIcon(category);
  };

  const handleClick = () => {
    setSelectedProduct(speacialPizza);
    history.push("/pizzaOrder")
  };

  const icons = [
    { id: 1, src: icon1, label: "Ramen" },
    { id: 2, src: icon2, label: "Pizza" },
    { id: 3, src: icon3, label: "Burger" },
    { id: 4, src: icon4, label: "French fries" },
    { id: 5, src: icon5, label: "Fast food" },
    { id: 6, src: icon6, label: "Soft drinks" },
  ];

  return (
    <div className="w-full bg-[#FAF7F2]">
      <div className="flex justify-center gap-3 py-16">
        <div className="bg-slate-500 w-[530px] left-div h-[450px] rounded-3xl">
          <h1 className="text-5xl font-bold text-white mt-8 ml-8 ">
            Özel <br /> Lezzetus
          </h1>
          <p className="text-xl text-white mt-2 ml-8">
            Position : Absolute Acı Pizza
          </p>
          <button
            className="w-[150px] h-14 bg-white mt-6 ml-8 rounded-3xl text-[#CE2829] font-bold"
            onClick={handleClick }
          >
            Siparis Ver
          </button>
        </div>
        <div className="w-[530px] flex flex-col gap-2">
          <div className="h-1/2 right-div-one rounded-3xl">
            <h1 className="text-[32px] font-bold text-white mt-8 ml-8 ">
              Hackathlon <br /> Burger Menü
            </h1>
            <button className="w-[150px] h-14 bg-white mt-4 ml-8 rounded-3xl text-[#CE2829] font-bold" onClick={handleClick}>
              Siparis Ver
            </button>
          </div>
          <div className="h-1/2 right-div-two rounded-3xl">
            <h1 className="text-[32px] font-bold text-black mt-8 ml-8">
              {" "}
              <strong className="text-[#D80027]">
                Çoooook hızlı
              </strong> <br /> npm gibi kurye{" "}
            </h1>
            <button className="w-[150px] h-14 bg-white mt-4 ml-8 rounded-3xl text-[#CE2829] font-bold" onClick={handleClick}>
              Siparis Ver
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black">
          Acıktıran Kodlara Doyuran Lezzetler
        </h1>
        <IconSelectors
          selectedIcon={selectedIcon}
          handleIconClick={handleIconClick}
          icons={icons}
        />
        <Products
          selectedCategory={selectedCategory}
          setSelectedProduct={setSelectedProduct}
        />
        <p className="text-red-500 pb-7 font-bold text-2xl">
          {selectedCategory !== "Pizza"
            ? "Seçtiğiniz Kategori Yoğunluk Sebebiyle Mevcut Değildir."
            : null}
        </p>
      </div>
    </div>
  );
}

export default Frame1;
