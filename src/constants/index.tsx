export interface ContextProps {
    current:number,
    setCurrent:React.Dispatch<React.SetStateAction<number>>
    showOrganise:boolean,
    setShowOrganiser:React.Dispatch<React.SetStateAction<boolean>>;
}