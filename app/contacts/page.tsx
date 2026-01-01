import Header from "@/components/header";
import Background from "@/components/background";
export default function Home(){
    return(
        <>
    <div className="flex relative">
      <div className="w-[65%] flex-col items-center">
        <Header />
      </div>
      <div className="w-[35%] h-screen relative overflow-hidden">
          <Background />
      </div>
    </div>
    </>
    )
}