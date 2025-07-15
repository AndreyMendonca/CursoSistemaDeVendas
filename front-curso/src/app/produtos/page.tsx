'use client'
import { Layout } from "@/components/layout/layout"
import { Alert } from "@/components/message";
import { TabelaProdutos } from "@/components/produtos/tabela-produtos";
import { useProdutoService } from "@/services/produto";
import { Produto } from "@/types/produto";
import { CirclePlayIcon, CirclePlus, CirclePlusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProdutosPage = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const service = useProdutoService;
    const [mensagens, setMensagens] = useState<Array<Alert>>([]);

    const buscarTodos = async () =>{
        service.buscarTodos()
            .then(response => setProdutos(response))
            .catch(() => setMensagens([{ texto: 'Erro ao buscar produtos', tipo: 'error' }]));
    }

    useEffect(()=>{
        buscarTodos();
    }, [])

    return (
        <Layout titulo="Produtos" mensagens={mensagens}>
            <Link href="/produtos/cadastro">
                <button className="py-3 px-4 rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-200">
                    <div className="flex gap-2">
                        <p>Novo</p>
                        <CirclePlus/> 
                    </div>
                    
                </button>
            </Link>
            <TabelaProdutos produtos={produtos}/>
        </Layout>
    )
}

export default ProdutosPage;
