"use client";
import { converterEmBigDecimal } from "@/app/utils/money";
import { Alert } from "@/components/message";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout/layout";
import { useProdutoService } from "@/services/produto";
import { Produto } from "@/types/produto";
import { useState } from "react";
import * as yup from 'yup'
import Link from "next/link";

const validationSchema = yup.object().shape({
    sku: yup.string().trim().required("Campo é Obrigatório"),
    nome: yup.string().trim().required("Campo é Obrigatório"),
    preco: yup.string().required("Campo é Obrigatório"),
    descricao: yup.string().trim().required("Campo é Obrigatório"),
})

interface FormError {
    sku?: string;
    nome?: string;
    preco?: string;
    descricao?: string;
}

const CadastroProduto = () => {
    const service = useProdutoService;
    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [id, setId] = useState<number | undefined>(undefined);
    const [dataCadastro, setDataCadastro] = useState<string | undefined>('');
    const [mensagens, setMensagens] = useState<Array<Alert>>([]);
    const [errors, setErrors] = useState<FormError>({});

    const submit = async () => {
        const produto: Produto = {
            sku,
            preco: converterEmBigDecimal(preco),
            nome,
            descricao
        }

        validationSchema.validate(produto, { abortEarly: false }).then(obj => {
            setErrors({})
            id
                ?
                service.atualizar(id!, produto)
                    .then(() => setMensagens([{ texto: 'Produto atualizado com sucesso!', tipo: 'success' }]))
                :
                service.salvar(produto)
                    .then(response => {
                        setMensagens([{ texto: 'Produto salvo com sucesso!', tipo: 'success' }]);
                        setId(response.id);
                        setDataCadastro(response.dataCadastro);
                    })
        }).catch(error => {
            if (error.inner) {
                const formErrors: FormError = {};
                error.inner.forEach((err: any) => {
                    if (err.path) formErrors[err.path as keyof FormError] = err.message;
                });
                setErrors(formErrors);
            } else {
                setErrors({ [error.path]: error.message });
            }
        })

    };

    return (
        <Layout titulo="Cadastro de Produtos" mensagens={mensagens}>
            <div className="flex flex-col gap-6">
                {
                    id &&
                    <div className="grid grid-cols-2 gap-5">
                        <Input id="id" nome="ID" value={id} disabled={true} />
                        <Input id="criacao" nome="Data Cadastro" value={dataCadastro} disabled={true} />
                    </div>
                }

                <div className="grid grid-cols-2 gap-5">
                    <Input id="sku" nome="SKU *" set={setSku} value={sku} placeholder="Digite o SKU" error={errors.sku} />
                    <Input id="preco" nome="Preço *" set={setPreco} value={preco} placeholder="Digite o preço" current={true} error={errors.preco} />
                </div>

                <Input id="nome" nome="Nome *" set={setNome} value={nome} placeholder="Digite o nome do produto" error={errors.nome} />

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-xl font-semibold">Descrição *</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        rows={5}
                        id="descricao"
                        className={`border ${errors.descricao ? 'border-red-500 focus:outline-red-600' : 'border-gray-300 focus:outline-gray-600'} p-2 rounded-md resize-none`}
                        placeholder="Digite a descrição do produto"
                    />
                    {
                        errors.descricao &&
                        <p className="text-sm text-red-500">{errors.descricao}</p>
                    }
                </div>
                <div className="flex gap-5">
                    <button onClick={submit} className="py-3 px-4 rounded-md cursor-pointer bg-green-500 hover:bg-green-400">
                        {id ? 'Atualizar' : 'Salvar'}
                    </button>
                    <Link href="/produtos">
                        <button className="py-3 px-4 rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-200">Voltar</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default CadastroProduto;