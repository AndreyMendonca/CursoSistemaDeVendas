import { Layout } from "@/components/layout/layout";


const Page = () => {
    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="flex flex-col gap-6 text-gray-700">
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sku" className="text-xl font-semibold">SKU *</label>
                        <input
                            type="text"
                            id="sku"
                            className="border border-gray-300 p-2 rounded-md"
                            placeholder="Digite o SKU do produto"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="preco" className="text-xl font-semibold">Preço *</label>
                        <input
                            type="text"
                            id="preco"
                            className="border border-gray-300 p-2 rounded-md"
                            placeholder="Digite o preço do produto"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-xl font-semibold">Nome *</label>
                    <input
                        type="text"
                        id="nome"
                        className="border border-gray-300 p-2 rounded-md"
                        placeholder="Digite o nome do produto"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-xl font-semibold">Descrição *</label>
                    <textarea
                        rows={5}
                        id="descricao"
                        className="border border-gray-300 p-2 rounded-md resize-none"
                        placeholder="Digite a descrição do produto"
                    />
                </div>
                <div className="flex gap-5">
                    <button className="py-3 px-4 border rounded-md cursor-pointer">Salvar</button>
                    <button className="py-3 px-4 border rounded-md cursor-pointer">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}

export default Page;