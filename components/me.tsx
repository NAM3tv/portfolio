import Image from "next/image";
function Me(){
    return (
    <div className="lg:absolute relative mt-3 w-60 h-60 lg:w-[30vw] lg:h-[30vw] rounded-[50%] border-[#42b847] border-solid border-10 lg:border-20 z-1 flex items-center justify-center  bg-white lg:top-1/2 lg:-translate-y-1/2 lg:left-[50%] lg:translate-x-0">
        <div className=" lg:w-[80%] lg:h-[80%] w-[90%] h-[90%] rounded-[50%] border-[#42b847] border-solid border-10 lg:border-20 z-1 flex items-center justify-center overflow-hidden bg-linear-to-t from-[#50b455] to-white ">
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