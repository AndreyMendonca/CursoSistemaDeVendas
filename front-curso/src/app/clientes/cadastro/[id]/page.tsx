'use client'
import { ClienteForm } from "@/components/clientes/cliente-form";
import { Layout } from "@/components/layout/layout";
import { Cliente } from "@/types/cliente";
import { useState } from "react";

const Page = () =>{
    const [cliente, setCliente] = useState<Cliente>({});

    const handleSubmit = (cliente: Cliente) =>{
        console.log(cliente)
    }

    return (
        <Layout titulo="Cadastrar Clientes">
            <ClienteForm cliente={cliente} onSubmit={handleSubmit}/>
        </Layout>
        
    )
}

export default Page;
