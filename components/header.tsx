import Link from "next/link";


function Header(){
    return (
        <header className="hidden w-full justify-center items-center text-[1.2vw] font-medium py-[1%] z-1 lg:flex">
            <Link href="/" className="text-[#42b847] font-allura font-bold text-[2.2vw] cursor-pointer">Glavan</Link>
            <Link href="/career" className="mx-[5%] cursor-pointer">Career</Link>
            <Link href="/projects" className="cursor-pointer mr-[5%]">Projects</Link>
            <Link href="/skills" className="mr-[5%]">Skills</Link>
            <Link href="/contacts">Contacts</Link>
        </header>
    );
}
export default Header;