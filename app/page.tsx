import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // L'alias @ è magico!
import Background from "@/components/background";
import Me from "@/components/me";
import Btn from "@/components/btn";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuBookMarked } from "react-icons/lu";

export default function Home() {
  return (
    <>
    <div className="flex relative">
      <div className="w-[65%] flex-col items-center">
        <Header />
        <h1 className="text-[4vw] ml-[15%] mt-[20%] font-bold"><span className="text-[#42b847] font-allura text-[6vw]">Glavan</span> Constantin</h1>
        <p className="ml-[15%] text-[2.5vw]">Web Developer</p>
        <div className="flex items-center mt-[4%]">
          <Btn className=" w-[25%] shadow-[0_0_10px_2px_#42b847] ml-[15%] py-[4vh] font-bold text-white" text="Projects" siteLink="/projects" icon={<AiOutlineFundProjectionScreen className="text-[20px] text-white mr-[-10px]"/>}/>
          <Link href="/skills" className="ml-20 font-bold text-[#42b847] text-[18px] flex items-center"><LuBookMarked className="mr-1"/>Skills</Link>
        </div>
      </div>
      <div className="w-[35%] h-screen relative overflow-hidden">
          <Background />
      </div>
    </div>
    <Me />
    </>
  );
}
