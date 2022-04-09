interface AuthInputProps{
    label: string
    valor: any
    obrigatorio?: boolean
    tipo?: 'text' | 'email' | 'password' 
    valorMudou: (novoValor: any)=> void
}

export default function AuthInput(props: AuthInputProps){
    return(
        <div className="flex flex-col">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                type={props.tipo ?? 'text'}
                onChange={e => props.valorMudou?.(e.target.value)}
                />
        </div>
    )
}