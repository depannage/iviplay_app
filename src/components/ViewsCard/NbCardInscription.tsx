import CardNbPost from "../cards/CardNbPost.tsx";
import {stateInscrit} from "../../data";

const NbCardInscription = ()=>{
    return(
        <div
            className={"min-w-full flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:mt-5 mt-2"}>
            <CardNbPost total={stateInscrit?.map(objt=>objt.mesure).reduce((acc,val)=>acc+val)} title={"Total de tout les inscriptions"} key={90}/>
            {
                stateInscrit?.map((items:any,index:number)=>(
                    <CardNbPost total={items?.mesure} title={items?.metrique} key={index}/>
                ))
            }
        </div>
    )
}
export default NbCardInscription;