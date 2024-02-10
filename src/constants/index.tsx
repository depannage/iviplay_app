import {DashOutlined} from "@ant-design/icons";

export interface ContextProps {
    current:number,
    setCurrent:React.Dispatch<React.SetStateAction<number>>
    showOrganise:boolean,
    setShowOrganiser:React.Dispatch<React.SetStateAction<boolean>>;
}


export const linkDash=[
    {
        label:"Tableau de bord",
        icon:<DashOutlined/>,
        key:1,
    },
    {
        label:"Tableau de bord",
        icon:<DashOutlined/>,
        key:2,
    },
]