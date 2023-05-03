import React from "react";
import borderwhite from "../../images/second border.svg";
import frogpee from "../../images/suidrop1.png";
import froggreen from "../../images/suidrop2.png";
import { BsDot } from "react-icons/bs";

const Roadmap = () => {
  return (
    <div className="py-10">
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div
        className="flex flex-col text-white gap-20 lg:w-3/4 w-11/12 mx-auto pt-10 pb-20"
        id="roadmap"
      >
        <div className="flex justify-between">
          <div className="w-[29%]">
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
          <div className="w-[29%]">
            <img src={froggreen} alt="" />
          </div>
        </div>
        {/* <div className="w-[60%] mx-auto text-2xl text-center">
          All jokes aside, here is a rough sketch of $pepes path ahead. We dont
          wan’t to give everything away on day 1, Expect surprises along the way
          ;)
        </div> */}
        <div className="flex lg:flex-row flex-col gap-8 justify-between">
          <div className="flex flex-col  bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-full py-10 px-5">
            <h3 className="text-center text-4xl font-bold">Grow</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-start">
                <BsDot size={24} />
                <p>50,000+ Holders</p>
              </div>
              <div className="flex items-start ">
                <BsDot size={24} />
                <p>
                  Get #PEPE #PEPECLUB <br /> Trending on twitter <br /> with our
                  memetic power
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-full py-10 px-5">
            <h3 className="text-center text-4xl font-bold"> Blow</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-start">
                <BsDot size={24} />
                <p>Discord Out</p>
              </div>
              <div className="flex items-start">
                <BsDot size={24} />
                <p>Community Partnerships</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-full py-10 px-5">
            <h3 className="text-center text-4xl font-bold">Stand By</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-start">
                <BsDot size={24} />
                <p>Special Editions</p>
              </div>
              <div className="flex items-start">
                <BsDot size={24} />
                <p>Community Interactions </p>{" "}
              </div>
              <div className="flex items-start">
                <BsDot size={24} /> <p>Fun & Games</p>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-green-950 rounded-tr-3xl rounded-bl-3xl border-2 border-white gap-5 w-full py-10 px-5">
            <h3 className="text-center text-4xl font-bold">Moon</h3>
            <div className="flex flex-col lg:gap-5 gap-2 lg:pl-0 pl-10 ">
              <div className="flex items-start">
                <BsDot size={24} />
                <p> Airdrop</p>
              </div>
              <div className="flex items-start">
                <BsDot size={24} />
                <p>Merchandise</p>{" "}
              </div>
              <div className="flex items-start">
                <BsDot size={24} /> <p>Culture</p>{" "}
              </div>
              <div className="flex items-start">
                <BsDot size={24} /> <p>Kek Kingdom</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
