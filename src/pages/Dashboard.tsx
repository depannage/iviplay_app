//@ts-nocheck
import {CardDash, CardDashMobile, NbPostGraphic} from "../components";
import {Tabs} from "antd";
import {
    activeApp,
    connexion,
    download,
    inscription,
    itmTabs1,
    poste,
    reservation,
    service,
    tauxCo,
    tauxH
} from "../constants";
import {metricsCard} from "../data";
import {useAppContext} from "../context/contextProvider.tsx";

const Dashboard = () => {
    const {setCurrent,currentCard}=useAppContext()
    const handlChange=(key)=>{
        setCurrent(key)
    }

    return (
        <div className='page flex flex-col  lg:padding-container lg:h-screen'>
            <div  className='w-[100%] h-[100%] flex flex-col  container mx-auto lx:px-0 mt-14 padding-container lg:ml-14 dash'>

                <div className={"lg:hidden w-[96%]"}>

                </div>
                <div className={"hidden min-w-full lg:flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:ml-10  mt-2"}>
                    {
                        metricsCard?.map((items:never,index:number)=>(
                            <CardDash key={index} title={items.title} icons={items?.icone}/>
                        ))
                    }
                </div>
                <div className={"lg:hidden w-[100%]"}>
                    <CardDashMobile/>
                </div>
                <Tabs items={
                    currentCard=="Nombre de post publies" ? poste: currentCard=="Nombre de reservation de salle" ? reservation: currentCard=="Taux d'humidite" ? tauxH :currentCard=="Taux de CO²" ? tauxCo :currentCard=="Nombre d'inscriptions aux formulaires" ? inscription: currentCard=="Nombre de connexions via le module d’authentification" ? connexion : currentCard=="Nombre de services actifs" ? service :currentCard=="Nombre de telechargements unitaires" ? download :currentCard=="Nombre d’activations de l’application"? activeApp:""
                } className={"min-w-full lg:ml-10 mt-5  lg:mt-14"} type={'card'} onChange={handlChange} defaultActiveKey={2}/>
            </div>
        </div>
    );
 };


 export default Dashboard