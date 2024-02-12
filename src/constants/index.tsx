import {
    AlerteInscription,
    AlerteView,
    AlerteViewReservation, NbCardInscription,
    NbCardPost,
    NbCardReservation, NbCardUsage, NbInscription,
    NbPostGraphic,
    NbReservationGraphic, ViewUsage
} from "../components";

export interface ContextProps {
    current:number,
    setCurrent:React.Dispatch<React.SetStateAction<number>>
    showOrganise:boolean,
    setShowOrganiser:React.Dispatch<React.SetStateAction<boolean>>;
    currentCard:string,
    setCurrentCard:React.Dispatch<React.SetStateAction<string>>;
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
    searchEntite:string,
    setSearchEntite:React.Dispatch<React.SetStateAction<string>>
    searchOs:string,
    setSearchOs:React.Dispatch<React.SetStateAction<string>>
    searchDatef:string,
    setSearchDatef:React.Dispatch<React.SetStateAction<string>>
    searchDated:string,
    setSearchDated:React.Dispatch<React.SetStateAction<string>>
}

export const poste=[
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
export const reservation=[
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
        key: 1,
        // children: <AlerteView/>,
    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Liste</h1>,
        key: 2,
        children: <AlerteViewReservation/>,

    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Carte</h1>,
        key: 3,
        children: <NbCardReservation/>,

    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Graphic</h1>,
        key: 4,
        children: <NbReservationGraphic/>,
    },
]
export const tauxCo=[
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
        key: 1,
        // children: <AlerteView/>,
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
export const tauxH=[
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
        key: 1,
        // children: <AlerteView/>,
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
export const activeApp=[
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
        key: 1,
        // children: <AlerteView/>,
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
export const connexion=[
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
export const inscription=[
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
        key: 1,
        // children: <Alerte/>,
    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Liste</h1>,
        key: 2,
        children: <AlerteInscription/>,

    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Carte</h1>,
        key: 3,
        children: <NbCardInscription/>,

    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Graphic</h1>,
        key: 4,
        children: <NbInscription/>,
    },
]
export const module=[
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
export const service=[
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
export const download=[
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

{/*statistique d'usage*/}
export const stateUsages=[
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Alerte</h1>,
        key: 1,
        children: <ViewUsage/>,
    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Carte</h1>,
        key: 2,
        children: <NbCardUsage/>,

    },
    {
        label: <h1 className={"lg:w-52 font-bold text-[15px] text-gray-700"}>Graphic</h1>,
        key: 3,
        children: <NbPostGraphic/>,
    },
]