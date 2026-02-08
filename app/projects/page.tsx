import Header from "@/components/header";
import Background from "@/components/background"
import ProjectCard from "@/components/projectCard";
import projectsData from "@/data/projects.json";
import MobileNav from "@/components/mobileNav"

export default function Home(){
    return(
        <>
        <Background clipPath="polygon(0% 55%, 100% 25%, 100% 70%, 0% 100%)" className="mt-10 lg:mt-30"/>
        <main className="w-full h-screen flex flex-col overflow-y-auto ">
            <Header/>
            {/* Contenitore scrollabile */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mt-[5vh] mb-2 ml-[7%] shrink-0">Projects</h1> 
                {/* Contenitore flex per i card */}
                <div className="w-full relative flex lg:flex-wrap lg:flex-row flex-col justify-center animate-spawn pb-[25vh] lg:pb-0">
                    {
                        projectsData.map((item, index)=>{
                            return(
                                <ProjectCard
                                key={index}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                coverImg={item.coverImg}
                                tech={item.tech}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </main>
        
        </>
    )
}