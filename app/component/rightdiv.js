import React, { useState } from 'react';

const LiquidityComponent = () => {
  const [activeTab, setActiveTab] = useState('deposit');
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <span>Your position</span>
        <span>$0.00 0.0000 USDC</span>
      </div>
      
      <div className="flex mb-4">
        <button 
          className={`flex-1 py-2 ${activeTab === 'deposit' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('deposit')}
        >
          Deposit
        </button>
        <button 
          className={`flex-1 py-2 ${activeTab === 'reserve' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('reserve')}
        >
          Reserve
        </button>
        <button 
          className={`flex-1 py-2 ${activeTab === 'withdraw' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('withdraw')}
        >
          Withdraw
        </button>
      </div>

      {activeTab === 'deposit' && (
        <>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Amount</span>
              <span>Balance: 0.000</span>
            </div>
            <div className="flex bg-gray-800 rounded">
              <input 
                type="number" 
                className="bg-transparent flex-grow p-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="bg-gray-700 px-3 rounded-r">MAX</button>
            </div>
          </div>
          <button className="w-full bg-orange-700 hover:bg-orange-600 py-3 rounded">Deposit</button>
          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <span>Deposit Fee</span>
              <span>0.1%</span>
            </div>
            <div className="flex justify-between">
              <span>Performance Fee</span>
              <span>0%</span>
            </div>
          </div>
        </>
      )}

      {activeTab === 'reserve' && (
        <>
          <div className="mb-4">
            <span className="text-sm">Withdraw & Reserve</span>
            <div className="flex bg-gray-800 rounded mt-2">
              <input 
                type="number" 
                className="bg-transparent flex-grow p-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className="bg-gray-700 px-3">%</button>
              <button className="bg-gray-700 px-3 rounded-r">MAX</button>
            </div>
          </div>
          <button className="w-full bg-orange-700 hover:bg-orange-600 py-2 rounded">Withdraw</button>
        </>
      )}

      {activeTab === 'withdraw' && (
        <div className="text-center py-4">
          No reserved amount available to withdraw
        </div>
      )}
    </div>
  );
};

export default LiquidityComponent;