import { createContext, useState } from "react";


const valorInicial = {menu: true, setMenu: (men: boolean)=>{}}

const AppContext = createContext(valorInicial) 

export function AppProvider(props){
   const [menu,setMenu] = useState(valorInicial.menu)
    return(
        <AppContext.Provider value={{
            menu, setMenu
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext   
