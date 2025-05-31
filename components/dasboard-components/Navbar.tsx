import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <div className="py-2 px-8 flex justify-between bg-[#232222] border-b border-b-[#988C8C]">
            <img src="/navbar-icon.svg" alt="" className="block" />
            <div className="flex space-x-3 items-center">
                <img src="/nav-line.svg" alt="" className="block" />
                <div>
                    <p className="mb-2">Luciferess</p>
                    <p className="text-[#988C8C]">0x742d...f44e</p>
                </div>
                <button className="block">
                    <ChevronDown />
                </button>
                <img src="/memoji.svg" alt="" className="block" />
            </div>
        </div>
    );
};

export default Navbar;
