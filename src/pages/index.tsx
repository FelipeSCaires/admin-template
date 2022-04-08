import { useContext } from "react";
import Layout from "../components/template/Layout";
import AppContext from "../data/context/AppContext";


export default function Home() {
   const {menu,setMenu} = useContext(AppContext)
  return (
   
      <Layout titulo="Página Inicial" subtitulo="Estamos Construindo">
          
          <button onClick={()=>setMenu(true)}>teste1</button>
          <button onClick={()=>setMenu(false)}>teste2</button>
      </Layout>
  )
}
