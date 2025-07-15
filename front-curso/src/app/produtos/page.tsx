import { Layout } from "@/components/layout/layout"
import { CirclePlayIcon, CirclePlus, CirclePlusIcon } from "lucide-react";
import Link from "next/link";

const ProdutosPage = () => {
    return (
        <Layout titulo="Produtos">
            <Link href="/produtos/cadastro">
                <button className="py-3 px-4 rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-200 flex gap-2">Novo <CirclePlus/> </button>
            </Link>

        </Layout>
    )
}

export default ProdutosPage;
