import React, { useState } from 'react';
import LiquidityDistributionChart from './textareachart';
import LiquidityManagementDashboard from './dashboard';
import StrategyComparisonDiagram from './comparison';

const LPAnalytics = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-full">
      <div className="flex mb-6">
        <button 
          className={`px-4 py-2 rounded-full mr-2 ${activeTab === 'Overview' ? 'bg-gray-700' : 'bg-gray-800'}`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${activeTab === 'Analytics' ? 'bg-gray-700' : 'bg-gray-800'}`}
          onClick={() => setActiveTab('Analytics')}
        >
          Analytics
        </button>
      </div>

      {activeTab === 'Overview' && (
        <div>
          <h2 className="text-3xl font-bold mb-4">x1.4* Improved LP Profitability</h2>
          <p className="text-gray-400 mb-6">
            The liquidity provided through this vault is utilized simultaneously for AMM and Option
            protocols. Liquidity at the current price generates swap fees from the AMM, while other
            liquidity generates option premiums.
          </p>
          <button className="bg-gray-800 px-4 py-2 rounded-full mb-6">More Info ↗</button>

          <div className="bg-gray-800 rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Asset Allocation</span>
              <div>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded mr-2">STRYKE</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded">PANCAKESWAP</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Source of revenue</span>
              <div>
                <span className="bg-gray-700 px-2 py-1 rounded mr-2">SWAP FEE</span>
                <span className="bg-gray-700 px-2 py-1 rounded">OPTION PREMIUM</span>
              </div>
            </div>
          </div>
        <StrategyComparisonDiagram />
          <LiquidityManagementDashboard />
        </div>
      )}

      {activeTab === 'Analytics' && (
        <div>
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-400">
              <span className="mr-1">ⓘ</span>
              Analytics may not always be 100% accurate. At times, data may be inaccurate due to bugs, RPC outages, or issues with 3rd party APIs among other potential reasons. If you see any discrepancies, please notify our Discord server
            </p>
          </div>

          <h3 className="text-xl mb-4">LP Breakdown</h3>
          <div className="flex bg-gray-800 rounded-lg p-6">
            <div className="w-1/2">
              {/* Placeholder for pie chart */}
              <div className="w-48 h-48 bg-gray-700 rounded-full"></div>
            </div>
            <div className="w-1/2">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400">
                    <th className="text-left">ASSET</th>
                    <th className="text-right">TOKEN AMOUNT</th>
                    <th className="text-right">VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2"><span className="bg-orange-500 text-black px-2 py-1 rounded">₿ WBTC</span></td>
                    <td className="text-right">3.13K</td>
                    <td className="text-right">$178.30M</td>
                  </tr>
                  <tr>
                    <td className="py-2"><span className="bg-blue-500 text-white px-2 py-1 rounded">$ USDC</span></td>
                    <td className="text-right">3.13K</td>
                    <td className="text-right">$3.13K</td>
                  </tr>
                  <tr>
                    <td className="py-2"><span className="bg-gray-700 px-2 py-1 rounded">LP</span></td>
                    <td className="text-right">0.00</td>
                    <td className="text-right">$256.45K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <LiquidityDistributionChart />
        </div>
      )}
    </div>
  );
};

export default LPAnalytics;