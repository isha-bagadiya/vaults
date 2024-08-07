import React from "react";

const LiquidityVaults = ({ totalValueLocked }) => {
  return (
    <div className="px-0 py-4">
      <h4 className="text-2xl font-medium">Liquidity Vaults</h4>
      <div className="bg-[#1E212A] w-fit pl-8 pr-36 py-6 rounded-2xl my-5 flex flex-col items-start gap-2">
        <p>Total Value Locked:</p>
        <p>${totalValueLocked} M</p>
      </div>
    </div>
  );
};

export default LiquidityVaults;
