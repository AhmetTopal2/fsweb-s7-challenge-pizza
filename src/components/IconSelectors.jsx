import React from "react";

function IconSelectors({ handleIconClick, selectedIcon, icons }) {
  return (
    <div className="flex gap-12 justify-center py-7">
      {icons.map((icon) => (
        <div
          key={icon.id}
          onClick={() => handleIconClick(icon.label)}
          className={`flex gap-3 items-center rounded-3xl p-3 cursor-pointer ${
            selectedIcon === icon.label ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <img src={icon.src} alt={icon.label} />
          <p>{icon.label}</p>
        </div>
      ))}
    </div>
  );
}

export default IconSelectors;
