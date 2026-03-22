export function ModalAddOrder({setIsOpen,fetchAddOrder,error,setError}){ 

    function handleSubmit(e){
        e.preventDefault()
        if(!e.target.carModel.value || !e.target.package.value || !e.target.package.value || !e.target.carPlate.value||!e.target.firstName.value || !e.target.lastName.value){
            setError("Please complete the form")
            return
        }
        const Order = {
          namaPelanggan: `${e.target.firstName.value} ${e.target.lastName.value}`.trim(),
          jenisKendaraan: e.target.carModel.value,
          paketCuci: e.target.package.value,
          nomorPlat: e.target.carPlate.value,
        }

        fetchAddOrder(Order)
        setIsOpen(false)
    }

    return(
        <div className="w-full h-full bg-[#15141A] rounded-xl absolute inset-0 z-50 flex justify-center items-center">
            <div className=" w-[40%] h-[90%] bg-[#171E2C] flex flex-col p-6 rounded-3xl">
                <form className="flex flex-col justify-between w-full h-full" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex flex-1 gap-4 flex-col">
                        <p className="text-main text-white font-extrabold text-2xl py-4">Adding a new order</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-montserrat-sb text-white ">Customer Information:</p>
                            <div className="flex gap-3">
                                <input name="firstName" type="text" placeholder="First Name" className="bg-white text-xs rounded-lg p-1 outline-0"/>
                                <input name="lastName" type="text" placeholder="Last Name" className="bg-white text-xs rounded-lg p-1 outline-0"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-montserrat-sb text-white ">Car Information:</p>
                            <div className="flex gap-3">
                                <input name="carPlate" type="text" placeholder="Car Plate Number" className="bg-white text-xs rounded-lg p-1 outline-0"/>
                                <input name="carModel" type="text" placeholder="Car Model & Brand" className="bg-white text-xs rounded-lg p-1 outline-0"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-montserrat-sb text-white ">Cleaning Package:</p>
                            <div className="flex gap-3">
                                <select name="package" id="" className="bg-white text-xs rounded-lg p-1 outline-0">
                                    <option value="Basic Package">Basic Package</option>
                                    <option value="Standard Package">Standard Package</option>
                                    <option value="Premium Package">Premium Package</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-red-500">{error}</div>
                        <div className="flex flex-row justify-end gap-3">
                            <button onClick={()=>setIsOpen(false)} className="bg-white text-black text-montserrat-sb font-bold text-sm px-4 py-1 rounded-lg cursor-pointer">Cancel</button>
                           <button className="bg-linear-to-r from-[#4FD5FA] to-[#1A46BF] text-black text-montserrat-sb font-bold text-sm px-3 py-1 rounded-lg cursor-pointer">Add New</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}