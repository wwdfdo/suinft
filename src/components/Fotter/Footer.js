import React from "react";
import sound from "../../audios/Frog Ribbit Sound Effect.mp3";

const Footer = () => {
  return (
    <div className="text-center bg-[#3A94C9] h-16 flex items-center justify-center  font-semibold shadow-3xl relative">
      <p>© 2023 by PEPECLUB. All rights reserved!</p>
      <audio
        controls
        autoPlay={true}
        loop={true}
        src={sound}
        className="fixed bottom-0 right-0 w-[230px] text-sm hidden lg:block"
      ></audio>
    </div>
  );
};

export default Footer;
