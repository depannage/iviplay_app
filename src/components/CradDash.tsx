import React from "react";

interface dats{
    title?:string;
    icons?:React.ReactNode

}
function CradDash({title,icons}:dats) {
    return (
        <div className={"w-96 flex items-center gap-2 lg:w-44  h-24 rounded-lg bg-[#f4f4f4] p-2 text-[14px] border shadow "}>
            <h2>{title}</h2>
            {icons}
        </div>
    );
}

export default CradDash;