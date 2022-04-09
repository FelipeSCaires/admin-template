import Layout from "../components/template/Layout";
import useAppData from "../data/hook/UseAppData";
import { Switch } from '@mui/material';


export default function Home() {
   const { tema,alternarTema } =  useAppData() 
  return (
   
      <Layout titulo="Notificações" subtitulo="Aqui você irá gerencias as notificações">
        <Switch onChange={alternarTema}/>
      </Layout>
  )
}
