import Header from "@/components/header";
import Background from "@/components/background";
import { MdAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";



export default function Home(){
    return(
        <>
    <div className="flex relative">
      <div className="w-[65%] flex-col items-center">
        <Header />
        <div className="relative animate-spawn w-full ml-[7%]">
          <h1 className="text-3xl font-bold mt-[5vh] ">Get in touch</h1>
          <div className="w-[40%] h-[15vh] mt-[5vh] flex items-center border-l-5 border-l-[#42b847] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] text-[20px]">
            <MdAlternateEmail className=" ml-[5%] text-[#42b847] text-[90px]"/>
            <div className="w-full">
              <p className="ml-[3%] text-[#919598]">Email</p>
              <p className="ml-[3%] font-bold">st3eps@gmail.com</p>
            </div>
          </div>
          <div className="w-[40%] h-[15vh] mt-[3vh] flex items-center border-l-5 border-l-[#42b847] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] text-[20px]">
            <IoCallOutline  className=" ml-[5%] text-[#42b847] text-[90px]"/>
            <div className="w-full">
              <p className="ml-[3%] text-[#919598]">Phone</p>
              <p className="ml-[3%] font-bold">+39 3757375191</p>
            </div>
          </div>
          <div className="w-[40%] h-[15vh] mt-[3vh] flex items-center border-l-5 border-l-[#42b847] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] text-[20px]">
            <FiGithub   className=" ml-[5%] text-[#42b847] text-[90px]"/>
            <div className="w-full">
              <p className="ml-[3%] text-[#919598]">Github</p>
              <a href="https://github.com/NAM3tv" target="_blank" className="ml-[3%] font-bold">github.com/NAM3tv</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] h-screen relative overflow-hidden">
          <Background />
      </div>
    </div>
    </>
    )
}