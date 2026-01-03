"use client"
import Image from "next/image";
import { useState } from "react";
import { AiOutlineTool } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
const ToolIcon = AiOutlineTool as any;
const ApiIcon = TbApi as any;

function Skill({name, onClick, isActive, type}: { name: string , onClick?: () => void, isActive:boolean, type:string}) {
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
            case "LeafLet":
                return "/img/leafLet.svg";
            case "Git":
                return "/img/git.svg";
            case "OpenAI SDK":
                return "/img/openai.svg";
            case "Stripe":
                return "/img/stripe.svg";
            case "BeautifulSoup":
                return "/img/beautifulSoup.svg"
            default: return "/";
        }
    }
    const techName = imgHandle(name);

    return (
        <>
            <div onClick={onClick} className={`w-[20%] relative aspect-square rounded-[20px] self-start m-3 shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:scale-105 ${isActive ? 'border-4 border-[#42b847]' : 'border-transparent'}`}>
                <Image src={techName} width={100} height={100} alt="python logo" className="w-[50%]"/>
                {type === "tool" ? <ToolIcon className="absolute text-[25px] top-1.5 left-1.5"/> : type === "api" ? <ApiIcon className="absolute text-[25px] top-1.5 left-1.5" /> : ""}
                <h2 className="mt-3 font-bold text-[20px]">{name}</h2>
            </div>
        </>
    );
}
export default Skill;