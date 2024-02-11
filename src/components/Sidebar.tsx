import logo from '../assets/Grouplogo.png'
import {Menu} from "./index.tsx";

function Sidebar() {
    return (
        <div className='flex flex-col items-center  bg-main sidebar h-[100vh] fixed custom-scrollbar max-w-[20%] min-w-[16%] drop-shadow-xl shadow-sm z-[99]'>
                <div className='flex sticky top-0 z-50 bg-darkMain justify-center items-center w-full h-14'>
                    <img src={logo} alt="logo" width={50} height={50}/>
                </div>

                    <Menu/>

        </div>
    )
}

export default Sidebar