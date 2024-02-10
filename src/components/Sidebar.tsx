
import {FaUsersCog} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '../assets/Grouplogo.png'
import {CgMenuGridR} from "react-icons/cg";
import {GiRadarCrossSection} from "react-icons/gi";
import {SiAmazondocumentdb, SiCoursera} from "react-icons/si";
import {IoMdSchool} from "react-icons/io";
import {TiPointOfInterest} from "react-icons/ti";
import {RiMoneyDollarCircleLine} from "react-icons/ri";


function Sidebar() {
    return (
        <aside className='bg-main sidebar h-screen md:overflow-hidden custom-scrollbar  md:hover:overflow-y-auto pb-10  fixed max-w-[16%] min-w-[17%] drop-shadow-xl shadow-sm z-[99]'>
            <div className='flex sticky top-0 z-50 h-14 bg-darkMain justify-center items-center w-full'>
                <img src={logo} alt="logo" width={50} height={50}/>
            </div>
            <ul className='flex flex-col text-gray-300 w-[100%]'>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><CgMenuGridR className='text-white ml-1' size={18}/></span>
                    <Link to="/home" className='ml-3 mt-1'>Tableau de bord</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><FaUsersCog className='text-white ml-1' size={16}/></span>
                    <Link to="/utilisateurs" className='ml-3 mt-1'>Utilisateurs</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><GiRadarCrossSection className='text-white ml-1' size={16}/></span>
                    <Link to='/section' className='ml-2 mt-1 '>Section</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><FaUsersCog className='text-white ml-1' size={16}/></span>
                    <Link to="/utilisateurs" className='ml-3 mt-1'>Utilisateurs</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><GiRadarCrossSection className='text-white ml-1' size={16}/></span>
                    <Link to='/section' className='ml-2 mt-1 '>Section</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><FaUsersCog className='text-white ml-1' size={16}/></span>
                    <Link to="/utilisateurs" className='ml-3 mt-1'>Utilisateurs</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><GiRadarCrossSection className='text-white ml-1' size={16}/></span>
                    <Link to='/section' className='ml-2 mt-1 '>Section</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><FaUsersCog className='text-white ml-1' size={16}/></span>
                    <Link to="/utilisateurs" className='ml-3 mt-1'>Utilisateurs</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><GiRadarCrossSection className='text-white ml-1' size={16}/></span>
                    <Link to='/section' className='ml-2 mt-1 '>Section</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><FaUsersCog className='text-white ml-1' size={16}/></span>
                    <Link to="/utilisateurs" className='ml-3 mt-1'>Utilisateurs</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><GiRadarCrossSection className='text-white ml-1' size={16}/></span>
                    <Link to='/section' className='ml-2 mt-1 '>Section</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><SiCoursera className='text-white ml-1' size={16
                    }/></span>
                    <Link to='/cours' className='ml-2 mt-1 '>Cours</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><IoMdSchool className='text-white' size={22}/></span>
                    <Link to='/apprenants' className='ml-2 mt-1 '>Apprenants</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><TiPointOfInterest className='text-white' size={22}/></span>
                    <Link to='/cotes' className='ml-2 mt-1 '>Cotes</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><RiMoneyDollarCircleLine className='text-white' size={22}/></span>
                    <Link to='/finances' className='ml-2 mt-1 '>Finances</Link>
                </li>
                <li className='flex m-1 cursor-pointer border-transparent hover:border-white border-1 p-1'>
                    <span className='mt-1'><SiAmazondocumentdb className='text-white' size={18}/></span>
                    <Link to="/rapports" className='ml-3 mt-1'>Rapports</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar