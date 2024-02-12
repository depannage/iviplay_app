import {useAppContext} from "../context/contextProvider.tsx";

interface dats{
    title?:string;
    icons?:React.ReactNode,
    i:number
}
function CradDash({title,icons,i}:dats) {
    const {currentCard}=useAppContext();
    console.log(currentCard)
    console.log(i)


    return (
        <div className={`text-gray-400 w-96 flex items-center gap-2 lg:w-44  h-24 rounded-lg  p-2 text-[14px] border shadow ${title===currentCard ? "bg-darkMain":"bg-[#f4f4f4]"} cursor-pointer`}>
            <h2>{title}</h2>
            <img src={icons ? icons:""} alt="ico" width={30} height={30}/>
        </div>
    );
}

export default CradDash;