import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  baseSepolia,
  rootstock
} from "wagmi/chains";


export const config = getDefaultConfig({
  appName: "vaults",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [
    rootstock,
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [baseSepolia]
      : []),
  ],
  ssr: true,
});
