"use client";
import Image from "next/image";
import TechContainer from "@/components/techContainer";
import { IoMdBusiness } from "react-icons/io";
import { TbSchool } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

const SchoolIcon = TbSchool as any;
const BusinessIcon = IoMdBusiness as any;
const PersonalIcon = FaRegUser as any;

function ProjectCard({name, type, coverImg, images, tech, link}: any) {

    function iconHandle(type: string){
        switch(type){
            case "School":
                return <TbSchool className="text-[20px] mr-2"/>;
            case "Business":
                return <BusinessIcon className="text-[20px] mr-2"/>;
            case "Personal":
                return <PersonalIcon className="text-[20px] mr-2"/>;
        }
    }

    return (
        <div className="w-[20%] h-[63vh] bg-white shadow-[0_0_20px_1px_rgba(0,0,0,0.5)] rounded-[20px] mx-[1%]  my-[3%] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
            <Image src={coverImg} width={1920} height={1080} alt="info" className="w-[calc(96%)] rounded-[20px] m-[2%] coverImg"/>
            <h1 className="ml-2 mt-[5%] font-semibold text-[1.4vw] projectName"></h1>
            <div className="type w-full ml-2 mb-[2%] flex items-center just">
                {iconHandle(type)}
                <p className="text-[15px]">{type} Project</p>
            </div>
            <p className="ml-2 text-[14px] mt-[15px] mb-[0px]">Tech Involved:</p>
            <div className="projectTechContainer w-full h-auto flex flex-wrap mx-[2%] my-[2%] mt-[-5px]">
                {
                    tech && tech.map((item: any, index: any)=>{
                        return(
                            <TechContainer key={index} name={item}/>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default ProjectCard;