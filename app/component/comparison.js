import React from 'react';
// import { ArrowUp, ArrowDown } from 'lucide-react';

const StrategyBox = ({ title, icon, color }) => (
  <div className={`flex items-center p-2 rounded-md ${color}`}>
    <div className="w-6 h-6 mr-2 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-white font-medium">{title}</span>
  </div>
);

const StrategyComparisonDiagram = () => {
  return (
    <div className="bg-gray-900 text-gray-300 p-6 rounded-lg">
      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* Left side */}
        <div className="bg-gray-800 rounded-lg p-4">
          <StrategyBox title="Orange" icon="🍊" color="bg-orange-800" />
          <div className="my-4 flex justify-center">
            <div className="text-center">
              {/* <ArrowUp className="text-orange-500 mx-auto" /> */}
              <p className="text-sm">x1.4* Real Yield</p>
              <p className="text-xs text-gray-500">(fee+premium)</p>
            </div>
          </div>
          <StrategyBox title="Stryke" icon="🎯" color="bg-green-800" />
          <div className="my-2 flex justify-end mr-4">
            {/* <ArrowDown className="text-gray-500" /> */}
            <p className="text-sm ml-2">LP</p>
          </div>
          <StrategyBox title="PancakeSwap" icon="🥞" color="bg-blue-800" />
        </div>
        
        {/* Right side */}
        <div className="bg-gray-800 rounded-lg p-4">
          <StrategyBox title="Liquidity Manager" icon="" color="bg-gray-700" />
          <div className="my-4 flex justify-center">
            <div className="text-center">
              {/* <ArrowUp className="text-orange-500 mx-auto" /> */}
              <p className="text-sm">x1 Real Yield</p>
              <p className="text-xs text-gray-500">(fee)</p>
            </div>
          </div>
          <StrategyBox title="PancakeSwap" icon="🥞" color="bg-blue-800" />
          <div className="my-2 flex justify-end mr-4">
            {/* <ArrowDown className="text-gray-500" /> */}
            <p className="text-sm ml-2">LP</p>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mb-4">* boost coefficient was measured by WETH-USDC vault from 1 Jun 2024</p>
      
      <h2 className="text-2xl font-bold mb-2">Strategy: Wide / Rebalance</h2>
      <p className="text-sm">
        Liquidity is allocated for DEX and Derivatives, enabling liquidity at any tick can be utilized to generate yield. This makes more reasonable to provide liquidity in wider range to leverage the high capital efficiency while mitigating impermanent loss.
      </p>
    </div>
  );
};

export default StrategyComparisonDiagram;