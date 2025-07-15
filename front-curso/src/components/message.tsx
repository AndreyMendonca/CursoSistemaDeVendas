import { CircleAlert, CircleCheck, CircleX } from "lucide-react";

type Props = {
    texto: string;
    tipo: 'success' | 'error' | 'info';
}

export type Alert = {
    texto: string;
    tipo: 'success' | 'error' | 'info';
}

export const Message = ({texto, tipo}: Props) => {
    const alertStyles = {
        success: 'bg-green-100 border-green-600 text-green-700',
        error: 'bg-red-100 border-red-600 text-red-700',
        info: 'bg-yellow-100 border-yellow-600 text-yellow-700'
    };

    return (
        <div className={`h-14 w-full border-l-10 flex gap-2 items-center p-2 mb-3 rounded-md ${alertStyles[tipo]}`}>
            {
                tipo === 'success' ? <CircleCheck /> : 
                tipo === 'error' ? <CircleX /> :
                <CircleAlert />
            }
            <p>{texto}</p>
        </div>
    )
}