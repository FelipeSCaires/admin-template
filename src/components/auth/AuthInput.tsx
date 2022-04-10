interface AuthInputProps{
    label: string
    valor: any
    obrigatorio?: boolean
    tipo?: 'text' | 'email' | 'password' 
    valorMudou: (novoValor: any)=> void
}

export default function AuthInput(props: AuthInputProps){
    return(
        <div className="flex flex-col mt-2">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                type={props.tipo ?? 'text'}
                onChange={e => props.valorMudou?.(e.target.value)}
                required
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500
                    focus:bg-white
                    focus:outline-none
                `}
                />
        </div>
    )
}