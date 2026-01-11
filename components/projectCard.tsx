"use client";
import Image from "next/image";
import TechContainer from "@/components/techContainer";
import { IoMdBusiness } from "react-icons/io";
import { TbSchool } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";


const SchoolIcon = TbSchool as any;
const BusinessIcon = IoMdBusiness as any;
const PersonalIcon = FaRegUser as any;

function ProjectCard({id, name, type, coverImg, tech}: any) {
    const router = useRouter();
    function iconHandle(type: string){
        switch(type){
            case "School":
                return <TbSchool className="lg:text-[20px] mr-2"/>;
            case "Business":
                return <BusinessIcon className="lg:text-[20px] mr-2"/>;
            case "Personal":
                return <PersonalIcon className="lg:text-[20px] mr-2"/>;
        }
    }

    function clickHandle(id:string){
        router.push(`/project/${id}`);
    }

    return (
        <div onClick={() => clickHandle(id)} className="flex flex-row lg:flex-col lg:w-[20%] w-[90%] ml-[5%] lg:ml-0 lg:h-[63vh] bg-white shadow-[0_0_20px_1px_rgba(0,0,0,0.5)] rounded-[20px] mx-[1%]  my-[3%] overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
            <Image src={coverImg} width={1920} height={1080} alt="info" className="lg:w-[calc(96%)] w-[40%] rounded-[20px] m-[2%]"/>
            <div className="">
                <h1 className="ml-2 mt-1 font-semibold lg:text-[1.2vw] projectName">{name}</h1>
                <div className="type w-full ml-2 flex items-center just">
                    {iconHandle(type)}
                    <p className="text-[15px]">{type} Project</p>
                </div>
                <p className="ml-2 text-[14px] mt-[15px] mb-[0px] lg:block hidden">Tech Involved:</p>
                <div className="w-full h-auto flex-1 min-h-0 hidden flex-wrap px-[2%] my-[2%] mt-[-5px] overflow-y-auto content-start lg:flex ">
                    {
                        tech && tech.map((item: string, index: any)=>{
                            return(
                                <TechContainer key={index} name={item} pxSize={13}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;