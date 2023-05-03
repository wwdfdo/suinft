import React from "react";
import borderwhite from "../../images/second border.svg";
import frogpee from "../../images/suidrop1.png";
import froggreen from "../../images/suidrop3.png";
import { BsDot } from "react-icons/bs";

const Roadmap = () => {
  return (
    <div className="py-10">
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div
        className="flex flex-col text-white gap-20 lg:w-4/5 w-11/12 mx-auto pt-10 pb-20"
        id="roadmap"
      >
        <div className="flex justify-between">
          <div className="w-[25%]">
            <img src={frogpee} alt="" />
          </div>
          <div className="flex flex-col items-center justify-around gap-10">
            <h3 className="text-white lg:text-7xl text-4xl  font-bold text-center">
              Road Map
            </h3>
            {/* <div className="flex flex-col gap-5 bg-green-950 text-2xl justify-center text-center py-5 px-10 border-2 border-white rounded-tr-3xl rounded-bl-3xl">
              <p>Phase 1: Meme</p>
              <p>Phase 2: Vibe and HODL</p>
              <p>Phase 3: Generational wealth</p>
            </div> */}
          </div>
          <div className="w-[25%]">
            <img src={froggreen} alt="" />
          </div>
        </div>
        {/* <div className="w-[60%] mx-auto text-2xl text-center">
          All jokes aside, here is a rough sketch of $pepes path ahead. We dont
          wan’t to give everything away on day 1, Expect surprises along the way
          ;)
        </div> */}
        <div className="flex lg:flex-row flex-col gap-5 justify-center flex-wrap ">
          <div className="flex flex-col  bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold">NFT Launch</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-center">
                <p className="text-center">
                  Launch of the Sui 水 NFT collection on Arbitrum Network, on
                  Opensea.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold">
              Twitter Community
            </h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex justify-center">
                <p className="text-center">2,000+ Twitter Followers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold"> Communications</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-center">
                <p className="text-center">
                  Website Open Discord Open Telegram Open
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold">SUI Network</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-center">
                <p className="text-center">
                  Launch of the Sui 水 NFT collection on the SUI Main network.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold">Sui 水 Community</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-center">
                <p className="text-center">
                  {" "}
                  10,000+ Twitter Followers 1,000+ Telegram Users 1,000+ Discord
                  Users
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold">Sui NFT Arbitrum</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-start">
                <p className="text-center">
                  {" "}
                  Sui水 token Airdrop for Sui NFT Collection on Arbitrum
                  Network.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-8 py-10 px-5 lg:w-[23%] w-full">
            <h3 className="text-center text-2xl font-bold">
              Sui NFT Collection
            </h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-start">
                <p className="text-center">
                  {" "}
                  Sui水 token Airdrop for Sui NFT Collection on Sui Network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
