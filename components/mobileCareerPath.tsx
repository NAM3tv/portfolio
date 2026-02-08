"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Btn from "./btn"
import { MdOutlineTask } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import {CareerPathProps} from "@/types";

function CareerPathMobile({companyName, companyLogo, role, startDate, finishDate, location, tasks, webLink, className}: CareerPathProps){
    const careerContainerRef = useRef<HTMLDivElement>(null);
    const componentRef = useRef<HTMLDivElement>(null);
    return (
        <>
        <div className={`lg:hidden pb-5 h-auto w-full flex overflow-hidden relative lg:grow-height ${className}`}>
            <div className="absolute w-[5px] lg:ml-[100px] ml-7 h-full bg-[#42b847]"></div>
            <Image src={companyLogo} width={50} height={50} alt="" className="rounded-[10px] lg:ml-[77px] mr-2 ml-1 z-1 w-[50px] h-[50px] mt-[10px] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)]"></Image>
            <div className="w-full mt-[10px]">
                <div className="w-full flex items-center text-[16px]">
                    <p className="ml-[2%] font-bold">{companyName}</p>
                    <p className="mx-[1%]">-</p>
                    <p className=" flex items-center">{<LuMapPin className="w-[16px]"/>} {location}</p>
                </div>
                <h1 className="ml-[2%]">{startDate} - {!finishDate ? "Now" : finishDate}</h1>
                <div className="w-full ml-[2%] lg:hidden">
                    <h2 className="mt-[15px] p-0 font-bold">{role}</h2>
                    <div className="flex w-full items-center mt-[15px]">
                        <MdOutlineTask className="text-[16px]"/>
                        <h2 className="p-0 font-bold">Tasks:</h2>
                    </div>
                    <ul className="list-disc list-outside ml-5 mt-2.5">
                        {
                            tasks.map((item: any, index:any) => {
                                return(
                                    <li key={index} className="text-[16px]">{item}</li>
                                )
                            })
                        }
                    </ul>
                    {webLink && (
                        <Btn 
                            className="lg:mt-5 lg:w-[15%] w-[50%] my-5 text-white" 
                            text="Web Site" 
                            icon={<FiExternalLink className="text-white text-[16px]"/>}
                            webLink = {webLink}
                        />
                    )}
                </div>
            </div>
        </div>
        </>
    );
}
export default CareerPathMobile;