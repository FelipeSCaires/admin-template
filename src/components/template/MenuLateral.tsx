import { IconeAjuste, IconeBell, IconeHome, IconLogout } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
export default function MenuLateral(props){
    return(
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-900
            dark:bg-gray-900 dark:text-gray-200
        
        `}>
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
                className={`text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
                />
            </ul>
        </aside>
    )
}