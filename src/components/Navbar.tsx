//@ts-nocheck
import React, { useEffect, useState } from "react";
import logo from "../assets/Grouplogo.png";
import {
    AiOutlineClose,
    AiOutlineMenu,
} from "react-icons/ai";


// fin items
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
            <div className='flex items-center justify-around  w-full h-full p-6'>
                <div className='md:flex-1 cursor-pointer -mt-2'>
                    <img
                        src={logo}
                        alt='Picture of the author'
                        width={80}
                        height={80}
                    />
                </div>
                <div className='hidden ml-32 lg:flex items-center justify-center   h-full p-6'>
                    <ul className='flex items-center justify-center  w-full h-full p-6 gap-5'>
                        <li className="hover:cursor-pointer hover:text-blue_ciel font-semibold">Services</li>
                        <li className="hover:cursor-pointer hover:text-blue_ciel font-semibold">Logiciel</li>
                        <li className="hover:cursor-pointer hover:text-blue_ciel font-semibold">Talents</li>
                        <li className="hover:cursor-pointer hover:text-blue_ciel font-semibold">Apropos</li>
                        <li className="hover:cursor-pointer hover:text-blue_ciel font-semibold">Blog</li>
                    </ul>
                </div>
                <div className='md:flex-1 text-xl mr-2 ml-20'>
                    <div className='cursor-pointer z-1000 md:hidden' onClick={handlClic}>
                        <AiOutlineMenu size={45} />
                    </div>
                </div>
                <div className='hidden lg:flex flex-row mr-14 justify-around gap-5'>

                </div>
            </div>
            <div
                className={
                    active ? "md:fixed top-0 left-0 w-full h-screen bg-black/70 z-10" : ""
                }>
                <div
                    className={
                        active
                            ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-white p-2 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-2 ease-in duration-500 z-0"
                    }>
                    <div className='flex flex-row  justify-between z-[1000]'>
                        <div className='' onClick={() => router.push("/")}>
                            <img
                                src={logo}
                                alt='Picture of the author'
                                width={80}
                                height={80}
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
