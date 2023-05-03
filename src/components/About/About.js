import React from "react";
import capfrog from "../../images/pepecroped5.png";
import whiteborder from "../../images/bordersvg.svg";

const About = () => {
  return (
    <div className="relative py-10" id="about">
      <div className="h-10 absolute w-full">
        <img src={whiteborder} className="  rotate-180 w-full" alt="" />
      </div>

      <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-between gap-10 text-white w-3/4 mx-auto lg:pt-40 pt-10 pb-10">
        <div className="lg:w-2/5 w-full">
          <img src={capfrog} alt="" />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-8 ">
          <h3 className="flex text-center lg:text-left lg:text-7xl text-4xl font-bold">
            ABOUT
          </h3>
          <p className="lg:text-2xl text-[1rem]  lg:text-left text-center tracking-wider lg:px-0 px-5">
            the endless derivative <br /> ShibaCumGMElonKishuTurboAssFlokiMoon{" "}
            <br /> Inu Memes. The Inu`s have had their <br /> day. It`s time for
            the most recognizable <br /> meme in the world to take his reign as{" "}
            <br /> king of the memes.
          </p>
          {/* <p className="text-2xl tracking-wider">
            Pepe is here to make memecoins great <br /> again. Launched stealth
            with no <br />
            presale, zero taxes, LP burnt and <br /> contract renounced, #PEPE
            is a coin for <br /> the people, forever. Fueled by pure <br />{" "}
            memetic power, let #PEPE show you the <br /> way. In Lord Kek we
            trust.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
