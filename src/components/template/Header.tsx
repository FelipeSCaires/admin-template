import Title from "./Title"
import { Switch } from '@mui/material';
import useAppData from "../../data/hook/UseAppData";



    interface HeaderProps{
        titulo: string
        subtitulo: string
        
    }
    export default function Header(props: HeaderProps){
        const { tema,alternarTema } =  useAppData() 

        return (
            <div className={`flex `}>
              <Title titulo={props.titulo} subtitulo={props.subtitulo}/>
              <div className={`flex flex-grow justify-end`}>
                <Switch onChange={alternarTema}/>
              </div>
            </div>
        )
    }