import Image from 'next/image';
import React from 'react';
import graph from "../../public/icons/graph.svg"

const StrategyComparisonDiagram = () => {
  return (
    <div className="bg-[#1E212A] p-14 rounded-xl flex flex-col items-center gap-3">
 <div className="w-full overflow-hidden my-4">
                <Image src={graph} alt="graph" width={600}></Image>
              </div>
      <p className="text-xs text-gray-500 mt-8">* boost coefficient was measured by WETH-USDC vault from 1 Jun 2024</p>
      
    </div>
  );
};

export default StrategyComparisonDiagram;