import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../componets/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;