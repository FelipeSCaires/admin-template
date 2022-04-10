import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarn } from "../components/icons";
import useAuth from "../data/hook/UseAuth";

export default function Autenticacao() {

    const { usuario, loginGoogle } = useAuth()

    const [modo, setModo] = useState<'Login' | 'Cadastro'>('Login')
    const [erro, setErro] = useState(null)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg, tempo = 3){
        setErro(msg)
        setTimeout(()=> setErro(null), tempo * 1000)
    }

    function submeter(){
        if(modo === 'Login'){
            console.log('login')
        }else{
            console.log('cadastro')
        }
    }
    return(
     <div className="flex h-screen items-center justify-center">
         <div className="w-1/2 hidden md:block md:w-1/2">
             <img className="w-full h-screen object-cover" src="https://source.unsplash.com/random" alt="imagem da tela de autenticação" />
         </div>
         <div className="md:w-1/2 w-full m-10">
             <h1 className={`
                 text-xl font-bold mb-5
             `}>
                 {modo === 'Login' ? 'Entre com a sua conta' : 'Cadastre-se na Pataforma'}
             </h1>
        {erro? (
        <div className={`
            flex py-3 px-5 my-2 items-center 
            border border-red-700 rounded-lg
            bg-red-400 text-white
        `}>
            {IconWarn}
            <span className={`ml-3`}>{erro}</span>
        </div>  
        ): false}


             <AuthInput
                 tipo="email" 
                 label="Email"
                 valor={email}
                 valorMudou={setEmail}
                 obrigatorio
             />
             <AuthInput 
                 tipo="password"
                 label="Senha"
                 valor={senha}
                 valorMudou={setSenha}
                 obrigatorio
             />
             <button onClick={submeter} className={`
                 w-full bg-indigo-500 hover:bg-indigo-400
                 text-white rounded-lg px-4 py-3 mt-6
             `}>
                 {modo === 'Login' ? 'Entrar': 'Cadastrar'}
             </button>
 
             <hr className="my-6 border-gray-300 w-full"/>
 
             <button onClick={loginGoogle} className={`
                 w-full bg-red-500 hover:bg-red-400
                 text-white rounded-lg px-4 py-3 
             `}>
                 {modo === 'Login' ? 'Entrar': 'Cadastrar'} Com Google
             </button>
             {modo === 'Login'?(
                 <p className="mt-8"> Novo por aqui?
                     <a onClick={()=>setModo('Cadastro')} className={`
                     text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                     `}> Crie uma conta gratuitamente</a>
                </p>
             ): (
                <p className="mt-8"> Já faz parte da nossa comunidade?
                     <a onClick={()=>setModo('Login')} className={`
                     text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                     `}> Entre com as suas credenciais</a>
                </p>
             )}
             </div>
     </div>   
     )

}