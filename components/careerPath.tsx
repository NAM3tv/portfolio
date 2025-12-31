"use client";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import Btn from "./btn"
import { MdOutlineTask } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
//Icons
const TaskIcon = MdOutlineTask as any;
const WhereIcon = LuMapPin as any;
const LinkIcon = FiExternalLink as any;

function CareerPath({companyName, companyLogo, role, startDate, finishDate, location, tasks, webLink}: any){
    const careerContainerRef = useRef<HTMLDivElement>(null);
    function handleMouseEnter(){
        careerContainerRef.current!.classList.remove("hidden");
    }
    function handleMouseLeave(){
        careerContainerRef.current!.classList.add("hidden");
    }
    return (
        <>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-[15vh] w-full flex overflow-hidden relative grow-height">
            <div className="absolute w-[5px] ml-[100px] h-full bg-[#42b847]"></div>
            <Image src={companyLogo} width={50} height={50} alt="Generali Logo" className="rounded-[10px] ml-[75px] z-1 w-[50px] h-[50px] mt-[10px] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)]"></Image>
            <div className="w-full mt-[10px]">
                <div className="w-full flex items-center text-[18px]">
                    <p className="ml-[2%] font-bold">{companyName}</p>
                    <p className="mx-[1%]">-</p>
                    <p className=" flex items-center">{<WhereIcon className="w-[16px]"/>} {location}</p>
                </div>
                <h1 className="ml-[2%]">{startDate} - {!finishDate ? "Now" : finishDate}</h1>
                <div ref={careerContainerRef} className="w-full ml-[2%] hidden">
                    <h2 className="mt-[15px] p-0 font-bold">{role}</h2>
                    <div className="flex w-full items-center mt-[15px]">
                        <TaskIcon className="text-[16px]"/>
                        <h2 className="p-0 font-bold">Tasks:</h2>
                    </div>
                    <ul className="list-disc list-outside ml-5 mt-2.5">
                        {
                            tasks.map((item: any) => {
                                return(
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    {webLink && (
                        <Btn 
                            className="mt-5" 
                            text="Web Site" 
                            icon={<LinkIcon className="text-white text-[16px]"/>}
                            webLink = {webLink}
                        />
                    )}
                </div>
            </div>
        </div>
        </>
    );
}
export default CareerPath;