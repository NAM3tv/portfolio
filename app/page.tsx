import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // L'alias @ è magico!
import Background from "@/components/background";
import Me from "@/components/me";
import Btn from "@/components/btn";
import MobileNav from "@/components/mobileNav"
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuBookMarked } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { IoMdBusiness } from "react-icons/io";

export default function Home() {
  return (
    <>
    <div className=" h-full flex flex-col items-center  relative lg:flex-row lg:justify-start lg:items-start">
      <div className="w-full lg:w-[65%] lg:justify-start lg:items-start lg:h-screen flex flex-col items-center justify-center z-1">
        <Me/>
        <Header />
        <h1 className="lg:text-7xl mt-[2vh] text-4xl w-full lg:w-auto lg:inline-block text-center lg:ml-[15%] lg:mt-[18%] font-bold"><span className="text-[#42b847] font-allura text-5xl font-bold lg:text-8xl">Glavan</span> Constantin</h1>
        <p className="lg:ml-[15%] mt-2 w-full text-center text-2xl lg:text-5xl lg:inline-block lg:w-auto lg:mt-7">Web Developer</p>
        <p className="lg:ml-[15%] w-full justify-center text-1xl flex items-center text-[#919598] lg:justify-start lg:w-auto lg:text-2xl lg:mt-3"> <LuMapPin className="mr-1"/> Based in Italy</p>
        <div className="flex w-full flex-col mt-5 lg:flex-row items-center lg:mt-[4%]">
          <Btn className=" w-[90%] lg:w-[25%] shadow-[0_0_10px_2px_#42b847] lg:ml-[15%] py-[5vh] font-bold text-white" text="Projects" siteLink="/projects" icon={<AiOutlineFundProjectionScreen className="text-[20px] text-white mr-[-8px]"/>}/>
          <Link href="/skills" className="lg:ml-20 lg:justify-start lg:w-auto lg:mt-0 lg:bg-white bg-[#f2f3f7] py-[3vh] mt-5 w-[90%]  font-bold text-[#42b847] text-[18px] flex items-center justify-center"><LuBookMarked className="mr-1"/>Skills</Link>
        </div>
      </div>
      <div className="w-[35%] lg:min-h-screen lg:h-full lg:relative overflow-hidden lg:block">
          <Background clipPath="polygon(0% 0%, 100% 0%, 100% 20%, 0% 35%)" className="lg:[clip-path:none]! z-0"/>
      </div>

    </div>
    <p className="text-[#919598]/50 absolute bottom-2 left-2 items-center text-[14px] hidden lg:flex"> <IoMdBusiness className="mr-1"/> P.IVA: 03198400305</p>
    <MobileNav page="home"/>
    </>
  );
}
