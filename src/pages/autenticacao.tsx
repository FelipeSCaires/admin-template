import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
    const [modo, setModo] = useState<'Login' | 'Cadastro'>('Login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return(
        <div>
            <h1>Autenticação</h1>
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
            </div>
    )
}