import { formatReal } from "@/app/utils/money";
import { Produto } from "@/types/produto"
import { Pencil, Trash } from "lucide-react";

type Props = {
    produtos: Produto[];
    onEdit: (produto: Produto) => void;
    onDelete: (produto: Produto) => void;
}

export const TabelaProdutos = ({ produtos, onEdit, onDelete }: Props) => {
    return (
        <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden shadow my-4">
            <thead>
                <tr className="bg-gray-500 text-white">
                    <th className="px-4 py-2 text-left w-1/12">ID</th>
                    <th className="px-4 py-2 text-left">SKU</th>
                    <th className="px-4 py-2 text-left">NOME</th>
                    <th className="px-4 py-2 text-left">PREÇO</th>
                    <th className="px-4 py-2 text-center">AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                {
                    produtos.map(p => (
                        <tr className="bg-white hover:bg-gray-100 border-b" key={p.id}>
                            <td className="px-4 py-2">{p.id}</td>
                            <td className="px-4 py-2">{p.sku}</td>
                            <td className="px-4 py-2">{p.nome}</td>
                            <td className="px-4 py-2">R$ {formatReal(p.preco)}</td>
                            <td className="px-4 py-2  flex gap-4 justify-center">
                                <button onClick={() => onEdit(p)} className="rounded-full p-2 bg-yellow-300 cursor-pointer"><Pencil className="size-4"/></button>
                                <button onClick={() => onDelete(p)} className="rounded-full p-2 bg-red-500 cursor-pointer"><Trash className="size-4 text-white"/></button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}