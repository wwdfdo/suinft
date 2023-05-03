import React from "react";
import walletlogo from "../../images/walletlogo.webp";
import getsometh from "../../images/getsomeeth.webp";
import uniswaphowtoplay from "../../images/uniswaphowtoplay.webp";
import switchlogo from "../../images/switchlogo.webp";
import cow from "../../images/pepex.png";
import borderwhite from "../../images/second border.svg";

const HowToBuy = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <img src={borderwhite} className=" rotate-180" alt="" />
      <h2 className="text-7xl text-center text-white font-extrabold ">
        HOW TO BUY
      </h2>
      <div className="flex flex-col gap-12">
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={walletlogo} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={getsometh} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={uniswaphowtoplay} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center  w-4/5 mx-auto px-10 py-16 rounded-tr-3xl rounded-bl-3xl border-2 border-white bg-green-950  text-white">
          <div>
            <img src={switchlogo} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold">Create a Wallet</h3>
            <p className="text-lg">
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-20 w-3/4 mx-auto">
        <div className="w-[500px] h-[500px] overflow-y-auto">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              magnam dolorum non quam, excepturi laborum esse vitae commodi
              officia architecto vel consequuntur pariatur cum, itaque accusamus
              nobis repudiandae exercitationem sint.
            </p>
          </div>
        </div>
        <div>
          <img src={cow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
