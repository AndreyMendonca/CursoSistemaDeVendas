"use client";
type Props = {
    nome: string;
    id: string;
    current?: boolean;
    error?: string;
}& React.InputHTMLAttributes<HTMLInputElement>;

export const InputCliente = ({nome, id,current = false, error, ...rest}: Props) => {
    return (
        <div className="flex flex-col gap-2 text-gray-700">
            <label htmlFor={id} className="text-xl font-semibold">{nome}</label>
            <input
                type="text"
                id={id}
                value={rest.value ?? ''}
                className={`border ${error ? 'border-red-500 focus:outline-red-600' : 'border-gray-300 focus:outline-gray-600'} p-2 rounded-md ${rest.disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}`}
                {...rest}
            />
            {error &&
                <p className="text-sm text-red-500">{error}</p>
            }
        </div>
    )
}