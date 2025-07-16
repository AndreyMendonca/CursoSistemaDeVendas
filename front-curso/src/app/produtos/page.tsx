'use client'
import { Layout } from "@/components/layout/layout"
import { Alert } from "@/components/message";
import { TabelaProdutos } from "@/components/produtos/tabela-produtos";
import { useProdutoService } from "@/services/produto";
import { Produto } from "@/types/produto";
import { CirclePlayIcon, CirclePlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProdutosPage = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const service = useProdutoService;
    const [mensagens, setMensagens] = useState<Array<Alert>>([]);
    const router = useRouter();

    const buscarTodos = async () => {
        service.buscarTodos()
            .then(response => setProdutos(response))
            .catch(() => setMensagens([{ texto: 'Erro ao buscar produtos', tipo: 'error' }]));
    }

    const handleEdit = (produto: Produto) => {
        const url = `/produtos/cadastro/${produto.id}`;
        router.push(url);
    }

    const handleDelete = (produto: Produto) => {
        console.log(produto);
    }

    useEffect(() => {
        buscarTodos();
    }, [])

    return (
        <Layout titulo="Produtos" mensagens={mensagens}>
            <Link href="/produtos/cadastro/0">
                <button className="py-3 px-4 rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-200">
                    <div className="flex gap-2">
                        <p>Novo</p>
                        <CirclePlus />
                    </div>

                </button>
            </Link>
            <TabelaProdutos produtos={produtos} onDelete={handleDelete} onEdit={handleEdit} />
        </Layout>
    )
}

export default ProdutosPage;
