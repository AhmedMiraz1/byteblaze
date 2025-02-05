import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar/>
                </div>
             <div className="min-h-[calc(100vh-116px)]">
             <Outlet/>
             </div>

             <Footer/>

        </div>
    );
};

export default MainLayouts;