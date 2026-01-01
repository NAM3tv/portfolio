import Header from "@/components/header";
import Background from "@/components/background"
import ProjectCard from "@/components/projectCard";
import projectsData from "@/data/projects.json";
export default function Home(){
    return(
        <>
        <Background clipPath="polygon(0% 75%, 100% 45%, 100% 68%, 0% 100%)"/>
        <Header/>
        <h1 className="text-3xl font-bold mt-[5vh] ml-[7%]">Projects</h1> 
        <div className="w-full h-auto relative z-1 flex flex-wrap justify-center
            /* 1. Nasconde le frecce e personalizza la larghezza */
            [&::-webkit-scrollbar]:w-[8px]
            [&::-webkit-scrollbar-button]:hidden
            /* 2. Personalizza il binario (track) */
            [&::-webkit-scrollbar-track]:bg-transparent
            /* 3. Personalizza la maniglia (thumb) */
            [&::-webkit-scrollbar-thumb]:bg-black/20
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:border-[2px]
            [&::-webkit-scrollbar-thumb]:border-transparent
            [&::-webkit-scrollbar-thumb]:bg-clip-content
            /* 4. Hover sulla maniglia */
            hover:[&::-webkit-scrollbar-thumb]:bg-green-500
            /* 5. Supporto Firefox */
            [scrollbar-width:thin]
            [scrollbar-color:rgba(0,0,0,0.2)_transparent]
        ">
            
            {
                projectsData.map((item, index)=>{
                    return(
                        <ProjectCard
                        key={index}
                        name={item.name}
                        type={item.type}
                        coverImg={item.coverImg}
                        tech={item.tech}
                        />
                    );
                })
            }
        </div>
        </>
    )
}