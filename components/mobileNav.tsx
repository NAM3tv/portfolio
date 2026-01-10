import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuBookMarked } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";


function MobileNav({page}:{page:string}){
    const onFocus = "bg-[#f2f3f7] text-[#42b847]"
    return (
        <>
        <div className="lg:hidden w-[90%] items-center justify-center flex shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] rounded-[30px] fixed bottom-0 left-1/2 -translate-x-1/2 z-3 bg-white mb-3">
            <div className="w-[90%] py-2 flex items-center justify-center">
                <Link href="/" className={`text-2xl px-5 py-3  rounded-[20px] ${page === "home" ? onFocus : ""}`}><GoHome /></Link>
                <Link href="/career" className={`text-2xl px-5 py-3  rounded-[20px] ${page === "career" ? onFocus : ""}`}><LuBriefcaseBusiness /></Link>
                <Link href="/projects" className={`text-2xl px-5 py-3  rounded-[20px] ${page === "projects" ? onFocus : ""}`}><AiOutlineFundProjectionScreen /></Link>
                <Link href="/skills" className={`text-2xl px-5 py-3  rounded-[20px] ${page === "skills" ? onFocus : ""}`}><LuBookMarked /></Link>
                <Link href="/contacts" className={`text-2xl px-5 py-3  rounded-[20px] ${page === "contacts" ? onFocus : ""}`}><FaRegUser /></Link>
            </div>
        </div>
        </>
    );
}
export default MobileNav;