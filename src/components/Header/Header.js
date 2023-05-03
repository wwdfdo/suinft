import React from "react";
import logo from "../../images/Pepe_Club_Logo.png";

const Header = () => {
  return (
    <div className=" lg:flex hidden h-[10rem] items-center bg-[#3A94C9] justify-between px-[5%] text-3xl font-bold text-white shadow-md  ">
      <div>
        <img src={logo} className="w-[16rem]" alt="" />
      </div>
      <ul className="lg:flex hidden gap-10">
        <li className=" cursor-pointer">
          {" "}
          <a href="/">home</a>
        </li>
        <li className=" cursor-pointer">
          {" "}
          <a href="#about">about</a>
        </li>
        <li className=" cursor-pointer">
          {" "}
          <a href="#collectionomics">collectionomics</a>
        </li>
        <li className=" cursor-pointer">
          {" "}
          <a href="#roadmap">roadmap</a>
        </li>
      </ul>
      <a
        href="https://opensea.io/collection/pepeclubvip/drop"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" border-[1px] border-white px-4 pb-2 pt-1 flex items-center rounded-3xl">
          buy now
        </div>
      </a>
    </div>
  );
};

export default Header;
