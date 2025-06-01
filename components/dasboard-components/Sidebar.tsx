import { ChartNoAxesCombined, House, Network } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="min-h-screen bg-[#232222] w-[10%] pt-[2%] flex flex-col">
            <a href="/" className="w-full block py-3 mb-15 text-center">
                <div className="flex justify-center space-x-2">
                    <House /> <span>Home</span>
                </div>
            </a>
            <a href="/" className="w-full block py-3 mb-15 text-center">
                <div className="flex justify-center space-x-2">
                    <Network /> <span>Campaigns</span>
                </div>
            </a>
            <a href="/" className="w-full block py-3 mb-15 text-center">
                <div className="flex justify-center space-x-2">
                    <ChartNoAxesCombined /> <span>Analytics</span>
                </div>
            </a>
        </div>
    );
};

export default Sidebar;
