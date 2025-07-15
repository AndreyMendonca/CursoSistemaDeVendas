import { Alert, Message } from "../message";
import { LayoutMenu } from "./menu"

type Props = {
    children?: React.ReactNode;
    titulo: string;
    mensagens?: Array<Alert>
}

export const Layout = ({children, titulo, mensagens}:Props) => {
    return (
        <section className="flex bg-gray-100">
            <div className="h-screen min-w-60 p-5 flex items-center justify-center">
                <LayoutMenu/>
            </div>
            <div className="flex flex-col flex-1 py-10 px-5 max-h-screen overflow-y-auto">
                <div className="border-b-2 border-gray-300 mb-1 bg-white p-5 rounded-sm shadow-lg">
                    <p className="text-xl font-bold text-gray-600">{titulo}</p>
                </div>
                <div className="bg-white flex-1 p-5 rounded-sm ">
                    {
                        mensagens && mensagens.map( msg => <Message key={msg.texto} texto={msg.texto} tipo={msg.tipo} />)
                    }
                    {children}
                </div>
            </div>
        </section>
    )
}