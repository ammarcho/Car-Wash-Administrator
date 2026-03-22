import {Routes,Route, BrowserRouter,Outlet  } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { MainOrderTracker } from "./components/mainOrderTracker";
import { MainHistory } from "./components/mainHistory";
import { useEffect, useState } from "react";


function Layout(){
  return(
    <div className="grid grid-rows-[auto_1fr] bg-[#22222E] h-screen w-screen box-border overflow-hidden">
      <Header/>
      <div className="px-2 h-full">
        <div className="grid grid-cols-[320px_1fr] gap-2 p-2  bg-[#0F1015] rounded-xl h-full">
          <div className="h-full w-full">
            <Navbar/>
          </div>
          <main className="relative h-full w-full">
            <Outlet/>
          </main>
        </div>
      </div>
    </div>
  )
}


function App() {
  const [ordersFormatted, setOrdersFormatted] = useState([])
  const [history,setHistory] = useState([])
  const [error,setError] = useState("")

  async function fetchAddOrder(newOrder){
    try{
      setError("")
      const res = await fetch("http://localhost:8080/api/antrean",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newOrder)
      })

      const resData = await res.json()

      if(!res.ok){
        setError(resData.message)
        return
      }
      await fetchOrder(resData)

    }


    catch(err){
      console.error(err)
      setError(err)
    }
  }

  async function fetchOrder(){
    setError("")
    const res = await fetch("http://localhost:8080/api/antrean")
    const resData = await res.json()
    if(!res.ok){
      setError(resData.message)
      return
    }

    const formatted = resData.data.map((order)=>{
      const {date,clock} = parseWaktu(order.waktuMasuk)
      return{
        PK: order.id,
        name: order.namaPelanggan,
        plat: order.nomorPlat,
        car: order.jenisKendaraan,
        package: order.paketCuci,
        date,
        clock
      }
    })
    setOrdersFormatted(formatted)
  }

  async function fetchProcess() {
  try {
    setError("")
    const res = await fetch("http://localhost:8080/api/proses", {
      method: "POST"
    })
    const resData = await res.json()
    if (!res.ok) {
      setError(resData.message)
      return
    }
  
    await fetchOrder()
    await fetchHistory()
  } catch (err) {
    console.error(err)
    setError(err.message)
  }
}

async function fetchHistory() {
  try {
    setError("")
    const res = await fetch("http://localhost:8080/api/riwayat")
    const resData = await res.json()
    if (!res.ok) {
      setError(resData.message)
      return
    }
    const formatted = resData.data.map((item) => {
      const { date, clock } = parseWaktu(item.waktuMasuk)
      return {
        PK: item.id,
        name: item.namaPelanggan,
        plat: item.nomorPlat,
        car: item.jenisKendaraan,
        package: item.paketCuci,
        date,
        clock
      }
    })
    setHistory(formatted)
  } catch (err) {
    console.error(err)
    setError(err.message)
  }
}

  function parseWaktu(waktuMasuk) {
    const [date, time] = (waktuMasuk ?? "").split(" ")
    // Format date: "2026-03-22" → "22 Mar 2026"
    const dateFormatted = new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit", month: "short", year: "numeric"
    })
    // Format time: "14:30:00" → "14:30"
    const timeFormatted = time?.slice(0, 5) ?? "-"
    return { date: dateFormatted, clock: timeFormatted }
  }

  useEffect(()=>{fetchOrder(),fetchHistory()},[])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<MainOrderTracker ordersFormatted={ordersFormatted} fetchAddOrder={fetchAddOrder} error={error} setError={setError} fetchProcess={fetchProcess}/>}></Route>
          <Route path="/history" element={<MainHistory history={history}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
