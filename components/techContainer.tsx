import Image from "next/image";
import { FaReact } from "react-icons/fa";
const ReactIcon = FaReact as any;
function TechContainer({name, pxSize, className}: any ){
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
        <div className={`w-fit h-10 flex items-center justify-center bg-[#f2f3f7] rounded-[20px] p-2.5 mr-[2%] mt-3  border-[#c5f0c8] border-2 text-[#42b847] focus:border-solid focus:border-[#42b847] ${className}`}>
            <Image src={techName} width={pxSize} height={pxSize} alt="" className={`mr-1.25`}/>
            <p className={`text-[${pxSize}]`}>{name}</p>
        </div> 
    );
}
export default TechContainer;