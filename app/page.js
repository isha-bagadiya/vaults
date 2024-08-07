import { ConnectButton } from "@rainbow-me/rainbowkit";
import Nav from "./component/Nav";
import LiquidityVaults from "./component/LiquidityVaults";
import VaultTable from "./component/VaultTable";
import vaultData from "../public/data.json"

// const vaultData = [
//   {
//     id: "1",
//     pair: "WETH-USDC",
//     apr: "275.28%",
//     tvl: "$479.65K",
//     position: "-",
//     derivatives: "STRYKE / PANCAKESWAP",
//   },
//   {
//     id: "2",
//     pair: "WETH-USDC",
//     apr: "275.28%",
//     tvl: "$479.65K",
//     position: "-",
//     derivatives: "STRYKE / PANCAKESWAP",
//   },
//   {
//     id: "3",
//     pair: "WETH-USDC",
//     apr: "275.28%",
//     tvl: "$479.65K",
//     position: "-",
//     derivatives: "STRYKE / PANCAKESWAP",
//   },
  
// ];

export default function Home() {

  const totalValueLocked =
    vaultData.reduce((total, vault) => {
      const value = parseFloat(vault.tvl.replace(/[$,K]/g, ""));
      return total + value * 1000; 
    }, 0) / 1000000; 

  const formattedTotalValueLocked = totalValueLocked.toFixed(2);

  return (
    <main className="w-[80%] mx-auto mt-32">
      <LiquidityVaults totalValueLocked={formattedTotalValueLocked} />
      <VaultTable data={vaultData} />
    </main>
  );
}
