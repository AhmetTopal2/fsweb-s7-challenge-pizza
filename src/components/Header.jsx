import React from "react";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
function Header() {
  return (
    <>
      <header
        className="w-full h-36 bg-[#CE2829] flex justify-center"
      >
        <div>
          {" "}
          <img src={logo} alt="logo" className="mt-[55px]" />
        </div>
      </header>
    </>
  );
}

export default Header;
