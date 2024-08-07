"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Vaultinfo from "../component/Vaultinfo";
import data from "../../public/data.json";
import LiquidityMiningProgram from "../component/LiquiditiMiningProgram";
import LiquidityComponent from "../component/rightdiv";
import LPAnalytics from "../component/OverviewAnalyticsToggle";

const DetailsPage = () => {
  const { id } = useParams();

  const item = data.find((d) => d.id === id);

  return (
    <main className="w-[80%] mx-auto mt-32">
      <div>
        <Link href="/">
          <button className="bg-[#1E212A] hover:bg-[#2b2E37] w-fit px-6 py-3 rounded-xl text-left">
            Back to all Vaults
          </button>
        </Link>

        <Vaultinfo data={item} />

        <hr />

        <div className="w-full flex flex-row items-start justify-between my-20">
          <div className="w-[55%]"><LPAnalytics /></div>
          <div className="flex flex-col w-[40%] gap-4">
            <LiquidityComponent />
            <LiquidityMiningProgram />
          </div>
        </div>{" "}
      </div>
    </main>
  );
};

export default DetailsPage;
