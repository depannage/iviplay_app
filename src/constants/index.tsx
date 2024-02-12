import {AlerteView, NbCardPost, NbPostGraphic} from "../components";

export interface ContextProps {
    current:number,
    setCurrent:React.Dispatch<React.SetStateAction<number>>
    showOrganise:boolean,
    setShowOrganiser:React.Dispatch<React.SetStateAction<boolean>>;
    currentCard:string,
    setCurrentCard:React.Dispatch<React.SetStateAction<string>>
}

export const itmTabs1=[
        {
            label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
            key: 1,
            children: <AlerteView/>,
        },
        {
            label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Liste</h1>,
            key: 2,
            children: <AlerteView/>,

        },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Carte</h1>,
        key: 3,
        children: <NbCardPost/>,

    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Graphic</h1>,
        key: 4,
        children: <NbPostGraphic/>,
    },
]
