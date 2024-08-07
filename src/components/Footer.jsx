import React from "react";
import logo from "../assets/Logo.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import li0 from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import li1 from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import li2 from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import li3 from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import li4 from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import li5 from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className="w-full h-[560px] bg-[#1A1A1A]">
      <div className="pt-[58px] flex justify-center gap-12">
        <div className="flex flex-col gap-10">
          <img src={logo} alt="logo" />
          <div className="flex gap-5">
            <img src={icon1} alt="" />
            <p className="text-white">341 Londonderry Road, Istanbul Türkiye</p>
          </div>
          <div className="flex gap-5">
            <img src={icon2} alt="" />
            <p className="text-white">aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="flex gap-5">
            <img src={icon3} alt="" />
            <p className="text-white">+90 555 555 55 55</p>
          </div>
        </div>
        <div className="text-white flex flex-col justify-end">
          <h1 className="font-bold text-xl mb-10">Hot Menu</h1>
          <div className="flex flex-col gap-5">
            <p>Terminal Pizza</p>
            <p>5 Kisilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="text-white flex flex-col justify-end">
          <h1>Instagram</h1>
          <div className="grid grid-cols-3 gap-4 p-4">
            <img src={li0} alt="" />
            <img src={li1} alt="" />
            <img src={li2} alt="" />
            <img src={li3} alt="" />
            <img src={li4} alt="" />
            <img src={li5} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-evenly pt-10 pb-5 w-full ">
        <p className="text-white">© 2023 Teknolojik Yemekler. </p>
        <div className="flex gap-5">
        <TwitterIcon sx={{ color: "#FFFFFF" }} />
        <FacebookIcon sx={{ color: "#FFFFFF" }} />
        <XIcon sx={{ color: "#FFFFFF" }} />
        <YouTubeIcon sx={{ color: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
