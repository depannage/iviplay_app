//@ts-nocheck
import {CardDash} from "../components";
import {Tabs} from "antd";
import {itmTabs1} from "../constants";
import {metricsCard} from "../data";
import {useAppContext} from "../context/contextProvider.tsx";

const Dashboard = () => {
    const {setCurrent}=useAppContext()
    const handlChange=(key)=>{
        setCurrent(key)
    }
    return (
        <div className='page flex flex-col  lg:padding-container lg:h-screen'>
            <div  className='flex flex-col justify-center container mx-auto lx:px-0 mt-14 padding-container lg:ml-14 dash'>
                     {/*   list of cards*/}
                <div className={"min-w-full flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:ml-10 lg:mt-5 mt-2"}>
                    {
                        metricsCard?.map((items:any,index:number)=>(
                            <CardDash key={index} title={items.title}/>
                        ))
                    }
                </div>
                <div className={"w-full flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:ml-10 lg:mt-5 mt-2"}>
                    <Tabs items={itmTabs1} className={"w-full"} type={'card'} itemSelectedColor={"#ECB6C3"} onChange={handlChange}/>
                </div>
            </div>
        </div>
    );
 };


 export default Dashboard