import CardNbPost from "../cards/CardNbPost.tsx";
import {metricNbPostAlerte} from "../../data";

const NbCardPost = ()=>{
    return(
        <div
            className={"min-w-full flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:mt-5 mt-2"}>
            <CardNbPost total={metricNbPostAlerte.map(objt=>objt.mesure).reduce((acc,val)=>acc+val)} title={"Total de tout les postes Publier"} key={90}/>
            {
                metricNbPostAlerte.map((items:any,index:number)=>(
                    <CardNbPost total={items?.mesure} title={items?.metrique} key={index}/>
                ))
            }
        </div>
    )
}
export default NbCardPost;