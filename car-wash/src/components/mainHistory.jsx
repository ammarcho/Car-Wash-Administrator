
function ListHistory({history}){
    return(
        <div className="flex flex-col gap-3 text-white p-4 scroll-auto">
            {history.map(history=>(
                <div className="grid grid-cols-7 border-[0.5px] border-gray-500 rounded-sm p-2 ">
                    <p className="flex items-center justify-center">{history.PK}</p>
                    <p className="flex items-center justify-center">{history.name}</p>
                    <p className="flex items-center justify-center">{history.plat}</p>
                    <p className="flex items-center justify-center">{history.car}</p>
                    <p className="flex items-center justify-center">{history.clock}</p>
                    <p className="flex items-center justify-center">{history.date}</p>
                    <p className="flex items-center justify-center">{history.package}</p>
                </div>
            ))}
        </div>
    )
}

function EmptyHistory(){
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <span className="material-symbols-outlined text-gray-400"style={{ fontSize: "100px" }}>question_mark</span>
            <p className="text-main text-gray-400">Order History Is Empty</p>
            <p className="text-main text-gray-400">Complete an Order to Add</p>
        </div>
    )
}

export function MainHistory({history}){
    return(
        <div className="w-full h-full  bg-[#15141A] rounded-xl">
            {history.length==0?<EmptyHistory/>:<ListHistory history={history}/>}
        </div>
    )
}