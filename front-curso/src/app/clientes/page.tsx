"use client"
import { Layout } from "@/components/layout/layout";
import { Alert } from "@/components/message";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ClientesPage = () => {
    const [mensagens, setMensagens] = useState<Alert[]>([])
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
        </Layout>
    )
}

export default ClientesPage;