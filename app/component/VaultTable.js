"use client";
import Image from "next/image";
import React from "react";
import arbitrum from "../../public/icons/arbitrum.svg";
import Link from "next/link";

const VaultTable = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="space-x-10 my-2">
          <button
            className="font-medium text-xl p-2"
            onClick={() => handleFilterChange("vaults")}
          >
            Vaults
          </button>
          <button
            className="font-medium text-xl p-2"
            onClick={() => handleFilterChange("myVault")}
          >
            My Vault
          </button>
          <button
            className="font-medium text-xl p-2"
            onClick={() => handleFilterChange("closed")}
          >
            Closed
          </button>
        </div>
      </div>

      <div className="my-5">
        <button className="flex items-center gap-2 px-7 py-3 border border-orange-600 rounded-2xl">
          {" "}
          <Image
            src={arbitrum}
            alt="arbitrum"
            width={20}
            height={20}
          ></Image>{" "}
          Arbitrum
        </button>
      </div>

      <div className="flex gap-3">
        {/* Left Side Filter Buttons */}
        <aside className="w-[20%] text-white flex flex-col gap-2">
          <button
            onClick={() => handleFilterChange("all")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left"
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("filter1")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left"
          >
            Dual Liquidity
          </button>
          <button
            onClick={() => handleFilterChange("filter2")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left"
          >
            Bluechip
          </button>
          <button
            onClick={() => handleFilterChange("filter3")}
            className="bg-[#1E212A] hover:bg-[#2b2E37] w-full px-6 py-3 rounded-xl text-left"
          >
            Pegged
          </button>
        </aside>

        {/* Right Side Table */}
        <main className=" w-[80%] flex flex-col gap-1 overflow-y-auto">
          <table>
            <tr>
              <div className="w-full bg-[#2b2E37] rounded-t-xl">
                <td>
                  <div className="w-[200px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Pair
                  </div>
                </td>
                <td>
                  <div className="w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Total APR
                  </div>
                </td>
                <td>
                  <div className="w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    TVL
                  </div>
                </td>
                <td>
                  <div className="w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Position
                  </div>
                </td>
                <td>
                  <div className="pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Derivatives / DEX
                  </div>
                </td>
              </div>
            </tr>
          </table>

          <table className="w-full">
            <tbody>
              {data.map((vault, index) => (
                <tr key={vault.id}>
                  <Link href={`/${vault.id}`}>
                    <div className="rounded-[5px] mb-1 overflow-hidden w-full bg-[#1E212A] hover:bg-[#2b2E37]">
                      <td>
                        <div className="w-[200px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          {vault.pair}
                        </div>
                      </td>

                      <td>
                        <div className="w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          {vault.apr}
                        </div>
                      </td>

                      <td>
                        <div className="w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          {vault.tvl}
                        </div>
                      </td>

                      <td>
                        <div className="w-[130px] pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          {vault.position}
                        </div>
                      </td>

                      <td>
                        <div className="pl-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          {vault.derivatives}
                        </div>
                      </td>
                    </div>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default VaultTable;
