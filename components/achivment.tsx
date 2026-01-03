import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
const LinkIcon = FiExternalLink as any;
type AchivmentProps = {
  id: string;
  img: string;
  name: string;
};
function Achivment({id, img, name} : AchivmentProps){
    const router = useRouter();
    function clickHandle(idPage: string){
        router.push(`/project/${idPage}`);
    }
    return (
        <>
            <div onClick={() => clickHandle(id)} className="w-full h-30 rounded-[20px] border-3 border-[#42b847] flex items-center p-4 my-5 cursor-pointer">
                <Image src={img} width={1920} height={1080} alt="" className="w-30 rounded-[10px]"/>
                <p className="ml-5 text-[20px] font-bold flex items-center">{name}{<LinkIcon className="ml-1 text-[20px]"/>}</p>
            </div>
        </>
    );
}
export default Achivment; 