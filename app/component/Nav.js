"use client";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black z-40 text-white px-2 xl:px-10 py-7 flex justify-between items-center w-[90%] mx-auto">
      <div className="flex flex-row items-center space-x-10 xl:space-x-16">
        <div className="p-2 text-orange-500">LOGO Vault</div>
        <div className="hidden md:flex space-x-5 xl:space-x-9">
          <Link href="/">Liquidity Vaults</Link>
          <Link href="/">Points</Link>
          <Link href="/">Spaceship</Link>
          <Link href="/">Astronaut</Link>
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
            largeScreen: false,
          }}
        />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" onClick={toggleMenu}>
              Liquidity Vaults
            </Link>
            <Link href="/" onClick={toggleMenu}>
              Points
            </Link>
            <Link href="/" onClick={toggleMenu}>
              Spaceship
            </Link>
            <Link href="/" onClick={toggleMenu}>
              Astronaut
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
