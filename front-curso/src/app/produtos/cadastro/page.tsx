"use client";
import { converterEmBigDecimal } from "@/app/utils/money";
import { Alert } from "@/components/message";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout/layout";
import { useProdutoService } from "@/services/produto";
import { Produto } from "@/types/produto";
import { useState } from "react";

const CadastroProduto = () => {
    const service = useProdutoService
    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [id, setId] = useState<number | undefined>(undefined);
    const [dataCadastro, setDataCadastro] = useState<string | undefined>('');
    const [mensagens, setMensagens] = useState<Array<Alert>>([]);

    const submit = async () => {
        const produto: Produto = {
            sku,
            preco: converterEmBigDecimal(preco),
            nome,
            descricao
        }
        id
            ?
                await service.atualizar(id!, produto)
                    .then(() => setMensagens([{ texto: 'Produto atualizado com sucesso!', tipo: 'success' }]))
            :
                await service.salvar(produto)
                    .then(response => {
                        setMensagens([{ texto: 'Produto salvo com sucesso!', tipo: 'success' }]);
                        setId(response.id);
                        setDataCadastro(response.dataCadastro);
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
                    <Input id="sku" nome="SKU *" set={setSku} value={sku} placeholder="Digite o SKU" />
                    <Input id="preco" nome="Preço *" set={setPreco} value={preco} placeholder="Digite o preço" current={true}/>
                </div>

                <Input id="nome" nome="Nome *" set={setNome} value={nome} placeholder="Digite o nome do produto" />

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-xl font-semibold">Descrição *</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        rows={5}
                        id="descricao"
                        className="border border-gray-300 p-2 rounded-md resize-none"
                        placeholder="Digite a descrição do produto"
                    />
                </div>
                <div className="flex gap-5">
                    <button onClick={submit} className="py-3 px-4 border rounded-md cursor-pointer">
                        {id ? 'Atualizar' : 'Salvar'}
                    </button>
                    <button className="py-3 px-4 border rounded-md cursor-pointer">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}

export default CadastroProduto;