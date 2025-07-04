"use client";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout/layout";
import { useState } from "react";

const CadastroProduto = () => {
    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const salvar = () => {
        // Implementar a lógica de salvar o produto
        console.log({ sku, preco, nome, descricao });
    };

    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-5">
                    <Input id="sku" nome="SKU *" set={setSku}  value={sku} placeholder="Digite o SKU"  />
                    <Input id="preco" nome="Preço *" set={setPreco} value={preco} placeholder="Digite o preço" />
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
                    <button onClick={salvar} className="py-3 px-4 border rounded-md cursor-pointer">Salvar</button>
                    <button className="py-3 px-4 border rounded-md cursor-pointer">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}

export default CadastroProduto;