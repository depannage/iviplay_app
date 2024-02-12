//@ts-nocheck
import {CardDash, NbPostGraphic} from "../components";
import {Tabs} from "antd";
import {itmTabs1} from "../constants";
import {metricsCard} from "../data";
import {useAppContext} from "../context/contextProvider.tsx";

const Dashboard = () => {
    const {setCurrent,current}=useAppContext()
    const handlChange=(key)=>{
        setCurrent(key)
    }
    return (
        <div className='page flex flex-col  lg:padding-container lg:h-screen'>
            <div  className='w-[100%] h-[100%] flex flex-col  container mx-auto lx:px-0 mt-14 padding-container lg:ml-14 dash'>
                     {/*   list of cards*/}
                <div className={"hidden min-w-full lg:flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:ml-10  mt-2"}>
                    {
                        metricsCard?.map((items:any,index:number)=>(
                            <CardDash key={index} title={items.title}/>
                        ))
                    }
                </div>
                <Tabs items={itmTabs1} className={"min-w-full ml-3"} type={'card'} onChange={handlChange} defaultActiveKey={2}/>
            </div>
        </div>
    );
 };


 export default Dashboard