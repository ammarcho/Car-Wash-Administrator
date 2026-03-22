import { useState } from "react"
import { ModalAddOrder } from "./modalAddOrder"

function EmptyOrder(){
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <span className="material-symbols-outlined text-gray-400"style={{ fontSize: "100px" }}>add_box</span>
            <p className="text-main text-gray-400">Today's Order Is Empty</p>
            <p className="text-main text-gray-400">Add One to Start</p>
        </div>
    )
}


function ListOrder({ordersFormatted}){
    return(
        <div className="flex flex-col gap-3 text-white p-4 h-full w-full scroll-auto">
            {ordersFormatted.map(order=>(
                <div className="grid grid-cols-8 border-[0.5px] border-gray-500 rounded-sm p-2 scroll-auto">
                    <p className="flex items-center justify-center">{order.PK}</p>
                    <p className="flex items-center justify-center">{order.name}</p>
                    <p className="flex items-center justify-center">{order.plat}</p>
                    <p className="flex items-center justify-center">{order.car}</p>
                    <p className="flex items-center justify-center">{order.clock}</p>
                    <p className="flex items-center justify-center">{order.date}</p>
                    <p className="flex items-center justify-center">{order.package}</p>
                    <div className="w-full h-full flex justify-center items-center"><p className="bg-[#B8B8B8] text-black text-montserrat-sb font-bold flex justify-center items-center rounded-sm w-[70%]">Pending</p></div>
                </div>
            ))}
        </div>
    )
}

export function MainOrderTracker({ordersFormatted,fetchAddOrder,error,setError,fetchProcess}){
    const [isOpen,setIsOpen] = useState(false)
    return(
        <>
        <div className="w-full h-full bg-[#15141A] rounded-xl grid grid-rows-[1fr_10fr_1fr] p-4">
            <div className="w-full flex justify-end"><button onClick={()=>fetchProcess()} className="flex gap-2 justify-center items-center text-white text-main bg-blue-500 p-2 rounded-lg cursor-pointer">Proccess <span className="material-symbols-outlined">local_car_wash</span></button></div>
            {ordersFormatted.length==0? <EmptyOrder/>:<ListOrder ordersFormatted={ordersFormatted}/>}

            <div className="flex flex-row justify-end items-center">
                <button onClick={()=>setIsOpen(true)} className="w-12 h-12 rounded-[50%] bg-blue-500 text-black text-main text-4xl flex justify-center items-center cursor-pointer" >+</button>
            </div>
        </div>
        {isOpen && <ModalAddOrder setIsOpen={setIsOpen} fetchAddOrder={fetchAddOrder} error={error} setError={setError}/>}
        </>
    )
}