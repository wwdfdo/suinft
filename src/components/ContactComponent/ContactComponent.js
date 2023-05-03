import React from "react";

import { RxDiscordLogo } from "react-icons/rx";
import { TfiTwitter } from "react-icons/tfi";
import { SiTelegram } from "react-icons/si";
import img from "../../images/Logo.png";
import borderwhite from "../../images/second border.svg";
import opensea from "../../images/opensea.svg";
import medium from "../../images/mediumwhite.svg";
import nftLink from "../../images/nftcalendar-svg-white.svg";

const ContactComponent = () => {
  return (
    <div>
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div className="flex flex-col justify-center items-center gap-10  lg:w-2/3 w-5/6 mx-auto text-white py-20">
        <h2 className="lg:text-7xl text-6xl font-bold pb-10 ">CONTACT</h2>
        <img src={img} alt="" />
        <p className="lg:text-2xl text-xl">email: team@pepeclub.vip</p>
        <div className="flex gap-5">
          <a
            href="https://twitter.com/SuiNFTofficial/status/1653722958152749056"
            target="_blank"
            rel="noreferrer"
          >
            <TfiTwitter className="text-white lg:text-[56px] text-[30px]" />
          </a>
          <a
            href="https://t.me/suinftofficial"
            target="_blank"
            rel="noreferrer"
          >
            <SiTelegram className="text-white lg:text-[56px] text-[30px]" />
          </a>
          <a href="/">
            {" "}
            <RxDiscordLogo className="text-white lg:text-[56px] text-[30px]" />
          </a>
          <a href="/">
            <img src={opensea} className=" lg:w-[56px] w-[30px]" alt="" />
          </a>
          <a href="/">
            <img src={medium} className=" lg:w-[56px] w-[30px]" alt="" />
          </a>
          <a href="/">
            <img src={nftLink} className=" lg:w-[56px] w-[30px] pt-2" alt="" />
          </a>
        </div>
        <p className="flex lg:text-2xl text-base text-center">
          #PEPE #PEPECLUB Pepe Club has no association with Matt Furie or his
          creation Pepe the Frog. This token is simply paying homage to a meme
          we all love and recognize.
        </p>
        <p className="flex lg:text-2xl text-base text-center">
          #PEPE #PEPECLUB Pepe Club is a meme NFT with no intrinsic value or
          expectation of financial return, the NFT was released to celebrate the
          Pepe Meme and support the community around it and encourage the NFT
          space with creativity and collaboration, Pepe Club NFT collection is
          solely for entertainment purposes only.
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
