"use client"
import Header from "@/components/header"; // L'alias @ è magico!
import Background from "@/components/background";
import CareerPath from "@/components/careerPath";
import careerData from "@/data/career.json";
import CareerPathMobile from "@/components/mobileCareerPath";

export default function Home() {
  return (
    <>
    <main className="w-full h-screen flex flex-col overflow-y-auto ">
      <div className="flex relative lg:mb-0 w-full lg:ml-0  mb-[25vh]">
        <div className="lg:w-[65%] w-[95%] flex-col items-center">
          <Header />
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
                  isFirst = {index === 0 ? true : false}
                  
                  />
                  
                  );
                })
                
              }
              {
                careerData.map((item, index) => {
                  return(
                  <CareerPathMobile
                  key={index}
                  companyName={item.companyName}
                  startDate={item.startDate}
                  finishDate={item.finishDate}
                  location = {item.location}
                  companyLogo={item.companyLogo}
                  role={item.role}
                  tasks={item.tasks}
                  webLink={item.webLink}
                  
                  />
                  
                  );
                })
                
              }
              <div className="w-[95%] h-[5vh] lg:ml-[100px] ml-7 relative">
                <div className="absolute w-[5px]  h-[5px] bg-[#42b847] mt-[5px]"></div>
                <div className="absolute w-[5px]  h-[5px] bg-[#42b847] mt-[15px]"></div>
                <div className="absolute w-[5px]  h-[5px] bg-[#42b847] mt-[25px]"></div>
              </div>
          </div>  
        </div>
        <div className="fixed lg:block hidden top-0 right-0 w-[35%] h-screen z-0">
                <Background />
        </div>
      </div>
    </main>
    </>
  );
}
