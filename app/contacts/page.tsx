import Header from "@/components/header";
import Background from "@/components/background";
import { MdAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import MobileNav from "@/components/mobileNav";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";


export default function Home(){
    return(
        <>
    <main className="w-full h-screen flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="lg:w-[65%] w-full flex-col items-center z-2">
        <Header />
        <div className="relative animate-spawn w-full ml-[7%]">
          <h1 className="text-3xl font-bold mt-[5vh]">Get in touch</h1>
          <div className="w-full h-auto flex flex-col mt-5 lg:flex-row">

            <div className="w-75 lg:w-[35%] h-auto shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] border-l-5 border-l-[#42b847] flex flex-col items-center justify-center bg-linear-to-br bg-white mt-[3vh] rounded-[20px]">
              <div className="relative w-full flex items-center justify-center">
                <Image src="/img/pixgenie_1762528408931.png" alt="" width={1000} height={1000} className="w-[50%] lg:w-[43%] h-auto object-cover [mask-image:linear-gradient(to_top,transparent_0%,black_40%)]"/>
              </div>
              <h2 className="mt-5 font-bold text-2xl">Let's Talk</h2>
              <p className="w-[80%] text-[14px] text-center my-5">Let's discuss your project and see if my skills match your needs. Pick a time that works for you.</p>
              <a href="https://cal.com/constantin-glavan-xdsdt0/30min" className="lg:justify-start lg:w-auto lg:mt-0 bg-[#42b847] py-[2vh] mb-5 w-[90%] px-5 rounded-[20px] font-bold text-white text-[16px] flex items-center justify-center"><FaRegCalendarAlt className="mr-1"/>Book a meeting</a>
            </div>

            <div className="flex flex-col lg:items-center lg:w-[60%] lg:ml-0 w-full h-auto mb-[25vh] lg:mb-0">

              <div className="lg:w-[65%] w-75 h-[15vh] rounded-[20px] mt-[3vh] flex items-center border-l-5 border-l-[#42b847] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] text-[20px] bg-white">
                <MdAlternateEmail className="ml-[5%] text-[#42b847] text-[90px]"/>
                <div className="w-full">
                  <p className="ml-[3%] text-[#919598]">Email</p>
                  <p className="ml-[3%] font-bold">st3eps@gmail.com</p>
                </div>
              </div>

              <div className="lg:w-[65%] w-75 h-[15vh] rounded-[20px] mt-[3vh] flex items-center border-l-5 border-l-[#42b847] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] text-[20px] bg-white">
                <IoCallOutline className="ml-[5%] text-[#42b847] text-[90px]"/>
                <div className="w-full">
                  <p className="ml-[3%] text-[#919598]">Phone</p>
                  <p className="ml-[3%] font-bold">+39 3757375191</p>
                </div>
              </div>

              <div className="lg:w-[65%] w-75 h-[15vh] rounded-[20px] mt-[3vh] flex items-center border-l-5 border-l-[#42b847] shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] text-[20px] bg-white">
                <FiGithub className="ml-[5%] text-[#42b847] text-[90px]"/>
                <div className="w-full">
                  <p className="ml-[3%] text-[#919598]">Github</p>
                  <a href="https://github.com/NAM3tv" target="_blank" className="ml-[3%] font-bold">github.com/NAM3tv</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background fisso sulla destra */}
      <div className="fixed top-0 right-0 w-[35%] h-screen z-0">
        <Background />
      </div>
    </main>
    </>
    )
}