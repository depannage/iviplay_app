//@ts-nocheck

import {useAppContext} from "../context/contextProvider.tsx";

interface dats{
    title?:string;
    icons?:React.ReactNode,
}
function CradDash({title,icons}:dats) {
    const {currentCard,setCurrentCard}=useAppContext();

    const allChange=(e)=>{
        setCurrentCard(e.target.innerText)
    }
    return (
        <div className={`text-gray-400 lg:w-44 flex items-center gap-2 w-72  h-24 rounded-lg text-[16px] mt-5 p-2 lg:text-[14px] border shadow ${title===currentCard ? "bg-main text-gray-200":"bg-[#f4f4f4]"} cursor-pointer`} title={title} onClick={allChange}>
            <h2 className={"text-[14px]"}>{title}</h2>
            <img src={icons ? icons:""} alt="ico" width={30} height={30}/>
        </div>
    );
}

export default CradDash;