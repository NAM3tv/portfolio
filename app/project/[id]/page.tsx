import Header from "@/components/header";
import { notFound} from "next/navigation";
import TechContainer from "@/components/techContainer"
import Btn from "@/components/btn"
import Image from "next/image";
import projectsData from "@/data/projects.json";
import careerData from "@/data/career.json";
import { IoMdBusiness } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineReportProblem } from "react-icons/md";
import MobileNav from "@/components/mobileNav"


interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Home({ params }: PageProps){
    const { id } = await params;

    const project = projectsData.find((p) => p.id === id);
    if (!project) {
        notFound();
    }

function companyInfos(){
        if(project!.type === "Business"){
            return(
                careerData.filter(career => career.companyName === project?.companyName).map((company, index) =>(
                    <div key={index} className="w-fit flex items-center mt-1 bg-[#f2f3f7] p-2 rounded-[20px] mx-[5%] lg:mx-0">
                        <Image src={company.companyLogo} width={30} height={30} alt="" className="rounded-[10px]"/>
                        <p className="font-bold ml-3 text-[16px]">{company.companyName}</p>
                    </div>
                ))
            )
        }
    }
function github(){
    if(project!.git){
        return(
            <Btn text="GitHub" webLink={"/"} icon={<FaGithub/>} className="lg:w-[30%] lg:mb-0 mb-[15vh] w-full h-[5vh] py-7 border-2 lg:ml-5 lg:mt-0 mt-5 border-[#525657] flex items-center justify-center text-[20px] rounded-[10px] text-[#525657] bg-white cursor-pointer"/>
        )
    }else{
        return(
            <Btn text="Private" icon={<FaGithub/>} className="lg:w-[30%] w-full h-[5vh] lg:mb-0 mb-[15vh] py-7 border-2 border-[red] lg:ml-5 lg:mt-0 mt-5 flex items-center justify-center text-[20px] rounded-[10px] text-[red] opacity-40 bg-white cursor-not-allowed!"/>
        )
    }
}
    return(
        
    <>
    <main className="h-screen flex flex-col">
        <Header/>
        <MobileNav page="projects"/>
        <div className="flex-1 flex lg:flex-row flex-col h-full  z-1 relative animate-spawn overflow-y-auto pb-[10vh]">
            <Image src={project.coverImg} alt="" width={1920} height={1080} className="rounded-[20px] lg:w-[60%] lg:h-[70%] w-[90%] mt-10 ml-[5%] shadow-[0_0_20px_1px_rgba(0,0,0,0.5)]"/>
            <div className="lg:w-[50%] lg:mx-[5%]">
                <h1 className="font-bold lg:text-[2vw] text-2xl projectTitle mb-3 mt-10 mx-[5%] lg:mx-0">{project.name}</h1>
                {project.type === "Business" ? <p className="text-[15px] font-bold flex items-center mx-[5%] lg:mx-0"> <IoMdBusiness className="mr-1 text-[18px]"/> Business</p> : ""}
                {companyInfos()}
                <p className="text-[15px] text-red-500 font-bold flex items-center mt-5 mx-[5%] lg:mx-0"><MdOutlineReportProblem   className="mr-1 text-[18px]"/> Problem </p>
                <p className=" leading-relaxed lg:w-full w-[90%] my-2 relative projectDescription flex items-center mx-[5%] lg:mx-0">{project.problem}</p>
                <p className="text-[15px] font-bold flex items-center mt-5 mx-[5%] lg:mx-0"><HiOutlineLightBulb className="mr-1 text-[18px]"/> Solution </p>
                <p className=" leading-relaxed lg:w-full w-[90%] my-2 relative projectDescription flex items-center mx-[5%] lg:mx-0">{project.description}</p>
                <p className="text-[15px] font-bold flex items-center mt-5 mx-[5%] lg:mx-0"> <RiStackLine className="mr-1 text-[18px]"/> Tech Stack</p>
                <div className="lg:w-full w-[90%] flex flex-wrap content-start mx-[5%] lg:mx-0">
                    {
                        project.tech.map((tech, index) =>
                            <TechContainer
                                key = {index}
                                name = {tech}
                                pxSize = {20}
                            />
                        )
                    }
                    {
                        project.tools.map((tech, index) =>
                            <TechContainer
                                key = {index}
                                name = {tech}
                                pxSize = {20}
                            />
                        )
                    }
                    <div className="flex lg:flex-row flex-col w-full items-center mt-10">
                        <Btn webLink={project.link} text="Web Site" icon={<FiExternalLink/>} className="lg:w-[30%] w-full py-7 text-white border-2 border-[#42b847] rounded-[10px] text-[20px]"/>
                        {github()}
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
    )
}