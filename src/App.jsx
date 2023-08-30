import Navbar from "./components/Navbar"
import { Outlet,useRoutes } from "react-router-dom"
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"

export default function App() {
  // area declarativa
  return (
    <>
     <div>
      <Navbar/>
      <Outlet/>

       <Cabecalho/>
      <Rodape/>
      
    </div>
    </>
  )
}