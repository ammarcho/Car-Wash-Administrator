import { NavLink } from "react-router-dom";

export function Navbar(){
    return(
        <div className="flex flex-col gap-8 items-center w-full h-full bg-[#15141A] rounded-xl p-6">
            <NavLink to="/" end className={({ isActive }) =>`w-full p-2 rounded-lg flex gap-2 items-center cursor-pointer ${isActive ? "bg-[#2C2B31] text-white" : "text-gray-400"}`}>
                <p className="w-full flex flex-row gap-1 text-white justify-start items-start"><span className="material-symbols-outlined">content_paste_search</span>Order Tracker</p>
            </NavLink>

            <NavLink
                to="/history"
                className={({ isActive }) =>`w-full p-2 rounded-lg flex gap-2 items-center cursor-pointer ${isActive ? "bg-[#2C2B31] text-white" : "text-gray-400"}`}> 
                <p className="w-full flex flex-row gap-1 text-white justify-start items-start"><span className="material-symbols-outlined">history</span>History</p>
            </NavLink>
        </div>
    )
}