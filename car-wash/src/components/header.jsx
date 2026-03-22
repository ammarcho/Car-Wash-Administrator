import { useNavigate } from "react-router-dom"
import logo from "../assets/Logo.png"



export function Header(){
  const Navigate = useNavigate()
    return(
      <div className="grid grid-cols-3 w-screen p-4">

        <div className="flex flex-row gap-2 items-center justify-start" >
          <img src={logo} alt="Logo" className="w-8 h-auto object-contain cursor-pointer"onClick={()=>Navigate("/")}/>
          <div className="flex flex-col align-middle cursor-pointer"onClick={()=>Navigate("/")}>
            <p className="bg-linear-to-r from-[#4FD5FA] to-[#1A46BF] bg-clip-text text-transparent text-main font-bold  text-2xl">CLEAN</p>
            <p className="text-montserrat-r text-white font-extralight text-sm">Car Wash Services</p>
          </div>
        </div>

        <p className="text-main text-white bg-black border-none rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)] flex items-center justify-center p-1">CLEAN : Carwash Line Efficiency and Antrean Navigation</p>

        <div className="flex gap-2 justify-end">
            <div className="flex flex-col">
                <p className="text-montserrat-r text-white font-extralight text-sm">Welcome Back!</p>
                <p className="text-main text-lg text-white">Administrator</p>
            </div>
            <button className="w-12 h-12 rounded-[50%] bg-white flex justify-center items-center"><span className="material-symbols-outlined text-[40px]" style={{fontSize:"2.5rem"}}>account_circle</span></button>
        </div>

      </div>
    )
}