import { useFormik } from "formik"
import { Input } from "../input"
import { InputCliente, InputCPF } from "../input-cliente"

export type ConsultaClientsForm = {
    nome?: '',
    cpf?: ''
}

type Props = {
    onFind: (filtro: ConsultaClientsForm) => void;
}

export const FormFind = ({onFind}: Props) => {

    const formik = useFormik<ConsultaClientsForm>({
        initialValues: { nome: "", cpf: "" },
        onSubmit: values => onFind(values),
    })


    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 my-2">
            <div className="grid grid-cols-2 gap-5">
                <InputCliente id="nome" nome="Nome *" value={formik.values.nome} onChange={formik.handleChange} placeholder="Buscar cliente por nome" name="nome" autoComplete="off" />
                <InputCPF id="cpf" nome="CPF" value={formik.values.cpf} onChange={formik.handleChange} name="cpf" placeholder="Buscar cliente por CPF" autoComplete="off"/>
            </div>
            <div>
                <button type="submit" className="py-3 px-4 rounded-md cursor-pointer bg-green-500 hover:bg-green-400">
                    Consultar
                </button>
            </div>
        </form>
    )
}