import Image from "next/image";
import React from "react";
import icon from "../../public/icons/yellow.svg";

const Vaultinfo = ({ data }) => {
  return (
    <div className="flex flex-col gap-7 my-7">
      <div className="flex items-center justify-between py-7 px-3 overflow-hidden">
        <div className="h-auto">
          <h1 className="py-4 text-2xl text-orange-700">
            Stryke Pancake CLAMM +-10% Automator
          </h1>
          <h1 className="text-6xl font-extrabold">{data.pair}</h1>
        </div>
        <div className="h-[120px] w-[120px]">
          <Image src={icon} alt="icon"></Image>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 pb-7 w-full">
        <div className="flex justify-between items-center p-5 w-[22%] bg-[#1E212A] rounded-xl">
          <p>TVL</p>
          <p>$459.58k</p>
        </div>
        <div className="flex justify-between items-center p-5 w-[22%] bg-[#1E212A] rounded-xl">
          <p>TVL</p>
          <p>$459.58k</p>
        </div>
        <div className="flex justify-between items-center p-5 w-[22%] bg-[#1E212A] rounded-xl">
          <p>TVL</p>
          <p>$459.58k</p>
        </div>
        <div className="flex justify-between items-center p-5 w-[22%] bg-[#1E212A] rounded-xl">
          <p>TVL</p>
          <p>$459.58k</p>
        </div>
      </div>
    </div>
  );
};

export default Vaultinfo;
