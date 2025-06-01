import { Outlet } from "react-router-dom";
import Navbar from "../dasboard-components/Navbar";
import Sidebar from "../dasboard-components/Sidebar";

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
