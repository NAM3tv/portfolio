import Header from "@/components/header";
import Background from "@/components/background";
import Skill from "@/components/skill";
import skillsData from "@/data/skills.json";

export default function Home() {

    return (
        // Il contenitore principale occupa tutta l'altezza dello schermo
        <div className="flex flex-col h-screen overflow-hidden">
            <Header />

            {/* 1. KEY FIX: flex-1 + h-0 + relative. 
               Questo div ora occupa lo spazio rimanente e NON può crescere oltre */}
            <div className="flex flex-1 relative h-0">
                
                {/* 2. KEY FIX: absolute inset-0. 
                   Questo blocca le due colonne dentro lo spazio del padre */}
                <div className="absolute inset-0 flex">
                    
                    {/* Colonna Sinistra */}
                    <div className="w-[65%] flex flex-col h-full">
                        <h1 className="text-2xl font-bold mt-[4vh] ml-[8%] shrink-0">
                            Skills & Technologies
                        </h1> 
                        
                        {/* 3. overflow-y-auto ora funzionerà perché l'altezza è finalmente bloccata dal padre absolute */}
                        <div className="w-[80%] flex ml-[8%] mb-[4vh] mt-5 flex-1 justify-center flex-wrap overflow-y-auto content-start p-4">
                            {
                                skillsData.map((item, index) => {
                                    return (
                                        <Skill
                                            key={index}
                                            name={item}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>

                    {/* Colonna Destra */}
                    <div className="w-[35%] flex flex-col h-full">
                        <h1 className="text-2xl font-bold mt-[4vh] ml-[0%] shrink-0">Achievements</h1> 
                        <div className="flex-1 w-[80%] mb-[4vh] rounded-[20px] bg-gray-200"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}