//@ts-nocheck

import {Form, Select, Tabs} from "antd";
import {
     stateUsages
} from "../../constants";

import {useAppContext} from "../../context/contextProvider.tsx";
import {usageState} from "../../data";

const StateUsage = () => {
    const {setCurrent,currentCard,setSearchEntite,setSearchDatef,setSearchDated,setSearchOs}=useAppContext()
    const handlChange=(key)=>{
        setCurrent(key)
    }

    return (
        <div className='page flex flex-col  lg:padding-container lg:h-screen'>
            <div  className='w-[100%] h-[100%] flex flex-col  container mx-auto lx:px-0 mt-14 padding-container lg:ml-14 dash'>
                <div
                    className={"w-full lg:flex flex-col lg:flex-row flex-wrap justify-start items-center gap-5 lg:ml-10  mt-2"}>

                    <Form.Item className={"lg:w-56 w-[95%] "} label={"Date Debut"} labelAlign={"left"}>
                        <input type={"date"}
                               placeholder={"Date Fin"} className={"w-[100%] h-10 border outline-none p-2 rounded-lg"} onChange={(e:any)=>setSearchDated(e.target.value)}/>
                    </Form.Item>
                    <Form.Item className={"lg:w-56 w-[95%] "} label={"Date Fin"} labelAlign={"left"}>
                        <input type={"date"}
                               placeholder={"Date Fin"} className={"w-[100%] h-10 border outline-none p-2 rounded-lg"} onChange={(e:any)=>setSearchDatef(e.target.value)}/>
                    </Form.Item>
                    <Form.Item className={"lg:w-44 w-[95%] h-12"} label={"Entite"} labelAlign={"left"}>
                        <Select size={"large"} showSearch={true}   className={"w-[100%]"} options={[
                            {
                                value:"Iviplay",
                                label:'Iviplay'
                            }
                        ]} defaultValue={"Iviplay"} onChange={(value:string)=>setSearchEntite(value)}/>
                    </Form.Item>
                    <Form.Item className={"lg:w-44 w-[95%] h-12"} label={"Os"} labelAlign={"left"}>
                        <Select size={"large"} showSearch={true}   className={"w-[100%]"}
                                options={
                            usageState.map((ites:any)=>(
                                {
                                    label:ites.os,
                                    value:ites.os
                                }
                            ))
                        } onChange={(value:string)=>setSearchOs(value)}/>
                    </Form.Item>
                </div>
                <Tabs items={stateUsages} className={"min-w-full lg:ml-10 mt-5"} type={'card'} onChange={handlChange}
                      defaultActiveKey={1}/>
            </div>
        </div>
    );
};


export default StateUsage