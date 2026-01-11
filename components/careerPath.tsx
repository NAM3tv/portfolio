"use client";
import Image from "next/image";
import { useState } from "react";
import Btn from "./btn"
import { MdOutlineTask } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

const TaskIcon = MdOutlineTask as any;
const WhereIcon = LuMapPin as any;
const LinkIcon = FiExternalLink as any;

function CareerPath({companyName, companyLogo, role, startDate, finishDate, location, tasks, webLink, isFirst}: any){
    const [isHovered, setIsHovered] = useState(isFirst);
    const [hasBeenHovered, setHasBeenHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
        if(isFirst && !hasBeenHovered){
            setHasBeenHovered(true);
        }
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className={`lg:h-[15vh] hidden  h-auto w-full lg:flex overflow-hidden relative grow-height ${isFirst && !hasBeenHovered ? 'firstCareerElement' : ''}`}
        >
            <div className="absolute w-[5px] lg:ml-[100px] ml-7 h-full bg-[#42b847]"></div>
            <Image 
                src={companyLogo} 
                width={50} 
                height={50} 
                alt={`${companyName} Logo`}
                className="rounded-[10px] lg:ml-[77px] ml-1 z-1 w-[50px] h-[50px] mt-[10px] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)]"
            />
            <div className="w-full mt-[10px]">
                <div className="w-full flex items-center text-[18px]">
                    <p className="ml-[2%] font-bold">{companyName}</p>
                    <p className="mx-[1%]">-</p>
                    <p className="flex items-center">
                        <WhereIcon className="w-[16px]"/> {location}
                    </p>
                </div>
                <h1 className="ml-[2%]">{startDate} - {!finishDate ? "Now" : finishDate}</h1>
                {/* Mobile: sempre visibile | Desktop: solo se hover */}
                <div className={`w-full ml-[2%] block ${isHovered ? "lg:block" : "lg:hidden"}`}>
                    <h2 className="mt-[15px] p-0 font-bold">{role}</h2>
                    <div className="flex w-full items-center mt-[15px]">
                        <TaskIcon className="text-[16px]"/>
                        <h2 className="p-0 font-bold">Tasks:</h2>
                    </div>
                    <ul className="list-disc list-outside ml-5 mt-2.5">
                        {
                            tasks.map((item: any, index: any) => {
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                    {webLink && (
                        <Btn 
                            className="lg:mt-5 lg:w-[15%] w-[50%] my-5 text-white" 
                            text="Web Site" 
                            icon={<LinkIcon className="text-white text-[16px]"/>}
                            webLink={webLink}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CareerPath;