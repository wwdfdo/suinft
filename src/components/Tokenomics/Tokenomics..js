import React from "react";
import borderwhite from "../../images/second border.svg";
// import tokemfrog from "../../images/tokenomicfrog.webp";
import cow from "../../images/21.png";
import { BsDot } from "react-icons/bs";

const Tokenomics = () => {
  return (
    <div className="flex flex-col gap-16 py-10  ">
      <img src={borderwhite} className=" rotate-180" alt="" />
      <div className="flex flex-col gap-16 py-10" id="collectionomics">
        <h2 className="lg:text-7xl text-4xl text-center text-white font-extrabold">
          COLLECTIONOMICS
        </h2>
        <div className="flex lg:flex-row flex-col lg:justify-around justify-center gap-10 lg:w-4/5 w-11/12 mx-auto items-center">
          <div className="flex flex-col justify-center items-center lg:gap-10 gap-5">
            {/* <div className="flex flex-col gap-6 text-center">
            <h3 className="text-white text-4xl font-bold">Token Supply:</h3>
            <p className="text-white text-4xl font-bold">420,690,000,000,000</p>
          </div> */}
            <div className="flex flex-col lg:gap-10 gap-5  mx-auto px-8 py-12 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950 lg:text-[1.5rem] text-[1rem]   text-white">
              <div className="flex items-center">
                <BsDot size={40} />
                <p>$SUI水 Total Supply: 1,000,000,000</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={40} />
                <p>Sui 水 NFT Collection Supply: 10,000 </p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={40} />
                <p>First 1000 Mints: Free</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={40} />
                <p>Remaining 9000: 0.0027 ETH ($5)</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={40} />
                <p>Mint Time: 8 p.m UTC</p>{" "}
              </div>
              <div className="flex items-center">
                <BsDot size={40} />
                <p>
                  60% Total Token Supply Airdropped <br /> to Sui 水 NFT
                  Holders.
                </p>{" "}
              </div>
              {/* <p>
                93.1% of the tokens were sent to the liquidity pool,
                <br /> LP tokens were burnt, and contract is renounced. <br />{" "}
                The remaining 6.9% of the supply is being held in a <br />{" "}
                multi-sig team wallet only to be used as tokens for <br />{" "}
                future centralized exchange listings, bridges, and <br />
                liquidity pools. This wallet is easily trackable with <br /> the
                ENS name “pepecexwallet.eth”
              </p>{" "} */}
            </div>
          </div>
          <div className="lg:w-2/5 w-full">
            {/* <p className="text-center pr-20 text-white text-lg">
            CEX Listings
            <br />
            6.9%
          </p> */}
            {/* <img src={tokemfrog} className="w-[380px]" alt="" /> */}
            <img
              className="  rounded-tl-[250px] rounded-tr-[250px] rounded-bl-[50px] rounded-br-[50px]"
              src={cow}
              alt=""
            />
            {/* <p className="text-center pr-20 text-white text-lg">
            CEX Listings
            <br />
            6.9%
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
