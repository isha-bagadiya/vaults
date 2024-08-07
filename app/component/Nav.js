import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Nav = () => {
  return (
    <nav className="bg-black z-40 text-white px-10 py-7 flex justify-between items-center w-[90%] mx-auto">
    <div className="flex flex-row items-center space-x-16"> 
      <div className="p-2 text-orange-500">LOGO Vault</div>
      <div className="space-x-9">
        <Link href="/">
          Liquidity Vaults
        </Link>
        <Link href="/">
          Points
        </Link>
        <Link href="/">
          Spaceship
        </Link>
        <Link href="/">
          Astronaut
        </Link>
      </div>
      </div>
      <div>
        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
