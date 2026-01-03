import Header from "@/components/header";
import { notFound } from "next/navigation";
import TechContainer from "@/components/techContainer"
import Image from "next/image";
import projectsData from "@/data/projects.json";
import careerData from "@/data/career.json";
import { IoMdBusiness } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";

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
                <div className="bg-[#42b847] w-[30%] h-[9%] mt-10 flex items-center justify-center text-white shadow-[0_0_10px_2px_#42b847] cursor-pointer projectLinkBtn">
                    <p>Web Site</p>
                </div>
            </div>
        </div>
    </main>
    </>
    )
}