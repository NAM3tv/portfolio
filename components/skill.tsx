"use client"
import Image from "next/image";
import { useState } from "react";

function Skill({name}: { name: string }){
    const [isHovered, setIsHovered] = useState("");
    function imgHandle(techName: string){
        switch(techName){
            case "Html":
                return "/img/html.svg";
            case "Css":
                return "/img/css.svg";
            case "Python":
                return "/img/python.svg";
            case "JavaScript":
                return "/img/javascript.svg";
            case "Nginx":
                return "/img/nginx.svg";
            case "FastApi":
                return "/img/fastapi.svg";
            case "Docker":
                return "/img/docker.svg";
            case "PostgreSQL":
                return "/img/postgre.svg";
            case "Electron.js":
                return "/img/electron.svg";
            case "Tailwind":
                return "/img/tailwind.svg";
            case "React.js":
                return "/img/react.svg";
            case "Next.js":
                return "/img/next.svg";
            default: return "";
        }
    }
    const techName = imgHandle(name);

    function handleMouseEnter(){
        setIsHovered("border-2 border-solid border-[#42b847]");
        // Aggiungi qui eventuali effetti al passaggio del mouse
    }
    return (
        <>
            <div onMouseEnter={handleMouseEnter} className={`w-[30%] aspect-square rounded-[20px] self-start m-3 shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center ${isHovered}`}>
                <Image src={techName} width={100} height={100} alt="python logo" className="w-[60%]"/>
                <h2 className="mt-4 font-bold text-[20px]">{name}</h2>
            </div>
        </>
    );
}
export default Skill;