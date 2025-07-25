import { Cliente } from "@/types/cliente"
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import { InputCliente, InputCPF, InputData, InputTelefone } from "../input-cliente";
import Link from "next/link";
import * as Yup from 'yup'

type Props = {
    cliente: Cliente;
    onSubmit: (cliente: Cliente) => void;
}

const formSchema: Cliente = {
    dataCadastro: '',
    cpf: '',
    email: '',
    endereco: '',
    id: '',
    nascimento: '',
    nome: '',
    telefone: ''
}

const validationScheme = Yup.object().shape({
    cpf: Yup.string().trim().required("Campo Obrigatório").length(14, "CPF Inválido"),
    nascimento: Yup.string().trim().required("Campo Obrigatório").length(10, "Data Inválida"),
    email: Yup.string().trim().required("Campo Obrigatório").email("Email inválido"),
    endereco: Yup.string().trim().required("Campo Obrigatório"),
    nome: Yup.string().trim().required("Campo Obrigatório"),
    telefone: Yup.string().trim().required("Campo Obrigatório"),
})

export const ClienteForm = ({ cliente, onSubmit }: Props) => {
    const params = useParams();
    const queryId = params.id as string;
    const formik = useFormik<Cliente>({
        initialValues: { ...formSchema, ...cliente },
        onSubmit,
        enableReinitialize: true,
        validationSchema: validationScheme
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
                {
                    formik.values.id &&
                    <div className="grid grid-cols-2 gap-5">
                        <InputCliente id="id" nome="ID" value={formik.values.id} onChange={formik.handleChange} name="id" disabled={true}/>
                        <InputCliente id="dataCadastro" nome="Data Cadastro" value={formik.values.dataCadastro} onChange={formik.handleChange} name="dataCadastro" disabled={true} />
                    </div>
                }

                <InputCliente id="nome" nome="Nome *" value={formik.values.nome} onChange={formik.handleChange} placeholder="Digite o nome do cliente" name="nome" error={formik.errors.nome} autoComplete="off"/>

                <div className="grid grid-cols-2 gap-5">
                    <InputCPF id="cpf" nome="CPF" value={formik.values.cpf} onChange={formik.handleChange} name="cpf" placeholder="Digite o CPF" error={formik.errors.cpf}/>
                    <InputData id="nascimento" nome="Data Nascimento" value={formik.values.nascimento} onChange={formik.handleChange} name="nascimento" placeholder="Digite a data de nascimento" error={formik.errors.nascimento}/>
                </div>

                <InputCliente id="endereco" nome="Endereço *" value={formik.values.endereco} onChange={formik.handleChange} placeholder="Digite o endereço" name="endereco" error={formik.errors.endereco}/>

                <div className="grid grid-cols-2 gap-5">
                    <InputCliente id="email" nome="Email" value={formik.values.email} onChange={formik.handleChange} name="email" placeholder="Digite o email" autoComplete="off" error={formik.errors.email}/>
                    <InputTelefone id="telefone" nome="Telefone" value={formik.values.telefone} onChange={formik.handleChange} name="telefone" placeholder="Digite o telefone" error={formik.errors.telefone}/>
                </div>

                <div className="flex gap-5">
                    <button type="submit" className="py-3 px-4 rounded-md cursor-pointer bg-green-500 hover:bg-green-400">
                        {formik.values.id ? 'Atualizar' : 'Salvar'}
                    </button>
                    <Link href="/clientes">
                        <button className="py-3 px-4 rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-200">Voltar</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}