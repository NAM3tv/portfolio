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
                    <div key={index} className="w-fit flex items-center mt-1 bg-[#f2f3f7] p-2 rounded-[20px]">
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
            <Btn text="GitHub" webLink={"/"} icon={<FaGithub/>} className="w-[30%] h-[5vh] py-7 border-2 border-[#525657] ml-5 flex items-center justify-center text-[20px] rounded-[10px] text-[#525657] bg-white cursor-pointer"/>
        )
    }else{
        return(
            <Btn text="GitHub" icon={<FaGithub/>} className="w-[30%] h-[5vh] py-7 border-2 border-[red] ml-5 flex items-center justify-center text-[20px] rounded-[10px] text-[red] opacity-40 bg-white cursor-default!"/>
        )
    }
}
    return(
        
    <>
    <main className="h-screen flex flex-col">
        <Header/>
        <div className="flex-1 flex w-full  z-1 relative animate-spawn overflow-y-auto">
            <Image src={project.coverImg} alt="" width={1920} height={1080} className="rounded-[20px] w-[60%] h-[70%] mt-10 ml-[5%] shadow-[0_0_20px_1px_rgba(0,0,0,0.5)]"/>
            <div className="w-[50%] mx-[5%]">
                <h1 className="font-bold text-[2vw] projectTitle mb-3 mt-10">{project.name}</h1>
                {project.type === "Business" ? <p className="text-[15px] flex items-center"> <IoMdBusiness className="mr-1"/> Business</p> : ""}
                {companyInfos()}
                <p className="text-[15px] flex items-center mt-5"><MdOutlineDescription className="mr-1"/> Description </p>
                <p className=" leading-relaxed w-full my-2 relative projectDescription flex items-center ">{project.description}</p>
                <p className="text-[15px] flex items-center mt-5"> <RiStackLine className="mr-1"/> Tech Stack</p>
                <div className="w-full flex flex-wrap content-start">
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
                </div>
                <div className="flex w-full items-center mt-10">
                    <Btn webLink={project.link} text="Web Site" icon={<FiExternalLink/>} className="w-[30%] py-7 text-white border-2 border-[#42b847] rounded-[10px] text-[20px]"/>
                    {github()}
                </div>
            </div>
        </div>
    </main>
    </>
    )
}