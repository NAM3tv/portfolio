"use client"
import Header from "@/components/header";
import Skill from "@/components/skill";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import { useState, useEffect, useRef } from "react";
import Achivment from "@/components/achivment";
import MobileNav from "@/components/mobileNav"

export default function SkillsPage() {

  const [selectedSkill, setSelectedSkill] = useState<string | null>("React.js");
  const [topic, setTopic] = useState<string | null>("Tech");
  const onFocusBtnClass = "bg-[#42b847] text-white"

  function topicHadle(topicName: string){
    if(topicName === "Tech"){
      return (
        skillsData.skills.map((item, index) =>   
              (
                <Skill
                  key={index} 
                  name={item} 
                  onClick ={() => setSelectedSkill(item)}
                  isActive = {item === selectedSkill}
                  type = ""
                />
              ))
      );
    }
    if(topicName === "Tools & APIs"){
      return(
        <>
        {skillsData.tools.map((item, index) =>   
              (
                <Skill
                  key={index} 
                  name={item} 
                  onClick ={() => setSelectedSkill(item)}
                  isActive = {item === selectedSkill}
                  type="tool"
                />
              ))}
        {skillsData.apis.map((item, index) =>   
              (
                <Skill
                  key={index} 
                  name={item} 
                  onClick ={() => setSelectedSkill(item)}
                  isActive = {item === selectedSkill}
                  type="api"
                />
              ))}
        </>
      ) 
    }
  }


  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <MobileNav page="skills"/>
      <Header />

      {/* Contenitore principale che occupa lo spazio rimanente */}
      <div className="flex flex-1 relative h-0 overflow-auto">
        
        {/* Wrapper per bloccare le colonne dentro lo schermo */}
        <div className="absolute inset-0 flex lg:flex-row flex-col">
          
          {/* COLONNA SINISTRA: SKILLS (65%) */}
          <div className="lg:w-[65%] flex flex-col lg:h-full">
            <h1 className="text-2xl font-bold mt-[3vh] lg:ml-[9%] ml-[5%] shrink-0">
              Skills & Technologies
            </h1>
            <div className="w-full mt-5">
              <button onClick={() => {setTopic("Tech"); setSelectedSkill("React.js")}} className={`lg:ml-[9%] ml-[5%] cursor-pointer border-2 border-[#42b847] rounded-[20px] py-1 px-4 transition-all duration-300 ${topic === "Tech" ? onFocusBtnClass :"" }`}>Tech</button>
              <button onClick={() => {setTopic("Tools & APIs"); setSelectedSkill("OpenAI SDK")}} className={` ml-5 cursor-pointer border-2 border-[#42b847] rounded-[20px] py-1 px-3 transition-all duration-300 ${topic === "Tools & APIs" ? onFocusBtnClass : ""}`}>Tools & APIs</button>
            </div>
            <div key={topic} className="
              lg:w-[80%]  w-[90%] lg:ml-[8%] mx-[5%] lg:mb-[3vh] mt-5 lg:flex-1 flex lg:flex-wrap content-start animate-spawn
              overflow-x-auto
              /* Classi per la scrollbar senza frecce */
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-button]:h-0
              [&::-webkit-scrollbar-button]:w-0
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-black/20
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:border-2
              [&::-webkit-scrollbar-thumb]:border-transparent
              [&::-webkit-scrollbar-thumb]:bg-clip-content
              hover:[&::-webkit-scrollbar-thumb]:bg-[#42b847]
              [scrollbar-width:thin]
              [scrollbar-color:rgba(0,0,0,0.2)_transparent]
            ">
              {topicHadle(topic!)}
            </div>
          </div>

          {/* COLONNA DESTRA: ACHIEVEMENTS (35%) */}
          <div className="lg:w-[35%] flex flex-col lg:h-full h-auto relative lg:overflow-hidden">
            <h1 className="text-2xl font-bold lg:mt-[4vh] mt-[2vh] lg:mx-0 mx-5">Achievements</h1>
            <div key={selectedSkill} className="lg:flex-1 h-full flex-col flex lg:w-[80%] w-[90%] lg:mb-[4vh] mt-5 animate-spawn lg:overflow-y-auto lg:mx-0 mx-5 mb-[15vh] pb-[15vh]
            /* Classi per la scrollbar senza frecce */
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-button]:h-0
              [&::-webkit-scrollbar-button]:w-0
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-black/20
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:border-2
              [&::-webkit-scrollbar-thumb]:border-transparent
              [&::-webkit-scrollbar-thumb]:bg-clip-content
              hover:[&::-webkit-scrollbar-thumb]:bg-[#42b847]
              [scrollbar-width:thin]
              [scrollbar-color:rgba(0,0,0,0.2)_transparent]
            ">
              <p className="mb-4">{selectedSkill}</p>
              {
                projectsData.filter(project => 
                  project.tech.includes(selectedSkill!) || project.tools.includes(selectedSkill!)
                ).map((filteredProject, index) => 
                  <Achivment 
                    key={index} 
                    id= {filteredProject.id}
                    img={filteredProject.coverImg} 
                    name={filteredProject.name}
                  />
                )
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}