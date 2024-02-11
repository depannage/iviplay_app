//@ts-nocheck

import {nbposte} from "../../assets";
interface tot {
    title?:string,
    total?:number,
}
const CardNbPost = ({title,total}:tot)=>{
    return (
        <div
            className={'flex flex-col gap-2  w-[95%] lg:w-56 h-44 rounded-lg  hover:shadow-lg hover:cursor-pointer p-4 bg-[#f4f4f4]'}>
            <img src={nbposte} alt="" width={35} height={35}/>
            <h4 className={"text-gray-500 font-bold"}>{title}</h4>
            <h1 className={"text-lg font-bold"}>{total}</h1>
        </div>
    )
}

export default CardNbPost;