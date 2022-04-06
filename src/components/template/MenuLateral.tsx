import { IconeAjuste, IconeBell, IconeHome, IconLogout } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
export default function MenuLateral(props){
    return(
        <aside className="flex flex-col">
            <div className={`h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center`}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeHome}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjuste}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeBell}/>
            </ul>
            <ul>
                <MenuItem  texto="Sair" icone={IconLogout} onClick={()=> console.log('logout')}
                className={`text-red-600 hover:bg-indigo-500 hover:text-white`}
                />
            </ul>
        </aside>
    )
}