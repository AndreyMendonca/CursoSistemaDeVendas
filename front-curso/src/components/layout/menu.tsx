import { House, PackagePlus } from "lucide-react"
import Link from "next/link"

export const LayoutMenu = () => {
    return (
        <aside>
            <p className="text-2xl font-bold">System<span className="text-sky-500">Vendas</span></p>
            <ul>
                <li>
                    <Link href="/" className="flex gap-2 p-3 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-neutral-200 transition-colors">
                        <House />
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/" className="flex gap-2 p-3 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-neutral-200 transition-colors">
                        <PackagePlus />
                        <p>Cadastros</p>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}