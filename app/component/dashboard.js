import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
// import { ArrowRight } from 'lucide-react';

const generateChartData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    value: Math.random() * 100,
    color: i > 15 ? '#F97316' : '#4B5563'
  }));
};

const LiquidityManagementDashboard = () => {
  const chartData = generateChartData();

  return (
    <div className="bg-gray-900 text-gray-300 p-6 grid grid-cols-2 gap-6">
      {/* Tick Liquidity Management */}
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">Tick Liquidity Management</h2>
          <p className="mb-4">
            To adapt high capital efficiency in LPDfi, liquidity has to be a tick liquidity. Orange vault provide liquidity in range and manages hundreds of tick liquidity positions automatically.
          </p>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
            More Info 
            {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
          </button>
        </div>
        <div className="mt-4 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" tick={false} />
              <Bar dataKey="value" fill={(entry) => entry.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span>2450.55</span>
          <span>2601.10</span>
          <span>2756.65</span>
          <span>2912.20</span>
          <span>3067.75</span>
          <span>3223.30</span>
          <span>3378.85</span>
        </div>
      </div>

      {/* Rebalance when update position */}
      <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">Rebalance when update position</h2>
          <p className="mb-4">
            This vault rebalance asset allocation to balance the amount of liquidities. To mitigate slippage on swap and gas cost, the vault utilizes flashloan and swap aggregator.
          </p>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
            More Info 
            {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
          </button>
        </div>
        <div className="flex justify-center items-center space-x-8 mt-4">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">$</span>
            </div>
            <span className="mt-2">USDC</span>
          </div>
          <div className="flex flex-col items-center relative">
            <svg className="absolute -top-4 -left-4" width="100" height="100">
              <path d="M 50 0 A 50 50 0 0 1 100 50" fill="none" stroke="white" strokeWidth="2" />
              <path d="M 50 100 A 50 50 0 0 1 0 50" fill="none" stroke="white" strokeWidth="2" />
            </svg>
            <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"/>
                <path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fillOpacity="0.602"/>
                <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white"/>
                <path d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z" fill="white" fillOpacity="0.602"/>
                <path d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z" fill="white"/>
                <path d="M16.498 20.573L23.995 16.22L16.498 12.872V20.573Z" fill="white" fillOpacity="0.2"/>
                <path d="M9 16.22L16.498 20.573V12.872L9 16.22Z" fill="white" fillOpacity="0.602"/>
              </svg>
            </div>
            <span className="mt-2">WETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityManagementDashboard;
