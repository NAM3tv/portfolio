"use client"
import Image from "next/image";
import { AiOutlineTool } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import {SkillProps} from "@/types";
import { techIcons } from "@/data/constants";


function Skill({name, onClick, isActive, type}: SkillProps) {
    function imgHandle(techName: string){
        return techIcons[techName]; // Ritorna un'icona di default se non troviamo il nome
    }
    const techName = imgHandle(name);

    return (
        <>
            <div onClick={onClick} className={`lg:w-[20%] w-[35%] shrink-0  relative aspect-square rounded-[20px] lg:self-start m-3 shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:scale-105 ${isActive ? 'border-4 border-[#42b847]' : 'border-transparent'}`}>
                <Image src={techName} width={100} height={100} alt="" className="w-[50%]"/>
                {type === "tool" ? <AiOutlineTool className="absolute text-[25px] top-1.5 left-1.5"/> : type === "api" ? <TbApi className="absolute text-[25px] top-1.5 left-1.5" /> : ""}
                <h2 className="mt-3 font-bold lg:text-[20px]">{name}</h2>
            </div>
        </>
    );
}
export default Skill;