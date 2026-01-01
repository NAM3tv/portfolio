import Header from "@/components/header";
import Skill from "@/components/skill";
import skillsData from "@/data/skills.json";

export default function SkillsPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      {/* Contenitore principale che occupa lo spazio rimanente */}
      <div className="flex flex-1 relative h-0">
        
        {/* Wrapper per bloccare le colonne dentro lo schermo */}
        <div className="absolute inset-0 flex">
          
          {/* COLONNA SINISTRA: SKILLS (65%) */}
          <div className="w-[65%] flex flex-col h-full">
            <h1 className="text-2xl font-bold mt-[4vh] ml-[8%] shrink-0">
              Skills & Technologies
            </h1>

            {/* BOX DELLE SKILL CON SCROLLBAR PERSONALIZZATA */}
            <div className="
              w-[80%] ml-[8%] mb-[4vh] mt-5 flex-1 flex flex-wrap justify-center content-start
              overflow-y-auto
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
              {skillsData.map((item, index) => (
                <Skill
                  key={index} 
                  name={item} 
                />
              ))}
            </div>
          </div>

          {/* COLONNA DESTRA: ACHIEVEMENTS (35%) */}
          <div className="w-[35%] flex flex-col h-full relative overflow-hidden">
            <h1 className="text-2xl font-bold mt-[4vh]">Achievements</h1>
            <div className="flex-1 w-[80%] mb-[4vh] rounded-[20px] bg-gray-100 mt-5">
              {/* Contenuto Achievements */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}