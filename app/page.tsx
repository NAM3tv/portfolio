import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // L'alias @ è magico!
import Background from "@/components/background";
import Me from "@/components/me";
import Btn from "@/components/btn"

export default function Home() {
  return (
    <>
    <div className="flex relative">
      <div className="w-[65%] flex-col items-center">
        <Header />
        <h1 className="text-[4vw] ml-[15%] mt-[20%] font-bold"><span className="text-[#42b847] font-allura text-[6vw]">Glavan</span> Constantin</h1>
        <p className="ml-[15%] text-[2.5vw]">Web Developer</p>
        <Btn className="shadow-[0_0_10px_2px_#42b847] ml-[15%] mt-[4%] py-[4vh] px-[12%] font-bold" text="Projects" siteLink="/projects"/>
      </div>
      <div className="w-[35%] h-screen relative overflow-hidden">
          <Background />
      </div>
    </div>
    <Me />
    </>
  );
}
