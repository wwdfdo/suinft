import React from "react";

import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

import Logo from "../../images/Pepe_Club_Logo_cropped.png";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className="text-[40px] absolute right-[3%] top-4 text-white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgClose
      className="text-[40px] absolute right-[3%] top-4 text-[#4f9843]"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="flex  justify-between w-full lg:hidden shadow-md ">
      <img src={Logo} className="w-[120px] m-2" alt="" />
      <div
        className={`lg:hidden gap-10 lg:h-screen justify-center  items-center text-[1.4rem] tracking-[0.5rem] font-semibold flex  flex-col ${
          open
            ? "bg-[#000000] p-5 fixed z-[1000] w-full h-screen  bg-opacity-95"
            : ""
        }`}
      >
        {open ? closeIcon : hamburgerIcon}
        {open && (
          <div className="flex flex-col gap-10 text-[#4f9843] items-center text-3xl font-bold">
            <a href="/" onClick={() => closeMobileMenu()}>
              home
            </a>
            <a href="#about" onClick={() => closeMobileMenu()}>
              about
            </a>
            <a href="#collectionomics" onClick={() => closeMobileMenu()}>
              collectionomics
            </a>
            <a href="#roadmap" onClick={() => closeMobileMenu()}>
              roadmap
            </a>
            <a
              href="https://opensea.io/collection/pepeclubvip/drop"
              target="_blank"
              rel="noreferrer"
              onClick={() => closeMobileMenu()}
              className="border-2 border-white pb-3 pt-1 px-5 rounded-full"
            >
              buy now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
