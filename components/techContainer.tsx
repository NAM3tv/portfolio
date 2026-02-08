import Image from "next/image";
import { techIcons } from "@/data/constants";
function TechContainer({name, pxSize, className}: any ){
    function imgHandle(techName: string){
        return techIcons[techName];
    }
    const techName = imgHandle(name);

    return (
        <div className={`w-fit h-10 flex items-center justify-center bg-[#f2f3f7] rounded-[20px] p-2.5 mr-[2%] mt-3  border-[#c5f0c8] border-2 text-[#42b847] focus:border-solid focus:border-[#42b847] ${className}`}>
            <Image src={techName} width={pxSize} height={pxSize} alt="" className={`mr-1.25`}/>
            <p className={`text-[${pxSize}]`}>{name}</p>
        </div> 
    );
}
export default TechContainer;