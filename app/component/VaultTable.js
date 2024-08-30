"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const VaultTable = ({ data }) => {
  const [activeTab, setactiveTab] = useState("vaults");
  const [activeButton, setactiveButton] = useState("all");

  const handleTabChange = (tab) => {
    setactiveTab(tab);
    setactiveButton("all");
  };

  const handleFilterChange = (filter) => {
    setactiveButton(filter);
  };

  const filteredByTab = data.filter((vault) => {
    if (activeTab === "vaults") {
      return vault.apr !== "0.00%";
    }
    if (activeTab === "myVault") {
      return false;
    }
    if (activeTab === "closed") {
      return vault.apr === "0.00%";
    }
    return true;
  });

  const filteredData = filteredByTab.filter((vault) => {
    if (activeButton === "all") return true;
    if (activeButton === "single") return vault.derivatives.length === 1;
    if (activeButton === "lp") return !vault.pair.includes("BOOP");
    if (activeButton === "clm") return vault.derivatives.length === 1;
    return true;
  });

  return (
    <div className="flex flex-col mb-8">
      <div>
        <div className="space-x-3 md:space-x-7 xl:space-x-10 my-2">
          <button
            className={`font-medium text-xl p-2 ${
              activeTab === "vaults" ? "" : "text-[#6B7280]"
            }`}
            onClick={() => handleTabChange("vaults")}
          >
            Vaults
          </button>
          <button
            className={`font-medium text-xl p-2 ${
              activeTab === "myVault" ? "" : "text-[#6B7280]"
            }`}
            onClick={() => handleTabChange("myVault")}
          >
            My Vault
          </button>
          <button
            className={`font-medium text-xl p-2 ${
              activeTab === "closed" ? "" : "text-[#6B7280]"
            }`}
            onClick={() => handleTabChange("closed")}
          >
            Closed
          </button>
        </div>
      </div>

      <div className="my-5">
        <button className="flex items-center gap-2 px-7 py-3 border border-orange-600 rounded-2xl">
          {/* <Image src={arbitrum} alt="arbitrum" width={20} height={20}></Image>
          Arbitrum */}
          RootStock
        </button>
      </div>

      <div className="flex gap-3 flex-col md:flex-row">
        {/* Left Side Filter Buttons */}
        <aside className="w-full md:w-[20%] md:min-w-[160px] text-white flex flex-row flex-wrap justify-between md:justify-normal md:flex-col gap-2">
          <button
            onClick={() => handleFilterChange("all")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left flex items-center justify-between min-w-[120px] max-w-[48%] md:max-w-none"
          >
            All
            {activeButton === "all" && (
              <div className="w-2 h-2 rounded-full bg-orange-500 drop-shadow-[0_2px_6px_rgba(251,91,13,0.8)]"></div>
            )}
          </button>
          <button
            onClick={() => handleFilterChange("single")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left flex items-center justify-between min-w-[120px] max-w-[48%] md:max-w-none"
          >
            Single
            {activeButton === "single" && (
              <div className="w-2 h-2 rounded-full bg-orange-500 drop-shadow-[0_2px_6px_rgba(251,91,13,0.8)]"></div>
            )}
          </button>
          <button
            onClick={() => handleFilterChange("lp")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left flex items-center justify-between min-w-[120px] max-w-[48%] md:max-w-none"
          >
            LP
            {activeButton === "lp" && (
              <div className="w-2 h-2 rounded-full bg-orange-500 drop-shadow-[0_2px_6px_rgba(251,91,13,0.8)]"></div>
            )}
          </button>
          <button
            onClick={() => handleFilterChange("clm")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left flex items-center justify-between min-w-[120px] max-w-[48%] md:max-w-none"
          >
            CLM
            {activeButton === "clm" && (
              <div className="w-2 h-2 rounded-full bg-orange-500 drop-shadow-[0_2px_6px_rgba(251,91,13,0.8)]"></div>
            )}
          </button>
        </aside>

        {/* Right Side Table */}
        <main className="w-full md:w-[80%] flex flex-col gap-1 overflow-y-auto">
          <table>
            <thead>
              <tr>
                <div className="w-full bg-[#2b2E37] rounded-t-xl mb-1">
                  <td>
                    <div className="whitespace-nowrap w-[200px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Pair
                    </div>
                  </td>
                  <td>
                    <div className="whitespace-nowrap w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      APY
                    </div>
                  </td>
                  <td>
                    <div className="whitespace-nowrap w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      TVL
                    </div>
                  </td>
                  <td>
                    <div className="whitespace-nowrap w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Position
                    </div>
                  </td>
                  <td>
                    <div className="min-w-[250px] whitespace-nowrap pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      PLATFORM
                    </div>
                  </td>
                </div>
              </tr>
            </thead>

            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-16 text-gray-500">
                    No data available
                  </td>
                </tr>
              ) : (
                filteredData.map((vault, index) => (
                  <tr key={vault.id}>
                    <Link href={`/${vault.id}`}>
                      <div className="rounded-[5px] mb-1 overflow-hidden w-full bg-[#1E212A] hover:bg-[#2b2E37]">
                        <td>
                          <div className="whitespace-nowrap w-[200px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider flex items-center gap-4">
                            <div className="flex items-center">
                              <Image
                                src={vault.icon1}
                                alt="arbitrum"
                                width={20}
                                height={20}
                                className="rounded-full"
                              ></Image>
                              <Image
                                src={vault.icon2}
                                alt="arbitrum"
                                width={20}
                                height={20}
                                className="rounded-full"
                              ></Image>
                            </div>
                            {vault.pair}
                          </div>
                        </td>

                        <td>
                          <div className="whitespace-nowrap w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider underline [text-decoration-style:dashed] [text-underline-offset:4px]">
                            {vault.apr}
                          </div>
                        </td>

                        <td>
                          <div className="my-auto whitespace-nowrap w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            {vault.tvl}
                          </div>
                        </td>

                        <td>
                          <div className="whitespace-nowrap w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                            {vault.position}
                          </div>
                        </td>

                        <td>
                          <div className="min-w-[250px] whitespace-nowrap pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider flex items-center">
                            {vault.derivatives.length === 2 ? (
                              <div className="flex items-center gap-1">
                                <Image
                                  src={vault.icons[0]}
                                  alt={vault.derivatives[0]}
                                  width={16}
                                  height={16}
                                  className="rounded-full"
                                />
                                {vault.derivatives[0]} /
                                <Image
                                  src={vault.icons[1]}
                                  alt={vault.derivatives[1]}
                                  width={16}
                                  height={16}
                                  className="rounded-full"
                                />
                                {vault.derivatives[1]}
                              </div>
                            ) : (
                              vault.derivatives.map((derivative, index) => (
                                <span
                                  key={index}
                                  className="flex items-center gap-1"
                                >
                                  <Image
                                    src={vault.icons[index]}
                                    alt={derivative}
                                    width={16}
                                    height={16}
                                  />
                                  {derivative}
                                </span>
                              ))
                            )}
                          </div>
                        </td>
                      </div>
                    </Link>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default VaultTable;
