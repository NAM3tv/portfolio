"use client"
import { useRouter } from "next/navigation";
import {btnProps} from "@/types";   

function Btn({text, icon, className, webLink, siteLink}: btnProps){
    const router = useRouter();
    function redirect(){
        if (typeof webLink === "string") {
            window.open(webLink, "_blank", "noopener,noreferrer");
        }
        if(siteLink){
            router.push(siteLink);
        }
    }
    const oldClass = "bg-[#42b847] w-[20%] h-[7%] ml-[15%] flex items-center justify-center cursor-pointer mt-[5%] shadow-[0_0_10px_2px_#42b847]"
    return (
        <div onClick={redirect} className={` h-[5vh] flex items-center justify-center cursor-pointer bg-[#42b847] ${className}`}>
            {icon}
            <p className="text-[18px] m-0 p-0 ml-[5%]">{text}</p>
        </div> 
    );
}
export default Btn;