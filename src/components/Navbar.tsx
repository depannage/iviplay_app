//@ts-nocheck
import React, { useEffect, useState } from "react";
import logo from "../assets/Grouplogo.png";
import { AiOutlineClose,  AiOutlineMenu} from "react-icons/ai";
import {Badge} from "antd";
import {log1,log2,log3,log0} from '../assets'
const Navbar = () => {
    const [opens, setOpens] = useState(false);
    const [opense, setOpense] = useState(false);
    const [active, setActive] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const handleOpenChange = (flag: boolean) => {
        setOpen(flag);
    };

    const handleClickOpenLogin = () => {
        setOpens(true);
    };

    const handleClickentreprise = () => {
        setOpense(true);
    };
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };

    const handlClic = () => {
        setActive(!active);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <div
            className={`fixed w-full h-14 bg-secondary z-[10] top-0 left-0 right-0  ${isScroll && "z-[100]   border-b-2"
            }`}>
            <div className='flex items-center justify-between  w-full h-full p-2'>
                <div className='md:flex-1 cursor-pointer -mt-2'>
                    <img
                        src={logo}
                        alt='Picture of the author'
                        width={70}
                        height={70}
                    />
                </div>
                <div className='hidden lg:flex items-center justify-between w-full   h-full p-2'>
                    <h4>Tableau de Bord</h4>
                    <h4 className={"text-white text-lg font-bold"}>Tableau de Bord</h4>
                    <div className={"flex flex-row items-center gap-2 bg-white w-96 h-8 rounded-lg p-2"}>
                        <span className={"pi pi-search text-gray-500"}></span>
                        <input type={"text"} className={"h-full w-full outline-none text-gray-500"} placeholder={"Rechercher..."}/>
                    </div>
                    <div className={"flex flex-row justify-around ml-14 gap-5"}>
                        <button className={'text-white text-2xl'}>
                            <img src={log0} alt="icon" width={27} height={27}/>
                        </button>
                        <button className={'text-white text-2xl'}>
                            <img src={log1} alt="icon" width={25} height={25}/>
                        </button>
                        <button className={'text-white text-2xl'}>
                            <img src={log2} alt="icon" width={25} height={25}/>
                        </button>

                        <button className={'text-white text-2xl'}>
                            <img src={log3} alt="icon" width={25} height={25}/>
                        </button>
                    </div>
                </div>
                <div className='md:flex-1 text-xl ml-20'>
                    <div className='cursor-pointer z-1000 md:hidden hover:shadow-2xl transform ease-in duration-300' onClick={handlClic} >
                        <AiOutlineMenu size={45} color={"#fff"}/>
                    </div>
                </div>
                <div className='hidden lg:flex flex-row mr-14 justify-around gap-5'>

                </div>
            </div>
            <div
                className={
                    active ? "md:fixed top-0 left-0 w-full h-screen bg-black/70 z-10" : ""
                }>
                {/*in mobile */}
                <div
                    className={
                        active
                            ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-main text-white p-2 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-2 ease-in duration-500 z-0"
                    }>
                    <div className='flex flex-row  justify-between z-[1000] -p-2'>
                        <div className='' onClick={() => router.push("/")}>
                            <img
                                src={logo}
                                alt='Picture of the author'
                                width={70}
                                height={70}
                            />
                        </div>
                        <div
                            onClick={handlClic}
                            className='p-2 mr-2 w-10 h-10 flex items-center justify-center rounded-full shadow-lg cursor-pointer shadow-gray-400'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='my-4 border-b border-gray-300'>
                        <p className='w-[85%] md:w-[90%] py-4 mx-auto '>
                            Que voulez-vous faire ?
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Navbar;
