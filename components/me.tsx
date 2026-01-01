import Image from "next/image";
function Me(){
    return (
        <div className="absolute w-[30vw] h-[30vw] rounded-[50%] border-[#42b847] border-solid border-20 z-1 flex items-center justify-center top-1/2 -translate-y-1/2 left-[50%] bg-white">
        <div className=" w-[80%] h-[80%] rounded-[50%] border-[#42b847] border-solid border-20 z-1 flex items-center justify-center overflow-hidden bg-linear-to-t from-[#50b455] to-white">
            <Image 
            src="/img/pixgenie_1762528408931.png" 
            alt="Descrizione immagine" 
            width={1000}        // Valore indicativo per la risoluzione
            height={1000}       // Se l'immagine è quadrata, usa lo stesso valore
            className="w-full h-auto mt-[40%]" 
            priority            // Consigliato se l'immagine è nella parte alta della pagina
            />
        </div>
    </div>
    );
}
export default Me;