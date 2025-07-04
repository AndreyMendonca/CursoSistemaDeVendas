"use client";
type Props = {
    nome: string;
    id: string;
    set?: (value: string) => void;
}& React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({nome, id, set, ...rest}: Props) => {
    return (
        <div className="flex flex-col gap-2 text-gray-700">
            <label htmlFor={id} className="text-xl font-semibold">{nome}</label>
            <input
                type="text"
                id={id}
                onChange={(e) => set && set(e.target.value)}
                className="border border-gray-300 p-2 rounded-md"
                {...rest}
            />
        </div>
    )
}