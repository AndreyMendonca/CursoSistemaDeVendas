'use client'
import { ClienteForm } from "@/components/clientes/cliente-form";
import { Layout } from "@/components/layout/layout";
import { Alert } from "@/components/message";
import { useClienteService } from "@/services/cliente";
import { Cliente } from "@/types/cliente";
import { useState } from "react";

const Page = () => {
    const [cliente, setCliente] = useState<Cliente>({});
    const [mensagens, setMensagens] = useState<Array<Alert>>([]);
    const service = useClienteService;

    const handleSubmit = async (cliente: Cliente) => {
        console.log(cliente)
        if (cliente.id) {
            service.atualizar( parseInt(cliente.id), cliente)
                .then(response => setMensagens([{ texto: 'Cliente atualizado com sucesso!', tipo: 'success' }]))
                .catch(error => setMensagens([{ texto: `Erro: ${error}`, tipo: 'error' }]))
        } else {
            service.salvar(cliente)
                .then(response => {
                    setCliente(response);
                    setMensagens([{ texto: 'Cliente salvo com sucesso!', tipo: 'success' }]);
                })
                .catch(error => setMensagens([{ texto: `Erro: ${error}`, tipo: 'error' }]))
        }
    }

    return (
        <Layout titulo="Cadastrar Clientes" mensagens={mensagens}>
            <ClienteForm cliente={cliente} onSubmit={handleSubmit} />
        </Layout>

    )
}

export default Page;
