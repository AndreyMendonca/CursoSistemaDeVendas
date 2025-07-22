"use client";

import { FormatUtils } from "@4us-dev/utils";

type Props = {
    nome: string;
    id: string;
    error?: string;
    formatter?: (value: string) => string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const formatUtils = new FormatUtils();

export const InputCliente = ({ nome, id, error, formatter, onChange, ...rest }: Props) => {

    /*
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const name = event.target.name;

        const formattedValue = (formatter && formatter(value as string)) || value

        onChange({
            ...event,
            target: {
                name,
                value: formattedValue
            }
        })
    } */

    /*
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (formatter) {
            value = formatter(value);
            console.log(value)
        }
        

        console.log(rest)
        if (rest.name && onChange) {
            // Se estiver usando Formik, chame setFieldValue
            if (rest['value']) {
                rest['value'] = (rest.name, value);
            } else {
                // Atualize o valor do evento antes de chamar onChange
                Object.defineProperty(event.target, "value", { value, writable: true });
                onChange(event);
            }
        }
    }*/
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        if (formatter) {
            value = formatter(value);
        }

        if (onChange) {
            const syntheticEvent = {
                ...event,
                target: {
                    ...event.target,
                    value,
                    name: rest.name || event.target.name,
                },
            };
            onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
        }
    };


    return (
        <div className="flex flex-col gap-2 text-gray-700">
            <label htmlFor={id} className="text-xl font-semibold">{nome}</label>
            <input
                type="text"
                id={id}
                value={rest.value ?? ''}
                onChange={onInputChange}
                className={`border ${error ? 'border-red-500 focus:outline-red-600' : 'border-gray-300 focus:outline-gray-600'} p-2 rounded-md ${rest.disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}`}
                {...rest}
            />
            {error &&
                <p className="text-sm text-red-500">{error}</p>
            }
        </div>
    )
}

export const InputCPF = (props: Props) => {
    return (
        <InputCliente {...props} formatter={formatUtils.formatCPF} />
    )
}

export const InputTelefone = (props: Props) => {
    return (
        <InputCliente {...props} formatter={formatUtils.formatPhone} />
    )
}

export const InputData = (props: Props) => {

    const formatData = (value: string) => {
        if (!value) {
            return ''
        }

        const data = formatUtils.formatOnlyIntegers(value);
        const size = data.length;
        
        if (size <= 2) return data;
        if (size <= 4) return `${data.slice(0, 2)}/${data.slice(2, 4)}`;
        return `${data.slice(0, 2)}/${data.slice(2, 4)}/${data.slice(4, 8)}`;

    }

    return (
        <InputCliente {...props} maxLength={10} formatter={formatData} />
    )
}