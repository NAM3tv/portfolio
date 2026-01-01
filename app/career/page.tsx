import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header"; // L'alias @ è magico!
import Background from "@/components/background";
import CareerPath from "@/components/careerPath";
import careerData from "@/data/career.json";

export default function Home() {
  let first = true;
  return (
    <div className="flex relative ml-[5%">
      <div className="w-[65%] flex-col items-center">
        <Header />
        <div className="ml-[5%]">
            <h1 className="text-3xl font-bold my-[5vh] ml-[80px]">Career</h1> 
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
            <div className="w-full h-[5vh] relative">
              <div className="absolute w-[5px] ml-[100px] h-[5px] bg-[#42b847] mt-[5px]"></div>
              <div className="absolute w-[5px] ml-[100px] h-[5px] bg-[#42b847] mt-[15px]"></div>
              <div className="absolute w-[5px] ml-[100px] h-[5px] bg-[#42b847] mt-[25px]"></div>
            </div>
        </div>  
      </div>
      <div className="w-[35%] h-screen relative overflow-hidden">
          <Background />
      </div>
    </div>
  );
}
