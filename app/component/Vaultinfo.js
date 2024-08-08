import Image from "next/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Tooltip } from "antd";

const getHeading = (derivatives) => {
  if (derivatives.includes("STRYKE") && derivatives.includes("PANCAKESWAP")) {
    return "Stryke Pancake CLAMM +-10% Automator";
  }
  if (derivatives.includes("STRYKE") && derivatives.includes("UNISWAP")) {
    return "Stryke CLAMM Liquidity Manager";
  }
  if (derivatives.includes("CAMELOT")) {
    return "Camelot Stable Vault";
  }
  return "Default Vault Heading";
};

const Vaultinfo = ({ data }) => {
  const heading = getHeading(data.derivatives);

  return (
    <div className="flex flex-col gap-7 my-5 pb-3 border-b-2 border-gray-800">
      <div className="flex items-center justify-between px-3 overflow-hidden">
        <div className="py-4">
          <h1 className="py-4 text-2xl text-orange-500">{heading}</h1>
          <h1 className="text-7xl font-extrabold flex items-center gap-7">
            <Image src={data.icon1} alt="icon" width={65} height={65}></Image>
            {data.pair}
          </h1>
        </div>
        <div className="">
          <Image
            src={data.icons[0]}
            alt="icon"
            width={150}
            height={150}
          ></Image>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 py-7 w-full">
        <div className="flex justify-between items-center p-5 w-[24%] bg-[#1E212A] rounded-xl">
          <p>TVL</p>
          <p>$459.58k</p>
        </div>
        <div className="flex justify-between items-center p-5 w-[24%] bg-[#1E212A] rounded-xl">
          <p className="flex items-center gap-2">
            Total APR
            <Tooltip placement="bottom" color="#111827" width="400px" overlayInnerStyle={{ width: '280px' }} title="The total APR comprises both the Reward APR and the Fee APR">
              <AiOutlineInfoCircle />
            </Tooltip>
          </p>
          <p>459.58%</p>
        </div>
        <div className="flex justify-between items-center p-5 w-[24%] bg-[#1E212A] rounded-xl">
          <p className="flex items-center gap-2">
            Reward APR
            <Tooltip placement="bottom" color="#111827" width="400px" overlayStyle={{ width: '300px' }} title="Reward APR comes from token distributed by protocols as incentives">
            <AiOutlineInfoCircle data-tip="Reward APR description" />
            </Tooltip>
          </p>
          <p>459.58</p>
        </div>
        <div className="flex justify-between items-center p-5 w-[24%] bg-[#1E212A] rounded-xl">
          <p className="flex items-center gap-2">
            Fee APR
            <Tooltip placement="bottom" color="#111827"  overlayInnerStyle={{ width: '300px' }}  title="Fee APR is based on the fees collected daily from the underlying pool, such as trading fees and option premiums.">
            <AiOutlineInfoCircle data-tip="Fee APR description" />
            </Tooltip>
          </p>
          <p>459.58</p>
        </div>
      </div>
    </div>
  );
};

export default Vaultinfo;
