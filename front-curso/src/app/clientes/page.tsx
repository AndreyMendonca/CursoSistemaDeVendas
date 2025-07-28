"use client"
import { ConsultaClientsForm, FormFind } from "@/components/clientes/form-find";
import { Layout } from "@/components/layout/layout";
import { Alert } from "@/components/message";
import { useClienteService } from "@/services/cliente";
import { Cliente } from "@/types/cliente";
import { Page } from "@/types/page";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable, DataTablePageEvent  } from "primereact/datatable";
import { useEffect, useState } from "react";

const ClientesPage = () => {
    const service = useClienteService;
    const [mensagens, setMensagens] = useState<Alert[]>([]);
    const [clientes, setClientes] = useState<Page<Cliente> | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [filtro, setFiltro] = useState<ConsultaClientsForm>({ nome: "", cpf: "" });
    const [first, setFirst] = useState(0);

    const handleSubmit = (filtro: ConsultaClientsForm) => {
        setFiltro(filtro);
        handlePage(filtro, 0, 10);
    };

    const handlePage = (filtro: ConsultaClientsForm, first: number, rows: number) => {
        setLoading(true);
        const page = Math.floor(first / rows);
        service.buscaPaginada(filtro.nome, filtro.cpf, page, rows)
            .then(result => {
                setClientes(result);
                setFirst(first);
            })
            .finally(() => setLoading(false));
    };

    const handleDataTablePage = (event: DataTablePageEvent) => {
        handlePage(filtro, event.first, event.rows);
    };

    useEffect(()=>{
        handleSubmit(filtro);
    },[])

    return (
        <Layout titulo="Clientes" mensagens={mensagens}>
            <Link href="/clientes/cadastro/0">
                <button className="py-3 px-4 rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-200">
                    <div className="flex gap-2">
                        <p>Novo</p>
                        <CirclePlus />
                    </div>
                </button>
            </Link>
            <FormFind onFind={handleSubmit} />
            <DataTable 
                value={clientes?.content} 
                totalRecords={clientes?.totalElements}
                lazy paginator
                first={first}
                rows={clientes?.size} 
                onPage={handleDataTablePage}
                tableStyle={{ minWidth: '50rem' }} 
                emptyMessage="Nenhum registro"
                loading={loading}
            >
                <Column field="id" header="Código" style={{ width: '25%' }}></Column>
                <Column field="nome" header="Nome" style={{ width: '25%' }}></Column>
                <Column field="cpf" header="CPF" style={{ width: '25%' }}></Column>
                <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
            </DataTable>
        </Layout>
    )
}

export default ClientesPage;