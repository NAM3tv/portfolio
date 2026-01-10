import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // L'alias @ è magico!
import Background from "@/components/background";
import CareerPath from "@/components/careerPath";
import careerData from "@/data/career.json";
import MobileNav from "@/components/mobileNav"

export default function Home() {
  let first = true;
  return (
    <div className="flex relative ml-[5%] mb-[15vh]">
      <div className="lg:w-[65%] w-[95%] flex-col items-center">
        <Header />
        <MobileNav page="career"/>
        <div className="ml-[5%] animate-spawn">
            <h1 className="text-3xl font-bold my-[5vh] lg:ml-[80px]">Career</h1> 
            {
              careerData.map((item, index) => {
                return(
                <CareerPath
                key={index}
                companyName={item.companyName}
                startDate={item.startDate}
                finishDate={item.finishDate}
                location = {item.location}
                companyLogo={item.companyLogo}
                role={item.role}
                tasks={item.tasks}
                webLink={item.webLink}
                className={index === 0 ? "firstCareerElement" : ""}
                />
                
                );
              })
              
            }
            <div className="w-full h-[5vh] lg:ml-[100px] ml-7 relative">
              <div className="absolute w-[5px]  h-[5px] bg-[#42b847] mt-[5px]"></div>
              <div className="absolute w-[5px]  h-[5px] bg-[#42b847] mt-[15px]"></div>
              <div className="absolute w-[5px]  h-[5px] bg-[#42b847] mt-[25px]"></div>
            </div>
        </div>  
      </div>
      <div className="w-[35%] h-screen relative overflow-hidden lg:block hidden">
          <Background />
      </div>
    </div>
  );
}
