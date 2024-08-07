import React from 'react';

const LiquidityMiningProgram = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Merkl Liquidity Mining Program</h2>
        <button className="text-2xl">−</button>
      </div>
      
      <p className="text-gray-400 text-sm mb-4">
        Claim your rewards without staking LP positions.
        Rewards are distributed in regular intervals. 
        <a href="#" className="text-blue-400 hover:underline ml-1">Learn More</a>
      </p>
      
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400">Reward APR</span>
        <span className="text-xl font-bold">21.02%</span>
      </div>
      
      <button className="w-full bg-orange-700 hover:bg-orange-600 text-white py-3 rounded-lg transition duration-300">
        Claim Rewards
      </button>
    </div>
  );
};

export default LiquidityMiningProgram;