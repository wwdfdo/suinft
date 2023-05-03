import React from "react";
import BannerImage from "../../images/20.png";
import twitter from "../../images/icons8-twitter-circled-96.png";
import telegram from "../../images/icons8-telegram-app-96.png";
import medium from "../../images/medium.svg";
import discord from "../../images/discord.svg";
import opensea from "../../images/icons8-opensea-96.png";
import nftlink from "../../images/nft-calendar-transparent.png";
// import cmc from "../../images/cmc.webp";
// import dextool from "../../images/dextool.webp";
// import etherscan from "../../images/etherscan.webp";
// import uniswap from "../../images/uniswap.webp";
// import uniswaplogo from "../../images/uniswap-logo.webp";
// import mexc from "../../images/mexc.webp";
// import gate from "../../images/gate.webp";
// import huobi from "../../images/huobi.webp";
// import poloniex from "../../images/poloniex.webp";
// import okx from "../../images/okx.webp";
// import ibank from "../../images/ibank.webp";
// import bingx from "../../images/bingx.webp";
// import trustwallet from "../../images/trustwallet.webp";
// import digifinex from "../../images/digifinex.webp";
// import btcex from "../../images/btsex.webp";
// import dextoologo from "../../images/dextoologo.webp";
// import coinmarket from "../../images/cinemarketlogo.webp";
// import coingeko from "../../images/coingeko.webp";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-3/4 mx-auto pb-20">
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col items-center lg:justify-between gap-20 pt-20">
          <div className="text-white flex flex-col items-center lg:items-start gap-6">
            <h3 className="flex text-[3rem] italic font-bold">#SUI水</h3>
            <p className="lg:flex lg:text-left text-center  lg:text-[2.2rem] hidden ">
              {/* the most memeable NFT in <br /> existence. The dogs have had their{" "}
              <br />
              day, it’s time for Pepe to take reign. */}
              Sui 水, Sui is everything.
            </p>
            <p className="lg:hidden lg:text-left text-center  text-[1.5rem] flex ">
              the most memeable NFT in existence. The dogs have had their day,
              it’s time for Pepe to take reign.
            </p>
            <div className="flex gap-5 pt-4">
              <a
                href="https://twitter.com/SuiNFTofficial/status/1653722958152749056"
                target="_blank"
                rel="noreferrer"
              >
                <div className="lg:w-[4.2rem] w-[2.6rem]">
                  <img src={twitter} alt="" />
                </div>
              </a>
              <a
                href="https://t.me/suinftofficial"
                target="_blank"
                rel="noreferrer"
              >
                <div className="lg:w-[4.2rem] w-[2.6rem]">
                  <img src={telegram} alt="" />
                </div>
              </a>
              <a
                href="https://discord.com/invite/pwFzafVscf"
                target="_blank"
                rel="noreferrer"
              >
                <div className="lg:w-[4.2rem] w-[2.6rem]">
                  <img src={discord} alt="" />
                </div>
              </a>
              <a
                href=" https://opensea.io/collection/pepeclubvip"
                target="_blank"
                rel="noreferrer"
              >
                <div className="lg:w-[4.2rem] w-[2.6rem]">
                  <img src={opensea} alt="" />
                </div>
              </a>
              <a
                href="https://medium.com/@pepeclubvip"
                target="_blank"
                rel="noreferrer"
              >
                <div className="lg:w-[4.2rem] w-[2.6rem]">
                  <img src={medium} alt="" />
                </div>
              </a>
              <a
                href="https://nftcalendar.io/b/arbitrum"
                target="_blank"
                rel="noreferrer"
              >
                <div className="lg:w-[4.2rem] w-[2.6rem]">
                  <img src={nftlink} alt="" />
                </div>
              </a>
              {/* <div className="w-[4.2rem]">
                {" "}
                <img src={etherscan} alt="" />
              </div> */}
            </div>
          </div>
          <div className="lg:w-2/5 w-[90%] ">
            <img
              className=" rounded-tl-[150px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[150px]"
              src={BannerImage}
              alt=""
            />
          </div>
        </div>
        {/* <div className="flex justify-center ">
          <div className="flex flex-wrap  justify-center items-center  gap-5 mx-auto text-[32px] font-bold">
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[29%]">
              <div>uniswap</div>
              <img src={uniswaplogo} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>mexc</div>
              <img src={mexc} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>gate.io</div>
              <img src={gate} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>huobi</div>
              <img src={huobi} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>poloniex</div>
              <img src={poloniex} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>okx dex</div>
              <img src={okx} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>Ibank</div>
              <img src={ibank} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>bingx</div>
              <img src={bingx} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%] ">
              <div>trustwallet</div>
              <img src={trustwallet} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>digifinex</div>
              <img src={digifinex} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>btcex</div>
              <img src={btcex} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%] opacity-0">
              <div>uniswap</div>
              <img src={dextoologo} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>dextools</div>
              <img src={dextoologo} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>coinmarketcap</div>
              <img src={coinmarket} alt="" />
            </div>
            <div className="flex items-center justify-center border-white border-[1px] hover:bg-white hover:bg-opacity-50 cursor-pointer duration-300  text-white pb-2 py-1  gap-10 rounded-full w-[30%]">
              <div>coingecko</div>
              <img src={coingeko} alt="" />
            </div>
          </div>

          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
