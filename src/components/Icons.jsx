import React from "react";
import icon1 from "../../Assets/Iteration-2-aseets/icons/1.svg";
import icon2 from "../../Assets/Iteration-2-aseets/icons/2.svg";
import icon3 from "../../Assets/Iteration-2-aseets/icons/3.svg";
import icon4 from "../../Assets/Iteration-2-aseets/icons/4.svg";
import icon5 from "../../Assets/Iteration-2-aseets/icons/5.svg";
import icon6 from "../../Assets/Iteration-2-aseets/icons/6.svg";

function Icons() {
  const icons = [
    { id: 1, src: icon1, label: "Kore" },
    { id: 2, src: icon2, label: "Pizza" },
    { id: 3, src: icon3, label: "Burger" },
    { id: 4, src: icon4, label: "Kızartmalar" },
    
  ];

  return (
    <div className="flex gap-16 justify-center py-7">
      {icons.map((icon) => (
        <div key={icon.id} className="flex gap-3 items-center">
          <img src={icon.src} alt={icon.label} />
          <p>{icon.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Icons;
