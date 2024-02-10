import {Navbar, Sidebar} from "../components";
import {Outlet} from "react-router-dom";

const LayoutDash = () => {
    return (
        <div>
            {/* <NavbarDash /> */}
           <div className={"hidden lg:flex"}>
               <Sidebar/>
           </div>
            <div>
                <Navbar/>
            </div>
            <main className={"darkMain"}>
                <Outlet/>
            </main>
        </div>
    );
};

export default LayoutDash