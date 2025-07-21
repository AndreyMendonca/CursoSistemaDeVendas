import { Cliente } from "@/types/cliente"
import { useFormik } from "formik";
import { useParams } from "next/navigation";
import { InputCliente } from "../input-cliente";
import Link from "next/link";

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

export const ClienteForm = ({ cliente, onSubmit }: Props) => {
    const params = useParams();
    const queryId = params.id as string;
    const formik = useFormik<Cliente>({
        initialValues: { ...formSchema, ...cliente },
        onSubmit
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
                {
                    formik.values.id &&
                    <div className="grid grid-cols-2 gap-5">
                        <InputCliente id="id" nome="ID" value={formik.values.id} onChange={formik.handleChange} name="id" disabled={true} />
                        <InputCliente id="dataCadastro" nome="Data Cadastro" value={formik.values.dataCadastro} onChange={formik.handleChange} name="dataCadastro" disabled={true} />
                    </div>
                }

                <InputCliente id="nome" nome="Nome *" value={formik.values.nome} onChange={formik.handleChange} placeholder="Digite o nome do cliente" />

                <div className="grid grid-cols-2 gap-5">
                    <InputCliente id="cpf" nome="CPF" value={formik.values.cpf} onChange={formik.handleChange} name="cpf" placeholder="Digite o CPF" />
                    <InputCliente id="nascimento" nome="Data Nascimento" value={formik.values.nascimento} onChange={formik.handleChange} name="nascimento" placeholder="Digite a data de nascimento" />
                </div>

                <InputCliente id="endereco" nome="Endereço *" value={formik.values.endereco} onChange={formik.handleChange} placeholder="Digite o endereço" />

                <div className="grid grid-cols-2 gap-5">
                    <InputCliente id="email" nome="Email" value={formik.values.email} onChange={formik.handleChange} name="email" placeholder="Digite o email" autoComplete="off"/>
                    <InputCliente id="telefone" nome="Telefone" value={formik.values.telefone} onChange={formik.handleChange} name="telefone" placeholder="Digite o telefone" />
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