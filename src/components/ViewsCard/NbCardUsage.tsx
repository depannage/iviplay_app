import CardNbPost from "../cards/CardNbPost.tsx";
import {usageState} from "../../data";
import {useAppContext} from "../../context/contextProvider.tsx";

const NbCardUsage = ()=>{
    const {search,searchEntite,searchOs,searchDated}=useAppContext()
    let dts1=[];

    dts1=usageState.filter(item=>item.metrique.toLowerCase()==search.toLowerCase() ||item.unite==search.toLowerCase() ||item.entite==search.toLowerCase()|| item.mesure==search || item.os.toLowerCase()==search.toLowerCase()||item.entite.toLowerCase()==searchEntite.toLowerCase()||item.os.toLowerCase()==searchOs.toLowerCase()||item.dates==new Date(searchDated).toDateString())

    return(
        <div
            className={"min-w-full flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:mt-5 mt-2"}>
            <CardNbPost total={ (dts1.length>0 ?dts1:usageState)?.map(objt=>objt.mesure).reduce((acc,val)=>acc+val)} title={"Total Utilisation"} key={90}/>
            {
                (dts1.length>0 ?dts1:usageState)?.map((items:any,index:number)=>(
                    <CardNbPost total={items?.mesure} title={items?.metrique} key={index}/>
                ))
            }
        </div>
    )
}
export default NbCardUsage;